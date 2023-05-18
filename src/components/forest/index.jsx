import { useState } from 'react';

import { GameLogic } from "../gameLogic";
import { File1 } from "../file1";
import { useMechanic } from "../useMechanic";
import {Person} from "../person";
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";
import {useCanvas} from "../useCanvas";
import {Map} from "../map";
import {MovingObject, Object} from "../movingObject"; 

import bruni from "../../assets/bruni.png";
import grass from "../../assets/grass1.png";
import pen from "../../assets/pen.png";
import pen2 from "../../assets/pen2.png";
import brevno1 from "../../assets/brevno1.png";
import brevno2 from "../../assets/brevno2.png";


export const Forest = () => {

  const [objectX, objectZ, containerX] = MovingObject();

  useEffect(() => {
    
  }, [containerX]);

  return (
    <div className="screen">
    <div className="forest" 
      style={{
        position: "absolute",
        transform:`translate(${containerX}px)`,
      }}
    >
    {/* <img src={forest} alt={"forest"} style={{ width: "100%" , height: "715px", position: "relative"}} /> */}
      
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
        zIndex: "999",
        }} 
      />
      <img src={brevno1} alt={"brevno"} style={{
        position: "absolute",
        width: "280px",
        left: "980px",
        top: "475px"
      }}
      />
      <div className="block" 
        style={{
          position: "absolute",
          left: "1030px",
          top: "500px",
          width: "190px",
          height: "200px",
          // backgroundColor: "red"
        }}
      />

      {/* <img src={pen} alt={"pen'"} style={{
        position: "absolute",
        // width: "280px",
        left: "1900px",
        top: "475px",
      }}
      />
      <img src={brevno2} alt={"brevno"} style={{
        position: "absolute",
        width: "240px",
        left: "1940px",
        top: "125px",
      }}
      />
      <img src={pen2} alt={"pen'"} style={{
        position: "absolute",
        // width: "280px",
        left: "1906px",
        top: "517px",
      }}
      /> */}
       {/* <img src={mainImg} alt={"mainImg"} style={{ width: "100%" }} /> */}
      </div>
     </div> 
  );
};