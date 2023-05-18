import { useEffect, useState } from "react";
import { MovingObject } from "../movingObject";
// import { ReactDOM } from "react";

export const File3 = () => {
    MovingObject('file3');

    const [progress, setProgress] = useState('intro');//меняется название блока 
    const [map1, setMap1] = useState('mapName.png');//меняется картинка открывающаяся на карту
  
    return progress;
};