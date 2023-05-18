import React, { useState, useEffect } from "react";
import { GameLoop, Sprite } from "react-game-kit";
import bruni from "../../assets/bruni.png";


function MovingObject() {
  const [objectX, setObjectX] = useState(600);
  const [objectZ, setObjectZ] = useState(500);
  const [containerX, setContainerX] = useState(0);
  const [prevAction, setPrevAction] = useState('');

  const [blockLeft, setBlockLeft] = useState(null);//1030
  const [blockTop, setBlockTop] = useState(null);//490
  const [blockRight, setBlockRight] = useState(null);
  const [blockBottom, setBlockBottom] = useState(null);
  

  const blocksArray = [
    {
      key:1,
      width: 170,
      height: 200,
      left: 1030,
      top: 520,
      activity: true,
    },
    // {
      // key:2,
      // width: 190,
      // height: 200,
      // left: 980,
      // top: 365,
      // activity: true,
    // },
  ]
  

    // проверкa на столкновение
  const checkCollision = () => {
    let result = "null";
    setBlockTop(null);
    setBlockLeft(null);
    setBlockRight(null);
    for (let i=0; i < blocksArray.length; i++){
      console.log(blocksArray[i].top-145);
      console.log(blocksArray[i].left);//1030+150=1180
      console.log(blocksArray[i].width);
      console.log(objectZ);
      console.log(objectX);//1180

      // if (objectX+130 >= blocksArray[i].left && objectX < blocksArray[i].left && objectZ <= blocksArray[i].top && objectZ > blocksArray[i].top-145){
      //   setBlockTop(blocksArray[i].top);
      //   setBlockRight(blocksArray[i].key);
      //   result = "right";
      //   console.log('right collision');
      //   break;
      // }
      // else if (objectX >= blocksArray[i].left+blocksArray[i].width && objectX <= blocksArray[i].left+blocksArray[i].width+30 && objectZ <= blocksArray[i].top && objectZ > blocksArray[i].top-145){
      //   setBlockTop(blocksArray[i].top);
      //   setBlockLeft(blocksArray[i].key);
      //   result = "left";
      //   console.log('left collision');
      //   break;
      // }
      if (objectX+120 >= blocksArray[i].left && objectX <= blocksArray[i].left+blocksArray[i].width+40 && objectZ <= blocksArray[i].top && objectZ > blocksArray[i].top-145){//проверка на высоту
        setBlockTop(blocksArray[i].top);
        if(objectX+120 >= blocksArray[i].left && objectX < blocksArray[i].left){//препятствие справа
          setBlockRight(blocksArray[i].key);
          result = "right";
          console.log('right collision');
        }
        else if(objectX >= blocksArray[i].left+blocksArray[i].width && objectX <= blocksArray[i].left+blocksArray[i].width+40){//препятствие слева 
          setBlockLeft(blocksArray[i].key);
          result = "left";
          console.log('left collision');
        }
        break;
      }
      else if((objectX+40 >= blocksArray[i].left+blocksArray[i].width || objectX+30 < blocksArray[i].left) && objectZ <= blocksArray[i].top-145){
        setObjectZ(500);
        if(objectX+40 >= blocksArray[i].left+blocksArray[i].width){
          setObjectX(objectX => objectX+40);
        } 
        if(objectX+30 < blocksArray[i].left){
          setObjectX(objectX => objectX-40);
        } 
        console.log('fall');
      }
      else if (objectZ <= blocksArray[i].top){
        console.log("no collision");
        result="null";
      }
    }
    return (result);
  };
  
  const checkActivity = (block) => {
    
    // Логика проверки на врзможносьт взаимодействия 
    return (
      block.activity
    );
  };
  // const checkFloor = () => {
  //   // Логика проверки на наличие опоры
  //   return (
  //     block.left+block.width === objectX+110 && block.top === objectZ-145
  //   );
  // };



  const handleKeyDown = (event) => {
    if (event.keyCode === 37 || event.key === "a") {// move left
      if(checkCollision() === "left"){
        setObjectX(objectX);
      } 
      else{
        setObjectX(objectX => objectX-40);
        setContainerX(containerX => containerX+40);
      }
    }
    if (event.keyCode === 39 || event.key === "d") { // move right
      if(checkCollision() === "right"){
        console.log('stop');
        setObjectX(objectX);
      }
      else{
        console.log('right');
        setObjectX(objectX => objectX+40);
        // console.log(objectX);
        setContainerX(containerX => containerX-40);
      }
    }
    if (event.keyCode === 32) { //jump
      setObjectZ(objectZ => objectZ-60);
      // if (prevAction !== 'jump'){

        // setPrevAction('jump');
        if (checkCollision() === "right"){
          console.log("hang");
          setObjectX(objectX => objectX+60);
          setObjectZ(blockTop-145);//375
          // console.log(blockTop);
        }
        else if(checkCollision() === "left"){
          console.log("hang");
          setObjectX(objectX => objectX-60);
          setObjectZ(blockTop-145);
        }
        else{
          setTimeout(() => {
            setObjectZ(objectZ => objectZ+60);
          }, 400);
        }
      // }
    } 
    if (event.key === "e"){
      if(checkCollision()){//
        if(checkActivity(blockRight)){
          // handleAction();
          //запускается анимация
          blockRight.activity = false;
        }
        else if(checkActivity(blockLeft)){
          // handleAction();
          //запускается анимация
          blockLeft.activity = false;
        }
      }
    } 
    if(event.key === "m"){
      window.location.assign('/map');
      // console.log('map');
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


  // useEffect(() => {
  //   if(checkCollision()){
  //     checkActivity(blockLeft);
  //     checkActivity(blockRight);

  //     // setObjectX(blockX-110);
  //     setContainerX(-320);//
  //     // setBlockX(1030);
  //     // setBlockZ(490);
  //     console.log("block");
  //   }
  //   // if(!checkFloor()){
  //   //   setObjectZ(objectZ+block.height);
  //   // }


  // }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // console.log(objectZ);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }; 
  }, [objectZ]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // console.log(objectZ);
    // console.log(blockTop);
    checkCollision();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }; 
  }, [blockTop]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // console.log(objectX);
    setObjectX(objectX);
    checkCollision();
    
    // if(checkCollision() === "fall"){
    //   setObjectZ(500);
    // }

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
      // console.log("fix");
    }
    if(containerX > -900 && objectX > 1600){
      setContainerX(-900);
      // console.log("fix");
    }
    // if(checkCollision()){
    //   setContainerX(containerX);//???
    //   setObjectX(objectX);
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
