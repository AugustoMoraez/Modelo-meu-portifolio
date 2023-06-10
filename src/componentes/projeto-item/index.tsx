import "./style.css";

type prop = {
    titulo:string,
    sobre:string,
    tec:string,
    img:string,
    url:string
}

export const Projeto = ( {titulo,sobre,img,url}:prop ) => {
    return(
        <div className="Item">
            <div className="img">
                <img src={img} alt="projeto imagem" />
            </div>
            <h3>{titulo}</h3>
            <a href={url} target="_blank">Visitar</a>
            <p>
                &nbsp;&nbsp;&nbsp;{sobre}    
            </p>
            
        </div>
    )
}