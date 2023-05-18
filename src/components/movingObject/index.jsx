import React, { useState, useEffect } from "react";
import { GameLoop, Sprite } from "react-game-kit";
import bruni from "../../assets/bruni.png";
import { BlocksArray } from "../blocksArray";
import { GameBlocks } from "../gameBlocks";
// import { File1 } from "../file1";
// import { File2 } from "../file2";
// import { File3 } from "../file3";


function MovingObject(file) {
  const blocksArray = BlocksArray();
  const gameBlocks = GameBlocks();

  // const [progress1, fileName1] = File1();
  // const [progress2, fileName2] = File2();
  // const [progress3, fileName3] = File3();
  const fileName = file;
  // const [currentFile]
  const [currentGameBlock, setCurrentGameBlock] = useState('/forest');
  // const [map, setMap] = useState(false);
  const mapName = window.location.href.split('/').pop();
  const [objectX, setObjectX] = useState(600);
  const [objectZ, setObjectZ] = useState(500);
  const [containerX, setContainerX] = useState(0);
  // const [width, setWidth] = useState(0);
  // const [top, setTop] = useState(0);
  // const [rotate, setRotate] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // const [prevAction, setPrevAction] = useState('');

  const [blockTop, setBlockTop] = useState(null);
  // const [blockBottom, setBlockBottom] = useState(null);
  const [blockLeft, setBlockLeft] = useState(
    {
      key: 0,
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      action: false,
    }
  );
  const [blockRight, setBlockRight] = useState(
    {
      key: 0,
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      action: false,
    }
  );
  

  // проверкa на столкновение
  const checkCollision = () => {
    let result = "null";
    setBlockTop(null);
    setBlockLeft(null);
    setBlockRight(null);
    for (let i=0; i < blocksArray.length; i++){
      // console.log(blocksArray[i].top-145);
      // console.log(blocksArray[i].left);//1030+150=1180
      // console.log(blocksArray[i].width);
      // console.log(objectZ);
      // console.log(objectX);//1180
      if(blocksArray[i].location === mapName){  
        if (objectX+120 >= blocksArray[i].left && objectX <= blocksArray[i].left+blocksArray[i].width+40 && objectZ <= blocksArray[i].top && objectZ > blocksArray[i].top-145){//проверка на высоту
          setBlockTop(blocksArray[i].top);
          if(objectX+120 >= blocksArray[i].left && objectX < blocksArray[i].left){//препятствие справа
            // setBlockRight(blocksArray[i]);
            setBlockRight(
              {
                key: blocksArray[i].key,
                left: blocksArray[i].left,
                top: blocksArray[i].top,
                width: blocksArray[i].width,
                height: blocksArray[i].height,
                action: blocksArray[i].action,
              });
            result = "right";
            // console.log('right collision');
          }
          else if(objectX >= blocksArray[i].left+blocksArray[i].width && objectX <= blocksArray[i].left+blocksArray[i].width+40){//препятствие слева 
            // setBlockLeft(blocksArray[i]);
            setBlockLeft(
              {
                key: blocksArray[i].key,
                left: blocksArray[i].left,
                top: blocksArray[i].top,
                width: blocksArray[i].width,
                height: blocksArray[i].height,
                action: blocksArray[i].action,
              });
            result = "left";
            // console.log('left collision');
          }
          break;
        }
        else if((objectX+40 >= blocksArray[i].left+blocksArray[i].width || objectX+30 < blocksArray[i].left) && objectZ <= blocksArray[i].top-145){ // падение
          setObjectZ(500);
          if(objectX+40 >= blocksArray[i].left+blocksArray[i].width){
            setObjectX(objectX => objectX+40);
          } 
          if(objectX+30 < blocksArray[i].left){
            setObjectX(objectX => objectX-40);
          } 
          // console.log('fall');
          break;
        }
        else if (objectZ <= blocksArray[i].top && objectX+120 >= blocksArray[i].left && objectX <= blocksArray[i].left+blocksArray[i].width+40){
          // console.log("no collision");
          result="null";
          break;
        }
        else if (objectZ <= blocksArray[i].top){
          // console.log("no collision");
          result="null";
        }
      }
    }
    return (result);
  };

  //проверкa на врзможносьт взаимодействия 
  const checkActivity = (block) => {
    return (
      block.action
    );
  };



  const handleKeyDown = (event) => {
    if (event.keyCode === 37 || event.key === "a") {// move left
      if(checkCollision() === "left" || checkCollision() === "block"){
        setObjectX(objectX);
      } 
      else{
        setObjectX(objectX => objectX-40);
        setContainerX(containerX => containerX+40);
      }
    }
    if (event.keyCode === 39 || event.key === "d") { // move right
      // console.log(checkCollision());
      if(checkCollision() === "right" || checkCollision() === "block"){
        // console.log('stop');
        setObjectX(objectX);
      }
      else{
        // console.log('right');
        setObjectX(objectX => objectX+40);
        // console.log(objectX);
        setContainerX(containerX => containerX-40);
      }
    }

    if (event.keyCode === 32) { //jump
      // setObjectZ(objectZ => objectZ-60);
      // checkActivity(blockRight);
      // checkActivity(blockLeft);
      // if(!checkActivity(blockRight) && !checkActivity(blockLeft)){
        if (checkCollision() === "right"){
          // console.log("hang");
          setObjectX(objectX => objectX+60);
          setObjectZ(objectZ => blockTop-145);
          // console.log(blockTop);
          // console.log(objectZ);
        }
        else if(checkCollision() === "left"){
          // console.log("hang");
          setObjectX(objectX => objectX-60);
          setObjectZ(blockTop-145);
        }
        // else{
        //   setTimeout(() => {
        //     setObjectZ(objectZ => objectZ+60);
        //   }, 400);
        // }
      // }
    } 

    if (event.key === "e"){ //action
      if(checkCollision()){
        if(checkActivity(blockRight)){
          setIsAnimating(true);
          // let width = 500;
          // let top = 530;
          // let rotate = 90;
          // console.log("animation");
          // blockRight.action = false;
        }
        else if(checkActivity(blockLeft)){
          setIsAnimating(true);
          // let width = 500;
          // let top = 530;
          // let rotate = 90;
          // console.log("animation");
          // blockLeft.action = false;
        }
      }
    } 
    if(event.key === "m"){
      // setMap(true);
      window.location.assign('/map'); //сделать просто картинку по верх всего
    }

    // if(event.key === "f" && objectX >= 2200){ //переход на следующий уровень
      // for(let i=0; i<gameBlocks.length; i++){
      //   if(gameBlocks === currentGameBlock){
      //     setCurrentGameBlock(gameBlocks[i+1]);
      //     window.location.assign(gameBlocks[i+1]); 
      //     break;
      //   }
      // }
      // window.location.assign(gameBlocks[1].name); 
    // }
  // };

  // const handleAction = () => {
    
    // blocksArray[2](
    //   {
    //     key:3,
    //     left: 1955,
    //     top: 530,
    //     width: 600,
    //     height: 100,
    //     action: false,
    //   }
    // );
  };



  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    setObjectZ(objectZ);
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
    // console.log(objectZ);
    // console.log(mapName);
    setObjectX(objectX);
    setObjectZ(objectZ);

    checkCollision();
    
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
    }
    if(containerX > -900 && objectX > 1600){
      setContainerX(-900);
    }

    if(objectX >= 2300){
      let currentBlock = window.location.href.split('/').pop();
      setCurrentGameBlock(currentBlock);
      let id = 0;
      // console.log(currentBlock);
      for (let i=0; i<gameBlocks.length; i++){
        if (currentBlock === gameBlocks[i].name){
          id = i+1;
        }
      }
      window.location.assign('/' + gameBlocks[id].name);
    }
    if(objectX <= 50){
      let currentBlock = window.location.href.split('/').pop();
      setCurrentGameBlock(currentBlock);
      let id = 1;
      // console.log(currentBlock);
      for (let i=0; i<gameBlocks.length; i++){
        if (currentBlock === gameBlocks[i].name && gameBlocks[i].name !== "forest"){
          id = i-1;
        }
      }
      window.location.assign('/' + gameBlocks[id].name);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [objectX]);

  return [objectX, objectZ, containerX, isAnimating, currentGameBlock];
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
