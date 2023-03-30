import React from "react";
import { ReactDOM } from "react";

export class Person extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(100, 100, 100, 100);
    }
    render() {
        return (
            <canvas ref="canvas" width={200} height={200}/>
        );
    }
}