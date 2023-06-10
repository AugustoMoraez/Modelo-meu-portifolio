import "./style.css";
import { Projeto } from "../projeto-item";
import { data } from "../../data/projetos";

export const ProjetosArea = () => {
    return(
        <div className="projetos" id="projetos">
            <h2>PROJETOS</h2>

            <div className="box">

                {data.map((item,index)=>(
                    <Projeto url={item.url} img={item.img} sobre={item.sobre} tec={item.tec} titulo={item.titulo} key={index}/>
                ))}

            </div>
            
        </div>
    )
}