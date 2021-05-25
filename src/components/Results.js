import React from "react";
//import { Context } from "../State";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../Results.css";


const Results = (props) => {
  console.log(props)
  const { list } = props.location.state;
  return (  
    <div className="images">
      <div className="back-arrow">
      <Link to="/">
      <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      </div>
         <ul>
           {list.map((img,i) => (
             <li key={i}><img src={img.urls.regular} alt="item" /></li>
           ))}
         </ul>
         </div>
        )       
      }
 
    

export default Results;
