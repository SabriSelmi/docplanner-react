import React from "react";
import FlagList from "./flagList";
import './section3.css'

const flag=[
    {
      svg:'https://www.docplanner.com/img/flag.png',
      title:'Leader in 8 countries',
      paragraphe:'Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile',
      case:"case1 col-sm-6 slideanim",
  
    },
    {
      svg:'https://www.docplanner.com/img/visits.png',
      title:'600 000 appointments',
      paragraphe:'booked last month',
      case:"case2 col-sm-6 slideanim",
  
    },
    {
      svg:'https://www.docplanner.com/img/patients.png',
      title:'20 million unique patients',
      paragraphe:'visit us every month',
      case:"case3 col-sm-6 slideanim",
  
    },
    {
      svg:'https://www.docplanner.com/img/doctors.png',
      title:'35 000 active doctors',
      paragraphe:'trust in our solutions',
      case:"case4 col-sm-6 slideanim",
  
    }
  ]

  class Section3 extends React.Component {
    
      render() {
           return (
            <section className="the-worlds container-fluid">
           
            <div className="row">
                <div className="part1 col-sm-6">
                    <h2 className="text-worlds">The world's <br/> biggest healthcare platform</h2>
                    <p className="under-text">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                </div>
                <div className="part2 col-sm-6">                    
                <FlagList caseFlag={flag}/>                       
                </div> 
                   </div>   
                       
        </section>
           
        );
      }
    };
    
    export default Section3;
    