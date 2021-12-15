import * as React from 'react';
import s from "./infoBlock.module.css"

interface InfoBlockType{

    img?:string
    categories:string[]
    description:string
    authors:string[]
    display:boolean
    toggle:()=>void


}

const InfoBlock:React.FC<InfoBlockType> =(props)=>{
    const {img,categories,description,authors,toggle}=props
    return(
        <div className={s.background}>



            <button className={s.btn} onClick={()=>{toggle()}}>X</button>
            <div className={s.infoBlock}>
                <div className={s.leftColumn}>
                    <img className={s.img} src={img} alt=""/>
                    <div>
                        {categories?categories.map(m=><span>{m}</span>):""}
                    </div>
                    <div>
                        Authors:{authors?authors.map(m=><span>{m}</span>):"unknown"}
                    </div>
                </div>

                <div className={s.description}>
                    {description}
                </div>

            </div>


        </div>
    )

}

export default InfoBlock