import React from "react";

// TODO: to be deleted or replaced
// import 'bootstrap/dist/css/bootstrap.css';
// import "./Rating.css";

// TODO: use fontawesome

function Rating (props) {

    let classesArr = ["button"]
    // let text = "BIG"

    props.isSmall // true or false
    if (props.isSmall === true) {
        //text = "small"
        classesArr.push("is-small")
    }
    return (
        <button className={classesArr.join(' ')}>I'm a button</button>
        // {text} between buttons for uncommented test
    )

}


export default Rating;