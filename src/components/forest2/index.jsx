import { useEffect } from "react";
import {MovingObject, Object} from "../movingObject"; 

import bruni from "../../assets/bruni.png";
import grass22 from "../../assets/grass22.png";
import rock from "../../assets/rock.png";


export const Forest2 = () => {

  const [objectX, objectZ, containerX, isAnimating] = MovingObject();

  useEffect(() => {
    
  }, [containerX]);

  return (
    <div className="screen">
    <div className="forest2" 
      style={{
        position: "absolute",
        transform:`translate(${containerX}px)`,
      }}
    >
      <img src={rock} alt={"rock"} style={{
          position: "absolute",
          width: "280px",
          left: "980px",
          top: "475px"
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
    
      <img src={grass22} alt={"grass"} style={{ 
        position: "absolute",
        left: "-25",
        top: "352px",
        width: "2400px",
        zIndex: "999",
        }} 
      />

      {/* <img src={brevno2} alt={"brevno"} className={isAnimating ? 'animate' : ''} style={{
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
      /> */}
      </div>
     </div> 
  );
};