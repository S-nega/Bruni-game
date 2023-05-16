import { useState } from 'react';

import { GameLogic } from "../gameLogic";
import { File1 } from "../file1";
import { useMechanic } from "../useMechanic";
import {Person} from "../person";
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";
import {useCanvas} from "../useCanvas";
import {Map} from "../map";
import {MovingObject} from "../movingObject"; 

import grass from "../../assets/grass1.png";
import pen from "../../assets/pen.png";
import pen2 from "../../assets/pen2.png";
import brevno1 from "../../assets/brevno1.png";
import brevno2 from "../../assets/brevno2.png";

// import mainImg from "../../assets/mainImg.png";

export const Forest = (containerPosition) => {
  // useMechanic();
  const [x, setX] = useState(0);

  // document.addEventListener('keydown', function(event){
  //   // File1.setProgress("/forest");
    
  // })

  const handleKeyDown = (event) => {
    if (event.keyCode === 37 || event.key === "a") { // move left
        // console.log(x);
        setX(x => x+40);
      // if(x >= 0){
        // console.log("stop");
        // console.log(x+40);
      // } else{
        // console.log(x+40);
      // }
    } else if (event.keyCode === 39 || event.key === "d") { // move right
      setX(x => x-40);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if(x > 0){
      setX(0);
    }
    if(x < -900){
      setX(-900);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [x]);

  return (
    <div className="screen">
    <div className="forest" 
      style={{
        position: "absolute",
        // marginLeft: x,
        transform:`translate(${x}px)`,
      }}
    >
      ${x}
      {/* <div className="container" */}
      {/* style={{ transform: `translate(${containerPosition}px` }} */}
      {/* > */}
    {/* <h1>Forest</h1> */}
    {/* {useCanvas()} */}

    {/* <useCanvas/> */}
    {/* useCanvas() */}
    {/* <img src={forest} alt={"forest"} style={{ width: "100%" , height: "715px", position: "relative"}} /> */}
    {/* <Person /> */}
      <MovingObject/>
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
        left: "1000px",
        top: "475px"
      }}
      />
      <div className="block" 
        style={{
          position: "absolute",
          left: "1050px",
          top: "490px",
          width: "190px",
          height: "200px",
        }}
        // script={{

        // }}

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

      {/* <div className="grass" style={{
        position: "absolute",
        left: 0,
        top: "10px",
        backgroundImage: "url(../../assets/grass.png)", 
        // backgroundColor: "#6B8E23",
        width: "2400px",
        height: "203px",
        // borderRadius: "5px",
        // borderTop: "20px",
        // borderColor: "#228B22",
      }} */}
      {/* ></div> */}
      {/* <div style={{
        position: "absolute",
        left: "0",
        top: "610px",
        backgroundColor: "#228B22",
        width: "1104px",
        height: "30px",
        borderRadius: "5px",
        // borderTop: "20px",
        // borderColor: "#228B22",
      }}
      ></div> */}
{/* 
      <div style={{
        position: "absolute",
        left: "1200px",
        top: "510px",
        backgroundColor: "#6B8E23",
        width: "100px",
        height: "80px",
        borderRadius: "5px",
        // borderTop: "20px",
        // borderColor: "#228B22",
      }}
      ></div>
      <div style={{
        position: "absolute",
        left: "1198px",
        top: "510px",
        backgroundColor: "#228B22",
        width: "104px",
        height: "30px",
        borderRadius: "5px",
        // borderTop: "20px",
        // borderColor: "#228B22",
      }}
      ></div> */}
       {/* <img src={mainImg} alt={"mainImg"} style={{ width: "100%" }} /> */}
      
      {/* <div width="230px" hiegth="200px">
          Press Any Key
      </div>  */}
      </div>
     </div> 
  );
};