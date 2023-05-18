import React, { useState, useEffect } from "react";
import { GameLoop, Sprite } from "react-game-kit";
import bruni from "../../assets/bruni.png";


function MovingObject() {
  const [objectX, setObjectX] = useState(600);
  const [objectZ, setObjectZ] = useState(500);
  const [containerX, setContainerX] = useState(0);
  // const [prevAction, setPrevAction] = useState('');

  const [blockTop, setBlockTop] = useState(null);
  const [blockBottom, setBlockBottom] = useState(null);
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
  

  const blocksArray = [
    {
      key:1,
      left: 1030,
      top: 520,
      width: 170,
      height: 200,
      action: false,
    },
    {
      key:2,
      left: 1955,
      top: 530,
      width: 580,
      height: 100,
      action: true,
    },
    // {
    //   key:3,
    //   left: 1955,
    //   top: 125,
    //   width: 180,
    //   height: 500,
    //   action: true,
    // },
  ]
  

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
          console.log('right collision');
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
          console.log('left collision');
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
        console.log('fall');
        break;
      }
      // else if(objectX+120 >= blocksArray[i].left && objectX < blocksArray[i].left && objectZ >= blocksArray[i].top){ //не преодолимое препятствие 
      //   setBlockRight(
      //     {
      //       key: blocksArray[i].key,
      //       left: blocksArray[i].left,
      //       top: blocksArray[i].top,
      //       width: blocksArray[i].width,
      //       height: blocksArray[i].height,
      //       action: blocksArray[i].action,
      //     }
      //   );
      //   result = "block";
      //   console.log('block');
      //   break;
      // }
      else if (objectZ <= blocksArray[i].top && objectX+120 >= blocksArray[i].left && objectX <= blocksArray[i].left+blocksArray[i].width+40){
        console.log("no collision");
        result="null";
        break;
      }
      else if (objectZ <= blocksArray[i].top){
        console.log("no collision");
        result="null";
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
      console.log(checkCollision());
      if(checkCollision() === "right" || checkCollision() === "block"){
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
      // setObjectZ(objectZ => objectZ-60);
      // checkActivity(blockRight);
      // checkActivity(blockLeft);
      // if(!checkActivity(blockRight) && !checkActivity(blockLeft)){
        if (checkCollision() === "right"){
          console.log("hang");
          setObjectX(objectX => objectX+60);
          setObjectZ(objectZ => blockTop-145);
          // console.log(blockTop);
          // console.log(objectZ);
        }
        else if(checkCollision() === "left"){
          console.log("hang");
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
          // handleAction();
          //запускается анимация
          console.log("animation")
          blockRight.action = false;
          console.log(blockRight.action);
        }
        else if(checkActivity(blockLeft)){
          // handleAction();
          //запускается анимация
          console.log("animation")
          blockLeft.action = false;
        }
      }
    } 
    if(event.key === "m"){
      window.location.assign('/map'); //сделать просто картинку по верх всего
    }
  };

  const handleAction = () => {
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
    console.log(objectZ);

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
    console.log(objectZ);
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
