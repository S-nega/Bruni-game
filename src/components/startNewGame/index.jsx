import { useEffect, useState } from "react";
import { Person } from "../person";

export const StartNewGame = () => {
  const [x, setX] = useState(0);
  const [z, setZ] = useState(0);
  
  useEffect(() => {
    // document.addEventListener('keydown', function(event){
      window.addEventListener("keydown", downHandler);
    // updateCanvas(e);
    return () => {
      window.removeEventListener("keydown", downHandler);
    }
  }, [])


  function downHandler({ key }) {
    if(key === 'd'){
      console.log('go front');
      // const ctx = this.refs.canvas.getContext('2d');
      // ctx.fillRect(x+50, z, 100, 100);
      setX(x+50)
      updateCanvas(x, z);
      // console.log(x, z);
    }
    else if(key === 'w'){
      console.log('up');
      // setZ(z+50)
      // console.log(x, z);
    }
    else if(key === 'a'){
      console.log('back');
      // setZ(x-50)
      // console.log(x, z);
    }
    else if(key === 's'){
      console.log('down');
      // setZ(z-50)
      // console.log(x, z);
    }
  }


  const updateCanvas = (x, z) => {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillRect(x, z, 100, 100);
  }

  // function Box() {
    // const [position, setPosition] = useState({ left: 0, top: 0 });
    // const [size, setSize] = useState({ width: 100, height: 100 });
  
    // useEffect(() => {
    //   function handleKeyReaction(e) {
    //     setPosition({ left: e.pageX, top: e.pageY });
    //   }
    // })

    // const handleKeyReaction = () => {
    //   document.addEventListener('keydown', function(event){
    //     console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    //     if(event.key === 'd'){
    //         console.log('go front')
            
    //     }
    //   })  
    // }

    // document.addEventListener('keydown', function(event){
    //     // console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    //     if(event.key === 'd'){
    //         console.log('go front');
    //         setX(x+50)
    //         console.log(x, z);
    //     }
    //     if(event.key === 'a'){
    //       console.log('go back');
    //       setX(x-50)
    //       console.log(x, z);
    //     }
    //     if(event.key === 'w'){
    //       console.log('go up');
    //       setZ(z+50)
    //       console.log(x, z);
    //     }
    // })

    return (
      <>
        <Person/>
      </>
    );
  };