import React, { useState, useEffect } from "react";
import { GameLoop, Sprite } from "react-game-kit";
import bruni from "../../assets/bruni.png";


export function MovingObject() {
  // const [position, setPosition] = useState({ x: 100, y: 100 });
  const [x, setX] = useState(500);
  // const [prevZ, setPrevZ] = useState(550);
  const [z, setZ] = useState(550);
  const [isJump, setIsJump] = useState(false);
  
  // const animate = () => {
    // Update position of element here
    // ...
    
    
    // requestAnimationFrame(animate);
  // };

  const handleKeyDown = (event) => {
    if (event.keyCode === 37 || event.key === "a") { // move left
      if(isJump){
        setX(x => x-60);
        console.log('jump');
      }else{
        setX(x => x-40);
      }
    // } else if (event.keyCode === 38 || event.key === "w") { // move up
      // setZ(z => z-10);
    } else if (event.keyCode === 39 || event.key === "d") { // move right
      if(isJump){
        console.log('jump');
        setX(x => x+60);
      }else{
        setX(x => x+40);
      }
    // } else if (event.keyCode === 40 || event.key === "s") { // move down
      // setZ(z => z+10);
    } else if (event.keyCode === 32) { //jump
      // console.log("jump");
      if(!isJump){
        setZ(z => z-60);
        setIsJump(true);
  
        setTimeout(() => {
          
          // document.addEventListener("keydown", handleKeyDown);
          setZ(z => z+60);
          setIsJump(false);
        }, 400);  
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    
    // requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
      <div className="move"
        style={{
          position: "absolute",
          left: x,
          top: z,
          // backgroundColor: "red",
          // background: "bruni",
          width: "60px",
          height: "60px",
          transition: 'left 1s, top 1s',
          // animation: "move-animation 0.5s ease-in-out",
        }}>
          <img src={bruni} alt={"bruni"} style={{ width: "60px" , height: "60pxpx"}} />
      </div>
  );
}
