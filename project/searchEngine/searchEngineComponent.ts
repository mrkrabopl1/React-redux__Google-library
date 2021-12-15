import {connect} from "react-redux";
import {changeDataLength,changeLimitData, changeLink2,changeActiveLink,changeLinkThunk,changeCurLink,changeText, getUsersThunk,changeCategory,changeIndex,updateDataThunk,changeStartIndex1,switchLoading} from "../redux/search-reducer";

import SearchEngineAPI from "./searchAPI";
import {AppStateType} from "../redux/redux-store";
// useEffect(()=>{
//     {getUsersThunk(text)}}

const mapStateToProps=(state:AppStateType)=>{
    return {
        updateIndex:state.searchPage.updateIndex,
        text:state.searchPage.text,
        data:state.searchPage.data,
        category:state.searchPage.category,
        index:state.searchPage.maxIndex,
        startIndex:state.searchPage.startIndex,
        loading:state.searchPage.loading,
        dataLength:state.searchPage.dataLength,
        currPageLink:state.searchPage.currPageLink,
        limitDataOnPage:state.searchPage.limitDataOnPage,
        activeLink:state.searchPage.activeLink,
        demfer:state.searchPage.demfer


    }
}

export const SearchEngineComponent=connect(mapStateToProps,{changeText,
    changeDataLength,
    getUsersThunk,
    changeCategory,
    changeIndex,
    changeStartIndex1,
    updateDataThunk,
    switchLoading,
    changeCurLink,
    changeLinkThunk,
    changeActiveLink,
    changeLink2,changeLimitData})
(SearchEngineAPI)