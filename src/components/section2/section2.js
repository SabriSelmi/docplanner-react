import React from "react";
import Modal from './Modal';
import "./section2.css";


const CardList=({colorText})=>
{
return(
<div className="row">
{
    colorText.map((el,i)=>
        <Modal key={i} tawla={el}/>)
}
</div>
)
}
export default CardList;