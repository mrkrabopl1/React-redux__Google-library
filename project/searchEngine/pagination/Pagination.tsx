import * as React from 'react';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import s from "./pag.module.css"
import { useSelector } from 'react-redux'
const Paginator =(props)=>{
const pageNumber=Math.ceil(props.dataLength/props.limitDataOnPage)
const pagePlate=()=>{
        let arr:any=[]
    let start:any
    let end:any
    if (pageNumber<=10){
        for(let  i=1 ;i<=pageNumber;i++){
            arr.push(  <Pagination.Item onClick={()=>{props.changeCurLink(i)}} active={props.activeLink===i} >{i}  </Pagination.Item>)
        }
        return arr
    }
    else {

        if(props.activeLink-1>4&&pageNumber-props.activeLink>4){


           for(let  i=props.activeLink-3 ;i<=props.activeLink+3;i++){
               arr.push(  <Pagination.Item onClick={()=>{props.changeCurLink(i)}}  active={props.activeLink===i} >{i}  </Pagination.Item>)
           }

           return [<Pagination.Item onClick={()=>{props.changeCurLink(1)}} active={props.activeLink===1}>{1}</Pagination.Item>,
               <Pagination.Ellipsis onClick={()=>{props.changeCurLink(props.activeLink-3)}} />,
                arr,
               <Pagination.Ellipsis onClick={()=>{props.changeCurLink(props.activeLink+3)}} />,
               <Pagination.Item onClick={()=>{props.changeCurLink(pageNumber)}} active={props.activeLink===pageNumber}>{pageNumber}</Pagination.Item>]

        }
        else if(props.activeLink-1>4){

            for(let  i=props.activeLink-3 ;i<=pageNumber;i++){
                arr.push(  <Pagination.Item onClick={()=>{props.changeCurLink(i)}} unselectable={"off"} active={props.activeLink===i} >{i}  </Pagination.Item>)
            }
            return [<Pagination.Item onClick={()=>{props.changeCurLink(1)}} active={props.activeLink===1}>{1}</Pagination.Item>,
                <Pagination.Ellipsis onClick={()=>{props.changeCurLink(props.activeLink-3)}} />,
                arr
               ]
        }
        else{

            for(let  i=1;i<=props.activeLink+3;i++){
                arr.push(  <Pagination.Item onClick={()=>{props.changeCurLink(i)}} unselectable={"off"}  active={props.activeLink===i} >{i}  </Pagination.Item>)
            }

        }

        return [arr, <Pagination.Ellipsis onClick={()=>{props.changeCurLink(props.activeLink+3)}} />,
            <Pagination.Item onClick={()=>{props.changeCurLink(pageNumber)}} active={props.activeLink===pageNumber}>{pageNumber}</Pagination.Item>
    ]
    }

}


        return(
        <Pagination>

            <Pagination.First className={s.pag} onClick={()=>{props.changeCurLink(1)}}/>
            <Pagination.Prev onClick={()=>{props.changeCurLink(props.activeLink>1?props.activeLink-1:1)}} />
            {/*<Pagination.Item>{1}</Pagination.Item>*/}
            {/*<Pagination.Ellipsis />*/}

            {/*<Pagination.Item>{10}</Pagination.Item>*/}
            {/*<Pagination.Item>{11}</Pagination.Item>*/}
            {/*<Pagination.Item active>{12}</Pagination.Item>*/}
            {/*<Pagination.Item>{13}</Pagination.Item>*/}
            {/*<Pagination.Item disabled>{14}</Pagination.Item>*/}

            {/*<Pagination.Ellipsis />*/}
            {/*<Pagination.Item>{20}</Pagination.Item>*/}
                {pagePlate()}
            <Pagination.Next onClick={()=>{props.changeCurLink(props.activeLink<pageNumber?props.activeLink+1:pageNumber)}}/>
            <Pagination.Last onClick={()=>{props.changeCurLink(pageNumber)}} />
        </Pagination>
    )
}

export default Paginator