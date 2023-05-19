import mapImg from "../../assets/mapImg.jpeg";
import {saveBlock} from "../file1/index.jsx";
import { useState } from "react";
// import { useHistory } from "react-router-dom";

export const Map = (props) => {
    // const history = useHistory();

  document.addEventListener('keydown', function(event){
    if(event.key === "q"){
        // const handleGoBack = () => {
        // history.goBack();
        //   };
        window.location.assign('/forest'); //вытащить роут из file
    }
  })

  return (
    <div className="map">
      
      {/* <img src={mapImg} alt={"mapImg"} style={{ width: "100%", height:"715px" }} /> */}
      <p style={{position: "absolute", right: "50px", bottom: "30px", paddingBottom: "0px", height: "10px" }}>Press q to quite map</p>
      {/* сделать картинку бэкгрундом */}
    </div> 
  );
};