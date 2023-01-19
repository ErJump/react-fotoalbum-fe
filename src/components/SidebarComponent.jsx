import logo from "../images/jg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faToolbox } from '@fortawesome/free-solid-svg-icons'

function SidebarComponent() {
    return (
        <nav className="col-2 ms_navbar px-5 pt-4 d-flex justify-content-start flex-column align-items-start ms_bg_darker h-100 position-fixed">
            <a className="navbar-brand text-primary my-4" href="http://localhost:3000">
                <img className="ms_logo" src={logo} alt="logo"/>
            </a>
            <div className="navbar-nav d-flex flex-column">
                <a className="ms_navlink d-block rounded-5 px-3 py-1 mb-3" href="http://localhost:3000">
                    <FontAwesomeIcon icon={faHouse} className="display-inline-block me-3"/>
                    Home
                </a>
                <a className="ms_navlink d-block rounded-5 px-3 py-1 mb-3" href="http://localhost:8080/photo">
                    <FontAwesomeIcon icon={faToolbox} className="display-inline-block me-3"/>
                    Backoffice
                </a>
            </div>
        </nav>
    );
}

export default SidebarComponent;