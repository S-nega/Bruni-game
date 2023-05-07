import { useEffect, useState } from "react";
import React from "react";
import { useMechanic } from "../useMechanic";
// import { ReactDOM } from "react";

// export const Person = () => {
//     const [x, setX] = useState(0);
//     const [z, setZ] = useState(0);
  
    // useEffect(() => {
    //     document.addEventListener('keydown', function(event){
    //         // console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    //         if(event.key === 'd'){
    //             console.log('go front');
    //             setX(x+50)
    //             console.log(x, z);
    //         }
    //         if(event.key === 'a'){
    //             console.log('go back');
    //             setX(x-50)
    //             console.log(x, z);
    //         }
    //         if(event.key === 'w'){
    //             console.log('go up');
    //             setZ(z+50)
    //             console.log(x, z);
    //         }
    //     })
    //     updateCanvas(x, z);
    // }, [])

    // const updateCanvas = (x, z) => {
    //     const ctx = this.refs.canvas.getContext('2d');
    //     ctx.fillRect(x, z, 100, 100);
    // }
  
    // const updatePosition = (a, b) => {
    //     if (a === 1){
    //         setX(x+50);
    //         updateCanvas(x, z);
    //     }
    //     if (a === -1){
    //         setX(x-50);
    //         updateCanvas(x, z);
    //     }
    //     if (b === 1){
    //         setZ(z+50);
    //         updateCanvas(x, z);//медлееный подъем
    //         setZ(z-50);
    //         updateCanvas(x, z);//медлееный спуск
    //     }
    // }
  
    // render() {
    //     return(
    //         <canvas ref="canvas" width={200} height={200}/>
    //     );    
    // }
    // export const Person = () => {
    export class Person extends React.Component {
    //     // const {x, z} =  useMechanic();


    //     // useEffect(() => {
    //     //     const ctx = this.useRefs.canvas.getContext('2d');
    //     //     ctx.fillRect(100, 100, 100, 100);
    //     // }, [])
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        // const {x, z} =  useMechanic();

        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(100, 100, 100, 100);
    }
    render() {
        return (
            <canvas ref="canvas" style={{position:"absolute", bottom:"100px", left:"300px"}} width={200} height={200}/>
        );
    }
    // export const Person = () => {

    //     useEffect(() => {
    //         const ctx = this.refs.canvas.getContext('2d');
    //         ctx.fillRect(100, 100, 100, 100);
    //     }, [])

    //     return (
    //         <canvas ref="canvas" width={200} height={200}/>
    //     );
    // };
};