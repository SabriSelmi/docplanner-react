import React from "react"
import ModalSection3 from './modalSection3'
import './flagList.css';



const FlagList=({caseFlag})=>
{
return(
<div className="row">
{
    caseFlag.map((el,i)=>
        <ModalSection3 key={i} caseFlagEl={el}/>)
}
</div>
)
}
export default FlagList;