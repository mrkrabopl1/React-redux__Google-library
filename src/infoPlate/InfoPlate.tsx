import * as React from 'react';
import s from "./infoPlate.module.css"

import {useState} from "react";
import InfoBlock from './infoBlock';
import Image from "../img/plug.jpg"

export interface InfoPlateType{
    title:string
    thumbnail?:string
    volumeInfo:any
    id:string






}

const InfoPlate:React.FC<InfoPlateType>=(state)=>{
    const [display,setDisplay]=useState(false)
const toggle=()=>{
    setDisplay(!display)
}


    return(
        <div  className={s.container}>
           <img className={s.img} src={state.thumbnail?state.thumbnail:Image} alt=""/>

            <div className={s.title} >
                {state.title}
            </div>
            <button onClick={toggle}  >More info</button>
            {display? <InfoBlock toggle={toggle} display={display} authors={state.volumeInfo.authors} description={state.volumeInfo.description} categories={state.volumeInfo.categories} img={state.thumbnail}/>:""}

        </div>
    )
}

export default InfoPlate