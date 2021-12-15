
import {getUsers, updateUsers,changePage} from "../api/api";
import {Dispatch} from "redux";
import { ActionTypes, Actions } from "../type/actionType";



export interface initialStateType{
    text:string
    data:any[]
    category:string
    maxIndex:number
    startIndex:number
    loading:boolean
    dataLength:number
    limitDataOnPage:number
    currPageLink:number
    activeLink:number
    demfer:boolean
    startRandomPageIndex:number
    updateIndex:number
}

let initialState:initialStateType ={
    text:"Input what you want to find",
    data:[],
    category:"",
    maxIndex:5,
    startIndex:1,
    loading:false,
    dataLength:0,
    limitDataOnPage:10,
    currPageLink:0,
    activeLink:1,
    demfer:false,
    startRandomPageIndex:0,
    updateIndex:5,


}


const searchReducer=(state=initialState,action:Actions):initialStateType=>{
    switch(action.type){
        case ActionTypes.CHANGE_DATA_LENGTH:

            return {
                ...state, dataLength: action.dataLength
            }

        case ActionTypes.CHANGE_PAGE_INDEX:
            const pageIndex=(state.activeLink-1)*state.limitDataOnPage+1
            return {
                ...state,startRandomPageIndex: pageIndex
            }
        case ActionTypes.CHANGE_LIMIT_DATA:

            return {
                ...state,limitDataOnPage:action.limitData
            }


        case ActionTypes.CHANGE_TEXT:
            console.log('adsdsa')
            return {
                ...state,text:action.text
            }
        case ActionTypes.CREATE_DATA:
            console.log(state.data)
            if(action.data.length>0){
                return{
                    ...state,data:[...action.data]
                }
            }
            else {return{
                ...state,data:action.data
            }}
        case ActionTypes.ADD_DATA:

            if(action.data.length>0){
                let preod=[...state.data,...action.data]
                let length=state.dataLength%state.limitDataOnPage?state.dataLength%state.limitDataOnPage+action.data.length:state.limitDataOnPage+action.data.length
               if(state.activeLink===Math.ceil(state.dataLength/state.limitDataOnPage)) {
                   if (length >= state.limitDataOnPage) {
                       console.log(state.data, "teas")
                       let remainsPage = preod.length - (Math.floor(preod.length / state.limitDataOnPage)) * state.limitDataOnPage + state.limitDataOnPage * Math.pow(0, (preod.length % state.limitDataOnPage))
                       let currLength = state.dataLength + action.data.length

                       let remainsPage3 = currLength - (Math.floor(currLength / state.limitDataOnPage)) * currLength + state.limitDataOnPage * Math.pow(0, (currLength % state.limitDataOnPage))
                       return {

                           ...state,
                           data: [...state.data, ...action.data].slice(preod.length - remainsPage, preod.length),

                           dataLength: (state.dataLength + action.data.length),

                       }
                   } else {

                       return {
                           ...state,
                           data: [...state.data, ...action.data],
                           dataLength: (state.dataLength + action.data.length)
                       }
                   }
               }
               else{
                   if(action.data.length >= state.limitDataOnPage){
                       return {
                           ...state,
                           data: [ ...action.data].slice(action.data.length%state.limitDataOnPage?
                                                       action.data.length-action.data.length%state.limitDataOnPage:
                                                       0,action.data.length),
                           dataLength: (state.dataLength + state.updateIndex)
                       }
                   }
                   else{
                       return {

                           ...state,
                           data: [...action.data],

                           dataLength: (state.dataLength + state.updateIndex),
                       }
                   }

               }

            }
            else {return{
                ...state,data:action.data
            }}
        case ActionTypes.CHANGE_LINK:
            console.log(state.currPageLink)
            return {...state,currPageLink:action.link,demfer:!state.demfer}
        case    ActionTypes.CHANGE_LINK2:
            return {...state,activeLink:state.currPageLink}

        case ActionTypes.CHANGE_ACTIVE_LINK:

            return {...state,activeLink:Math.ceil(state.dataLength/ state.limitDataOnPage)}
        case ActionTypes.CHANGE_ACTIVE_LINK3:

            return {...state,activeLink:Math.ceil(state.startRandomPageIndex/ state.maxIndex)}
        case ActionTypes.CHANGE_INDEX:
            console.log(action.index)
            return {...state,maxIndex:action.index}
        case ActionTypes.CHANGE_START_INDEX:
            return {...state,startIndex:action.startIndex}
        case ActionTypes.SWITCH_LOADING:
            console.log("bol")
            return {...state,loading:action.loading}
        case ActionTypes.CHANGE_CATEGORY:

            return {...state,category:action.category}
        default:
            return {...state}
    }
}

export const  getUsersThunk=(text,category,index)=>{

    console.log("asdfsdf")
    return (dispatch: Dispatch<Actions>)=>{getUsers(text,category,index)
        .then(resp => {
            dispatch(switchLoading(false))
            dispatch(createData(resp.data.items))


        })
        .catch(err => {
            // Handle Error Here
            dispatch(switchLoading(false))
            console.error(err);
        })}
}
export const  updateDataThunk=(text,category,startIndex,index)=>{
    return (dispatch)=>{updateUsers(text,category,startIndex,index)
        .then(resp => {
            dispatch(switchLoading(false))
            dispatch(addData(resp.data.items))
            dispatch(changeActiveLink())

        })
        .catch(err => {
            // Handle Error Here
            console.error(err);
        })}
}
export const  changeLinkThunk=(text,category,currIndex,limitDataOnPage)=>{

    return (dispatch)=>{changePage(text,category,currIndex,limitDataOnPage)
        .then(resp => {

            dispatch(createData(resp.data.items))

        })
        .catch(err => {
            // Handle Error Here
            console.error(err);
        })}
}
export const changeDataLength=(dataLength):Actions=>({type:ActionTypes.CHANGE_DATA_LENGTH,dataLength})
export const changeText=(text):Actions=>({type:ActionTypes.CHANGE_TEXT,text})
export const createData=(data):Actions=>({type:ActionTypes.CREATE_DATA,data})
export const changeCategory=(category):Actions=>({type:ActionTypes.CHANGE_CATEGORY,category})
export const changeIndex=(index)=>({type:ActionTypes.CHANGE_INDEX,index})
export const switchLoading=(loading):Actions=>({type:ActionTypes.SWITCH_LOADING,loading})
export const addData=(data)=>({type:ActionTypes.ADD_DATA,data})
export const changeStartIndex1=(startIndex)=>({type:ActionTypes.CHANGE_START_INDEX,startIndex})
export const changeCurLink=(link)=>({type:ActionTypes.CHANGE_LINK,link})
export const changeActiveLink=()=>({type:ActionTypes.CHANGE_ACTIVE_LINK})
export const changeLink2=()=>({type:ActionTypes.CHANGE_LINK2})
export const changeLimitData=(limitData)=>({type:ActionTypes.CHANGE_LIMIT_DATA,limitData})
export default searchReducer
