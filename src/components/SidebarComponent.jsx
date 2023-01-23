import logo from "../images/jg.png"
import logoSmall from "../images/jg-small.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faToolbox } from '@fortawesome/free-solid-svg-icons'

function SidebarComponent() {
    return (
        <nav className="col-2 ms_navbar px-lg-3 pt-4 d-flex justify-content-start flex-column  ms_bg_darker h-100 position-fixed">
            <a className="navbar-brand text-primary my-4 w-100 border-bottom pb-4" href="http://localhost:3000">
                <img className="ms_logo d-none d-lg-block" src={logo} alt="logo"/>
                <img className="ms_logo_small d-block d-lg-none" src={logoSmall} alt="logo"/>
            </a>
            <div className="navbar-nav d-flex flex-column align-items-center align-items-md-start">
                <a className="ms_navlink d-block rounded-5 px-lg-3 py-1 mb-3" href="http://localhost:3000">
                    <FontAwesomeIcon icon={faHouse} className="d-inline-block ms_icon display-md-none  me-md-2 me-lg-3"/>
                    <span className="d-none d-md-inline">Home</span>
                </a>
                <a className="ms_navlink d-block rounded-5 px-lg-3 py-1 mb-3" href="http://localhost:8080/photo">
                    <FontAwesomeIcon icon={faToolbox} className="d-inline-block ms_icon me-md-2 me-lg-3"/>
                    <span className="d-none d-md-inline">Backoffice</span>
                </a>
            </div>
        </nav>
    );
}

export default SidebarComponent;

