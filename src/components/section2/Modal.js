import React from "react"

const Modal=({tawla})=>
{
    return (
        <div className="colored-text1 slideanim col-lg-5" style={tawla.bg}>
            <p className="label1 sliderightanim">{tawla.title}</p>
            <h3 className="parag sliderightanim">{tawla.paragraphe}</h3>
            <div className="img1"> 
            <img className="img1 image1 sliderightanim" src={tawla.img} alt="/"/>
            </div>
        </div>         
    )

}
export default Modal;