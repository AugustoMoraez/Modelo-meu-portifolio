import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsDownload} from "react-icons/bs";
import {BsFillBoxFill} from "react-icons/bs";
import "./style.css";


export const BannerArea = () => {
    return(
        <div className="banner">
            <div className="social">
                <a href="#projetos" ><BsFillBoxFill/>Projetos</a>
                <a href="https://www.linkedin.com/in/moraesaugusto/" target="_blank"><BsLinkedin/>Linkedin</a>
                <a href="https://github.com/AugustoMoraez" target="_blank"><BsGithub/>GitHub</a>
                <a href="https://drive.google.com/file/d/146bPSzeGi5T8zA9lFGk9dTwwrFOUmVlS/view?usp=drive_link" target="_blank"><BsDownload/>Curriculo</a>
            </div>
            <div className="banner-titulo">
                <p>Me chamo Augusto e sou</p>
                <div className="titulo">
                    <p>REACT.JS</p>
                    <p>DEVELOPER</p>
                </div>
                <p>1 ano de experiência</p>
            </div>
        </div>
    )
}