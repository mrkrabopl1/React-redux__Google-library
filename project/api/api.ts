import axios from "axios";
const APIkey="AIzaSyDTRetRzKxyBM8myOWvti_W6J34B8HlN_A"
const instance=axios.create({
    baseURL:'https://www.googleapis.com/books/v1/',


})

export  const getUsers=(text:string,category:string,index:number)=>{

    return instance.get(`volumes?q=${text}+subject:${category}&maxResults=${index}&key=${APIkey}`)

}
export const updateUsers=(text:string,category:string,startIndex:number,index:number)=>{
    console.log("if")
    return instance.get(`volumes?q=${text}+subject:${category}&startIndex=${startIndex}&maxResults=${index}&key=${APIkey}`)

}

export const changePage=(text:string,category:string,currentIndex:number,dataLength:number)=>{

    return instance.get(`volumes?q=${text}+subject:${category}&startIndex=${currentIndex}&maxResults=${dataLength}&key=${APIkey}`)

}