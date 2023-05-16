import React, { useState, useEffect } from "react";
import { GameLoop, Sprite } from "react-game-kit";
import bruni from "../../assets/bruni.png";


// const Object = (x, z) => {
//   return(
//     <div className="move"
//     style={{
//       position: "absolute",
//       left: x,
//       top: z,
//       transition: 'left 1s, top 1s',
//     }}>
//       <img src={bruni} alt={"bruni"} style={{ width: "110px" , height: "110pxpx"}} />
//       {x}
//   </div>
//   );
// };

function MovingObject() {
  // const [Object, setObject] = useState({ x: 100, y: 100 });
  const [objectX, setObjectX] = useState(600);
  const [objectZ, setObjectZ] = useState(500);
  const [containerX, setContainerX] = useState(0);
  const [blockX, setBlockX] = useState(1030);
  const [blockZ, setBlockZ] = useState(490);
  
  const block = {
    width: 190,
    height: 200,
    left: 980,
    top: 490,
    activity: true
  };



  const checkCollision = () => {
    // Логика проверки на столкновение
    return (
      objectX === blockX-110
    );
  };
  const checkActivity = () => {
    // Логика проверки на врзможносьт взаимодействия 
    return (
      block.activity
    );
  };
  const checkFloor = () => {
    // Логика проверки на наличие опоры
    return (
      block.left+block.width === objectX+110 && block.top === objectZ-145
    );
  };



  const handleKeyDown = (event) => {
    if (event.keyCode === 37 || event.key === "a") { // move left
      setObjectX(objectX => objectX-40);
      setContainerX(containerX => containerX+40);
    }
    if (event.keyCode === 39 || event.key === "d") { // move right
      setObjectX(objectX => objectX+40);
      setContainerX(containerX => containerX-40);
    }
    if (event.keyCode === 32) { //jump
      setObjectZ(objectZ => objectZ-60);
       
      if (blockX === objectX+110 && blockZ >= objectZ-30){
        console.log("hang");
        setObjectX(objectX+40);
        setObjectZ(blockZ-145);
        setBlockX(2000);//
      }
      else{
        setTimeout(() => {
          setObjectZ(objectZ => objectZ+60);
        }, 400);
      }
        
    } 
    if (event.key === "e"){
      if(checkCollision() && checkActivity()){
        console.log('activity is true');
      }
    } 
    if(event.key === "m"){
      window.location.assign('/map');
      console.log('map');
    }
    // if (checkCollision()) {
    //   // Логика, выполняемая при столкновении с объектом
    //   setObjectX(blockX-110);
    //   setContainerX(-320);//
    //   // setBlockX(1030);
    //   // setBlockZ(490);
    //   // console.log("block");
    //   console.log('Столкновение с объектом!');
    // }
  };


  useEffect(() => {
    // console.log("press");
    document.addEventListener("keydown", handleKeyDown);
    // const moobjectX = objectX;
    console.log(objectZ);
    console.log(blockZ);


    if(objectX < 0){
      setObjectX(0);
    }
    if(objectX > 2290){
      setObjectX(2290);
    }

    
    if(containerX > 0){
      setContainerX(0);
    }
    if(containerX < -900){
      setContainerX(-900);
    }
    if(containerX < 0 && objectX < 600){
      setContainerX(0);
      console.log("fix");
    }
    if(containerX > -900 && objectX > 1600){
      setContainerX(-900);
      console.log("fix");
    }
    if(checkCollision()){
      setObjectX(blockX-110);
      setContainerX(-320);//
      // setBlockX(1030);
      // setBlockZ(490);
      console.log("block");
    }
    // if(!checkFloor()){
    //   setObjectZ(objectZ+block.height);
    // }


    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [objectX]);

  return [objectX, objectZ, containerX];
  // return(
  //   <div className="move"
  //   style={{
  //     position: "absolute",
  //     left: objectX,
  //     top: objectZ,
  //     transition: 'left 1s, top 1s',
  //   }}>
  //     <img src={bruni} alt={"bruni"} style={{ width: "110px" , height: "110pxpx"}} />
  //     {x}
  // </div>
  // );
}

export {MovingObject};
