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

  useEffect(() => {
    
  }, [containerX]);

  return (
    <div className="screen">
    {/* <div className={map ? 'map' : ''}
      style={{
        display: "none",
      }}
    >
      <img src={map} alt={"map"} style={{ width: "100%" , height: "715px", position: "absolute", zIndex: "999"}} />
    </div> */}
    <div className="forest" 
      style={{
        position: "absolute",
        transform:`translate(${containerX}px)`,
      }}
    >
    {/* <img src={forest} alt={"forest"} style={{ width: "100%" , height: "715px", position: "relative"}} /> */}
    
    <p style={{position: "absolute", left: "550px", top: "300px", paddingBottom: "5px", height: "auto", padding: "5px", backgroundColor: "black",  opacity: "0.4", zIndex: "999", borderRadius: "10px"}}>Use arrows or a/d for a walk</p>
   
    <img src={pen} alt={"pen'"} style={{
      position: "absolute",
      // width: "280px",
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
    
      {/* <MovingObject/> */}
      {/* <Object/> */}
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
      {/* <div className="block" 
        style={{
          position: "absolute",
          left: "1030px",
          top: "500px",
          width: "190px",
          height: "200px",
          // backgroundColor: "red"
        }}
      /> */}
      
      <p style={{position: "absolute", left: "1850px", top: "300px", paddingBottom: "5px", height: "auto", padding: "5px", backgroundColor: "black",  opacity: "0.4", zIndex: "999", borderRadius: "10px"}}>Press e to interact </p>
      
      
      {/* <div className="block" 
        style={{
          position: "absolute",
          left: "1955px",
          top: "125px",
          width: "180px",
          height: "500px",
          // backgroundColor: "red"
        }}
      /> */}
      
      <img src={brevno2} alt={"brevno"} className={isAnimating ? 'animate' : ''} style={{
        position: "absolute",
        width: "340px",
        left: "1865px",
        top: "40px",
      }}
      />
      <img src={pen2} alt={"pen'"} style={{
        position: "absolute",
        // width: "280px",
        left: "1906px",
        top: "517px",
      }}
      />
       {/* <img src={mainImg} alt={"mainImg"} style={{ width: "100%" }} /> */}
      </div>
     </div> 
  );
};