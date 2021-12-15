import * as React from 'react';

import {useRef} from "react";
import { useState } from 'react';
import InfoPlate from '../infoPlate/InfoPlate';
import s from "./searchEngine.module.css"
import { SearchEngineProps } from '../type/searchEngineType';
import Paginator from "./pagination/Pagination";

import {NavLink,NavLinkProps} from "react-router-dom";
import {TypedUseSelectorHook,useSelector} from "react-redux";
import { AppStateType } from '../redux/redux-store';
import preloaderImage from "../img/preloader.svg"

const SearchEngine:React.FC<SearchEngineProps> =(props)=>{
     const text=useRef<HTMLInputElement>(null)


    const pageArr=new Array(Math.ceil(props.dataLength/props.limitDataOnPage)).fill(null)


    const pagePlate=()=>{return pageArr.map((_,i)=> <a  onClick={()=>{props.changeCurLink(i+1)}} className={`${s.b} ${props.activeLink===(i+1) && s.a}` }   href="#">{i+1}</a>)}
    const [currentText, setText] = useState<string>("newText");

  const renderInfoPlate=()=>{return props.data.map(m=><InfoPlate title={m.volumeInfo.title}
                                      thumbnail={m.volumeInfo.imageLinks?
                                          m.volumeInfo.imageLinks.thumbnail:null} key={m.id} volumeInfo={m.volumeInfo} id={m.id}/>)}
  const changeTextRef=(el)=>{
      if (el.current!==null){
          props.changeText(el.current.value)
      }
      props.changeDataLength(props.index)
  }

    const p=useSelector((store:AppStateType) => store.searchPage.text)
    console.log(p,'dasd')
    return(

        <div>
         <div className={s.menuWrapper}>
            <h1 className={s.header} >Google library</h1>

            {/*<input type="text" value={currentText} onChange={(e)=>{setText(e.target.value)}}/>*/}
           <div className={s.findHolder} >

               <input className={s.inputFinder}  type="textarea" ref={text}  />
               <button className={s.buttonFind}  onClick={()=>changeTextRef(text)}>find</button>
           </div>
             <div className={s.finderController}>
                 <div>
                     <p className={s.controlLabel}>Number page in request</p>
                     <input  className={s.lengthPage} type="number" min={1} max={40} onChange={(e)=>{return (props.changeIndex(Number(e.target.value)),props.changeDataLength(1))}}/>

                 </div>
                      <div>
                     <p className={s.controlLabel}>Quantity of book on one page</p>
                     <input type="number" min={1} onChange={(e)=>{return(props.changeLimitData(e.target.value) )}} />

                 </div>
                    <div>
                        <p className={s.controlLabel}>Categories</p>
                        <select defaultValue="" onChange={(e)=>{props.changeCategory(e.target.value)}} name="select" id="">
                            <option value="" >all</option>
                            <option value="art" >art</option>
                            <option value="biography" >biography</option>
                            <option value="computers" >computers</option>
                            <option value="history" >history</option>
                            <option value="medical" >medical</option>
                            <option value="poetry" >poetry</option>

                        </select>
                    </div>

             </div>


         </div>
            <div className={s.booksCardWrap}> {props.loading?
                <div className={s.preloaderHolder}><img  src={preloaderImage} alt="2"/></div>
                :renderInfoPlate()}</div>
            <button onClick={(e)=>{props.changeStartIndex1(props.dataLength)}}>Get more</button>
            <div className={s.a_cont}> {pagePlate()}</div>


            <div className={s.paginateHolder}> <Paginator activeLink={props.activeLink} dataLength={props.dataLength} limitDataOnPage={props.limitDataOnPage} changeCurLink={props.changeCurLink}/>
            </div>
        </div>

    )

}

export default SearchEngine