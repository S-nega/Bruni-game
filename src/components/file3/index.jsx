import { useEffect, useState } from "react";
// import { ReactDOM } from "react";

export const File3 = () => {
    const [progress3, setProgress3] = useState('/intro');//меняется название блока 
    const [map3, setMap3] = useState('mapName.png');//меняется картинка открывающаяся на карту
  
    useEffect(() => {
        document.addEventListener('keydown', function(event){
            // console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
            // if(event.key === 'd'){
            //     console.log('go front');
            //     setX(x+50)
            //     console.log(x, z);
            // }
            // if(event.key === 'a'){
            //     console.log('go back');
            //     setX(x-50)
            //     console.log(x, z);
            // }
            // if(event.key === 'w'){
            //     console.log('go up');
            //     setZ(z+50)
            //     console.log(x, z);
            // }
        })
        // updateCanvas(x, z);
    }, [])

    // const updateCanvas = (x, z) => {
    //     const ctx = this.refs.canvas.getContext('2d');
    //     ctx.fillRect(x, z, 100, 100);
    // }
    // return(
    //     <canvas ref="canvas" width={200} height={200}/>
    // )

    // export class Person extends React.Component {
    // componentDidMount() {
    //     this.updateCanvas();
    // }
    // updateCanvas() {
    //     const ctx = this.refs.canvas.getContext('2d');
    //     ctx.fillRect(100, 100, 100, 100);
    // }
    // render() {
    //     return (
    //         <canvas ref="canvas" width={200} height={200}/>
    //     );
    // }
};