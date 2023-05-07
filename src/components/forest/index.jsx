import { GameLogic } from "../gameLogic";
import { File1 } from "../file1";
import { useMechanic } from "../useMechanic";
import {Person} from "../person";
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";
import {useCanvas} from "../useCanvas";
import {Map} from "../map";
import {MovingObject} from "../movingObject"; 
import forest from "../../assets/forest.jpg";

// import mainImg from "../../assets/mainImg.png";

export const Forest = () => {
  // useMechanic();
  document.addEventListener('keydown', function(event){
    // File1.setProgress("/forest");
    if(event.key === "m"){
      window.location.assign('/map');
      console.log('map');
    }
  })

  // useEffect((event) => {
  // }, [])

  return (
    <div className="forest">
    {/* <h1>Forest</h1> */}
    {/* {useCanvas()} */}

    {/* <useCanvas/> */}
    {/* useCanvas() */}
    {/* <img src={forest} alt={"forest"} style={{ width: "100%" , height: "715px", position: "relative"}} /> */}
    {/* <Person /> */}
      <MovingObject/>
      <div style={{
        position: "absolute",
        left: "2px",
        top: "610px",
        backgroundColor: "#6B8E23",
        width: "1100px",
        height: "105px",
        borderRadius: "5px",
        borderTop: "20px",
        borderColor: "#228B22",
      }}
      ></div>
      <div style={{
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
      ></div>

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
      ></div>
       {/* <img src={mainImg} alt={"mainImg"} style={{ width: "100%" }} /> */}
      
      {/* <div width="230px" hiegth="200px">
          Press Any Key
      </div>  */}
    </div> 
  );
};