import mainImg from "../../assets/mainImg.png";
import intro from "../../assets/intro.jpg";
import {saveBlock} from "../file1/index.jsx";
import { useState } from "react";
// import { progress1, setProgress1 } from "../file1/File1";

export const Intro = (props) => {

  // const [progress, setProgress] = useState(props.progress);

  document.addEventListener('keydown', function(event){
    // console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    // setProgress = '/forest';
    // saveBlock('/forest');
    window.location.assign('/forest');
  })

  return (
    <div className="intro">
    {/* add history */}
      {/* <div style={{backgroundImage:"mainImg"}}> */}
          {/* {props.progress} */}
      {/* </div> */}

      {/* <img src={intro} alt={"intro"} style={{ width: "100%" , height: "715px", position: "relative", marginBottom: "0"}} /> */}
      <p style={{position: "absolute", right: "50px", bottom: "30px", paddingBottom: "0px", height: "10px" }}>Press Any Key to skip</p>
    </div> 
  );
};