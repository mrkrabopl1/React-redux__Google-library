export  enum ActionTypes{
    CHANGE_DATA_LENGTH="CHANGE_DATA_LENGTH",
    CREATE_DATA="CREATE_DATA",
    CHANGE_TEXT="CHANGE_TEXT",
    CHANGE_CATEGORY="CHANGE_CATEGORY",
    CHANGE_INDEX="CHANGE_INDEX",
    CHANGE_START_INDEX="CHANGE_START_INDEX",
    ADD_DATA="ADD_DATA",
    SWITCH_LOADING="SWITCH_LOADING",
    CHANGE_LINK="CHANGE_LINK",
   CHANGE_ACTIVE_LINK= "CHANGE_ACTIVE_LINK",
    CHANGE_LINK2="CHANGE_LINK2",
    CHANGE_LIMIT_DATA="CHANGE_LIMIT_DATA",
    CHANGE_PAGE_INDEX="CHANGE_PAGE_INDEX",
    CHANGE_ACTIVE_LINK3="CHANGE_ACTIVE_LINK3"
}
interface changeDataLength{
    type :typeof  ActionTypes.  CHANGE_DATA_LENGTH
    dataLength:number
}
interface changeLinkType3{
    type :typeof  ActionTypes. CHANGE_ACTIVE_LINK3
}
interface changePageIndex{
    type :typeof  ActionTypes.CHANGE_PAGE_INDEX
}
interface  changeLinkType2{
    type :typeof  ActionTypes.CHANGE_LINK2
}
interface  changeLimitData{
    type :typeof  ActionTypes.CHANGE_LIMIT_DATA
    limitData:number
}
interface changeLinkType{
    type :typeof  ActionTypes.CHANGE_LINK
    link:number
}

interface changeActiveLink{
    type:typeof  ActionTypes.CHANGE_ACTIVE_LINK

}

interface changeTextType{
    type :typeof  ActionTypes.CHANGE_TEXT
    text:string
}
interface switchLoading{
    type :typeof  ActionTypes.SWITCH_LOADING
    loading:boolean
}
interface createDataType{
    type :typeof  ActionTypes.CREATE_DATA
    data:any[]

}
interface changeCategoryType{
    type :typeof ActionTypes.CHANGE_CATEGORY
    category:string
}
interface changeIndexType{
    type : typeof ActionTypes.CHANGE_INDEX
    index:number
}
interface addDataType{
    type : typeof ActionTypes.ADD_DATA
    data:any[]
}

interface changeStartIndex{
    type : typeof ActionTypes.CHANGE_START_INDEX
    startIndex:number
}
export type  Actions= changeDataLength|changeLinkType3|changePageIndex|changeLimitData|changeLinkType2|changeActiveLink|changeLinkType|changeTextType|changeCategoryType|createDataType|changeIndexType|addDataType|changeStartIndex|switchLoading