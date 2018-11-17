import React from "react";

const ModalSection3=({caseFlagEl})=>
{
    return (
        <div className={caseFlagEl.case}>
            <img className="log-class" src={caseFlagEl.svg} alt="/"/>
            <h4 className="head1">{caseFlagEl.title}</h4>
            <p className="par1">{caseFlagEl.paragraphe}</p>
        </div>     
    )

}
export default ModalSection3;
