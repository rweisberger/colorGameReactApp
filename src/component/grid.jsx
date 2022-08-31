import React, {useState} from "react";
import "./grid.css";

const GridBox = (props) => {
let isActive = false; // console.log(props.selectedBox, props.box, props.selectedBox === props.box)
console.log(props.selectedBox)
if (parseInt(props.selectedBox) === parseInt(props.box)) {
    isActive = !isActive;
}




    return (
        <div className={ isActive ? ("grid-box2") : ("grid-box1")} id={props.index}>{props.box}</div>
    )
}

export default GridBox;