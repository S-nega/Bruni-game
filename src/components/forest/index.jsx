import { useEffect } from "react";
import {MovingObject, Object} from "../movingObject"; 

import bruni from "../../assets/bruni.png";
import grass from "../../assets/grass1.png";
import pen from "../../assets/pen.png";
import pen2 from "../../assets/pen2.png";
import brevno1 from "../../assets/brevno1.png";
import brevno2 from "../../assets/brevno22.png";


export const Forest = () => {

  const [objectX, objectZ, containerX, isAnimating] = MovingObject();

  return (
    <div className="screen">
    <div className="forest" 
      style={{
        position: "absolute",
        transform:`translate(${containerX}px)`,
      }}
    >
    
    <p style={{position: "absolute", left: "550px", top: "300px", paddingBottom: "5px", height: "auto", padding: "5px", backgroundColor: "black",  opacity: "0.4", zIndex: "999", borderRadius: "10px"}}>Use arrows or a/d for a walk</p>
   
    <img src={pen} alt={"pen'"} style={{
      position: "absolute",
      left: "1900px",
      top: "475px",
    }}
    />

    <div className="move"
      style={{
        position: "absolute",
        left: objectX,
        top: objectZ,
        transition: 'left 1s, top 1s',
      }}>
        <img src={bruni} alt={"bruni"} style={{ width: "110px" , height: "110pxpx"}} />
    </div>
    
      <img src={grass} alt={"grass"} style={{ 
        position: "absolute",
        left: "1px",
        top: "502px",
        width: "2400px",
        zIndex: "998",
        }} 
      />

      <p style={{position: "absolute", left: "1040px", top: "300px", paddingBottom: "5px", height: "auto", padding: "5px", backgroundColor: "black",  opacity: "0.4", zIndex: "999", borderRadius: "10px"}}>Press spase to climb</p>
      <img src={brevno1} alt={"brevno"} style={{
        position: "absolute",
        width: "280px",
        left: "980px",
        top: "475px"
      }}
      />
      <p style={{position: "absolute", left: "1850px", top: "300px", paddingBottom: "5px", height: "auto", padding: "5px", backgroundColor: "black",  opacity: "0.4", zIndex: "999", borderRadius: "10px"}}>Press e to interact </p>
      <img src={brevno2} alt={"brevno"} className={isAnimating ? 'animate' : ''} style={{
        position: "absolute",
        width: "340px",
        left: "1865px",
        top: "40px",
      }}
      />
      <img src={pen2} alt={"pen'"} style={{
        position: "absolute",
        left: "1906px",
        top: "517px",
      }}
      />
      </div>
     </div> 
  );
};