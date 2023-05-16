import React, { useState, useEffect } from "react";
import { GameLoop, Sprite } from "react-game-kit";
import bruni from "../../assets/bruni.png";


export function MovingObject() {
  // const [position, setPosition] = useState({ x: 100, y: 100 });
  const [x, setX] = useState(600);
  const [z, setZ] = useState(500);
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
        // setContainerPosition(-x + window.innerWidth / 2)
        console.log("jump");
      }else{
        if (x <= 40){
          setX(x => 0);
          console.log("stop");
        } else{
          setX(x => x-40);
          // setContainerPosition(-x + window.innerWidth / 2);
        }
      }
    // } else if (event.keyCode === 38 || event.key === "w") { // move up
      // setZ(z => z-10);
    } else if (event.keyCode === 39 || event.key === "d") { // move right
      if(isJump){
        console.log("jump");
        setX(x => x+60);
        // setContainerPosition(-x + window.innerWidth / 2)
      }else{
        setX(x => x+40);

        // setContainerPosition(-x + window.innerWidth / 2)
      }
    // } else if (event.keyCode === 40 || event.key === "s") { // move down
      // setZ(z => z+10);
    } else if (event.keyCode === 32) { //jump
      if(!isJump){
        setZ(z => z-60);
        setIsJump(true);
  
        setTimeout(() => {
          setZ(z => z+60);
          setIsJump(false);
        }, 400);  
      }
    } else if (event.key === "e"){
      console.log("action");
    } else if(event.key === "m"){
      window.location.assign('/map');
      console.log('map');
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if(x < 0){
      setX(0);
    }
    if(x > 2290){
      setX(2290);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [x]);

  return (
      <div className="move"
        style={{
          position: "absolute",
          left: x,
          top: z,
          transition: 'left 1s, top 1s',
          // animation: "move-animation 0.5s ease-in-out",
        }}>
          <img src={bruni} alt={"bruni"} style={{ width: "110px" , height: "110pxpx"}} />
      </div>
  );
}
