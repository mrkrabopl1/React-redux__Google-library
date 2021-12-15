import SearchEngine from "./searcEngine";
import * as React from 'react';

import {useEffect, useRef} from "react";
import { switchLoading} from "../redux/search-reducer";
import {useDispatch, useSelector} from "react-redux";
import {SearchEngineProps} from "../type/searchEngineType";



interface SearchEngineProps1 extends SearchEngineProps{
    getUsersThunk:(text:string,category:string,index:number)=>void
    updateDataThunk:(text:string,category:string,startIndex:number,updateIndex:number)=>void
    changeLinkThunk:(text:string,category:string,startIndexOnPage:number,dataLength:number)=>void
    index:number
    startIndex:number
    changeLink2:()=>void
    demfer:boolean


}



const SearchEngineAPI:React.FC<SearchEngineProps1> =(props)=>{
const isMounted=useRef(false)
 const isMounted1=useRef(false)
    const isMounted2=useRef(false)
    let startIndexOnPage=(props.currPageLink-1)*props.limitDataOnPage

    let dispatch=useDispatch()
    useEffect(() => {
        if (isMounted.current){
            dispatch(switchLoading(true))


            props.getUsersThunk(props.text,props.category,props.index)

            console.log(props.loading,"vdfg")
        }
        else {
            isMounted.current=true
        }


    }, [props.text,props.category,props.index]);
    useEffect(() => {
        if (isMounted1.current){
            dispatch(switchLoading(true))
         if(props.activeLink===Math.ceil(props.dataLength/props.limitDataOnPage))  {
             props.updateDataThunk(props.text,props.category,props.startIndex,props.updateIndex)
         }
        else{
            let newStartIndex=props.startIndex-props.dataLength%props.limitDataOnPage
             console.log(newStartIndex,"dsadawrfds")
            let newUpdateIndex=props.dataLength%props.limitDataOnPage+props.updateIndex
             props.updateDataThunk(props.text,props.category,newStartIndex,newUpdateIndex)
         }


            console.log(props.loading,"vdfg")
        }
        else {
            isMounted1.current=true
        }


    }, [props.startIndex]);
    useEffect(() => {
        if (props.currPageLink-props.activeLink){
            if (isMounted2.current){
                if(props.currPageLink!==Math.ceil(props.dataLength/props.limitDataOnPage)) {
                    console.log(props.currPageLink,"1")
                    props.changeLinkThunk(props.text, props.category, startIndexOnPage, props.limitDataOnPage)
                    props.changeLink2()
                }
                else {

                    let pageOnScreen=props.dataLength%props.limitDataOnPage?props.dataLength%props.limitDataOnPage:props.limitDataOnPage
                    console.log(props.currPageLink,"2")
                    props.changeLinkThunk(props.text, props.category, startIndexOnPage,pageOnScreen)
                    props.changeLink2()
                }
            }
            else {
                isMounted2.current=true
            }

        }

    }, [props.demfer]);
    return(

    <div>


        <SearchEngine {...props}/>
    </div>


)
}
export default SearchEngineAPI
