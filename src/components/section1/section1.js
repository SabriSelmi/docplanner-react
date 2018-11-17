import React from "react"
import "./section1.css"


class Section1 extends React.Component {
render() {

    return (

      <div>
          <section className="up container-fluid">            
                <img  src={"https://www.docplanner.com/img/sygnet.png"} alt=""/>
            <h1>    
                <p >Making the healthcare experience more human</p>
            </h1>
                <div className="row">
                    <p className="col-sm-5 text1">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
                    <p className="col-sm-5 text2">We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
                </div>
        </section>
        
      </div>
     
    );
 
}
};

export default Section1;