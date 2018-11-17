import React from "react";
import "./section5.css";
import Carte from "./carte"

const Section5=({carte})=>{
    return(
<div className="row" style={{marginLeft:"5%", marginRight:"5%"}}>
{
carte.map((el,i)=>
        <Carte key={i} carteElement={el}/>)
}
</div>
    )
}
export default Section5;