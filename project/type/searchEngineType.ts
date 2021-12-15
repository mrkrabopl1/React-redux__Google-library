import {changeLimitData} from "../redux/search-reducer";

export  interface SearchEngineProps{
    text:string
    changeText:(string)=>void
    data:any[]
    loading:boolean
    category:string
    changeCategory:(string)=>void
    changeIndex:(index:number)=>void
    changeStartIndex1:(startIndex:number)=>void
    dataLength:number
    currPageLink:number
    limitDataOnPage:number
    changeCurLink:(link:number)=>void
    className: string|boolean
    activeLink:number
    changeActiveLink:()=>void
    changeLimitData:(number)=>void
    changeDataLength:(number)=>void
    index:number
    updateIndex:number


    switchLoading:(loading:boolean)=>void


}