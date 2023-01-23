import axios from "axios";
import { useState, useCallback } from "react";
import { useApiCall } from "../hooks/useApiCall";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const API_URL = "http://localhost:8080/api/1";

function HomeComponent() {
        
    
    const [categories, setCategories] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [comments, setComments] = useState([]);
    const [userComment, setUserComment] = useState("");

    //il campo data viene rinominato in pictures
    const { data: pictures, isLoading, error } = useApiCall(API_URL + "/pictures" , "get");


    const handlePictureClick = useCallback((id) => {
        setActiveIndex(id);
        axios.get(API_URL + "/class/by/picture/" + id)
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        axios.get(API_URL + "/comments/by/picture/" + id)
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const onKeyUpEnter = (e) => {
        if(e.key === 'Enter') {
            handleCommentPost(activeIndex);
        }
    }

    const handleCommentPost = useCallback((id) => {
        //creo un evento che si attiva quando l'utente clicca sul pulsante di invio

        if(userComment.trim() === '') return;
        const newComment = {text: userComment};

        axios.post(API_URL + '/comments/add/' + id , newComment)
            .then(response => {
                setComments([...comments, response.data]);
                setUserComment('');
            })
            .catch(error => {
            console.log(error);
            });
    })
    
    return (
        <div className="col-10 pt-4">
            <div className="ms_container">
                <div className="row" >
                    {
                        isLoading && (
                            <div className="col-12 text-center ms_100_vh">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )
                    }
                    {
                        error && (
                            <div className="col-12 text-center">
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            </div>
                        )
                    }
                    {
                        pictures?.length === 0 && (
                            <div className="col-12 text-center">
                                <div className="alert alert-warning" role="alert">
                                    Nessuna immagine presente
                                </div>
                            </div>
                        )
                    }
                    {pictures?.map(picture => (
                        picture.visible && (
                            <div key={picture.id} onClick={() => handlePictureClick(picture.id)} className="p-3 col-12 mb-3 ms_border_b">
                                <div className="card rounded-0 px-0 ms_bg_transparent text-white h-100">
                                    <div>
                                        <img className="card-img-top ms_img_gallery rounded-0" src={picture.url} alt="Card"/>
                                        <div className="card-body px-0">
                                            <div className="d-flex justify-content-between">
                                                <h5 className="card-title text-primary">{picture.title}</h5>
                                                <span className="bg-primary rounded ms_light_color p-2 mb-3 d-inline-block">{picture.tag}</span>
                                            </div>
                                            <p className="card-text ms_light_color"><strong>Descrizione: </strong> {picture.description}</p>
                                        </div>
                                        {
                                            activeIndex === picture.id && (
                                                <div className="pb-3">
                                                    <div className="w-100 text-white px-0 mb-3">
                                                        <strong className="ms_comment">Categorie: </strong>
                                                        {
                                                            categories?.map(category => (
                                                                <span key={category.id} className="d-inline-block me-1 text-primary" >#{category.name} </span>
                                                            ))
                                                        }
                                                    </div>
                                                    <div className="w-100 text-white px-0">
                                                        <strong className="d-inline-block mb-2">Commenti:</strong>
                                                            <ul className="ms_ul">
                                                                {
                                                                    comments?.map(comment => (
                                                                        <li key={comment.id} className="mb-2 ms_comment">
                                                                            <span>{comment.text}</span>
                                                                        </li>
                                                                    ))
                                                                }   
                                                            </ul>
                                                            <div className="d-flex align-items-center mb-2">
                                                            <input type="text" className=" ms_input_text" placeholder="Inserisci un commento" value={userComment} 
                                                            onChange={
                                                                (event) => {
                                                                    setUserComment(event.target.value);
                                                                }
                                                            } 
                                                            onKeyUp={onKeyUpEnter}
                                                            />
                                                            {/* <button className="btn btn-success"><FontAwesomeIcon icon={faPaperPlane} onClick={() => handleCommentPost(picture.id)}/></button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) 
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;