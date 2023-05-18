import { useEffect } from "react";
import {MovingObject, Object} from "../movingObject"; 

import bruni from "../../assets/bruni.png";
import grass3 from "../../assets/grass3.png";
import pen from "../../assets/pen.png";
import pen2 from "../../assets/pen2.png";
import brevno1 from "../../assets/brevno1.png";
import brevno2 from "../../assets/brevno22.png";


export const Cave = () => {

  const [objectX, objectZ, containerX, isAnimating] = MovingObject();

  useEffect(() => {
    
  }, [containerX]);

  return (
    <div className="screen">
    <div className="cave" 
      style={{
        position: "absolute",
        transform:`translate(${containerX}px)`,
      }}
    >
    {/* <img src={forest} alt={"forest"} style={{ width: "100%" , height: "715px", position: "relative"}} /> */}
    
   
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
      <img src={grass3} alt={"grass"} style={{ 
        position: "absolute",
        left: "1px",
        top: "460px",
        width: "2400px",
        zIndex: "999",
        }} 
      />

      {/* <img src={brevno1} alt={"brevno"} style={{
        position: "absolute",
        width: "280px",
        left: "980px",
        top: "475px"
      }}
      /> */}
      
      
      
      
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