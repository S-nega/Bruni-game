import { useRef, useState, useEffect } from "react";


export const useCanvas = (callback) => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      callback([canvas, ctx]);
    }, []);
  
    return canvasRef;
  }
  
  const Canvas = () => {
    const [position, setPosition] = useState({});
    const canvasRef = useCanvas(([canvas, ctx]) => {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const x = canvas.width;
      const y = canvas.height;
      setPosition({ x, y });
    });
  
    return (<canvas ref={canvasRef} />);
  };