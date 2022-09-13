import React, { useState } from 'react'
export default function Textform(props) {
    const handleUpClick = () => {
        //  console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick = () => {
        //  console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick = () => {
        //  console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("text to clear","success");
    }
    
        const handleExtraSpaces = () => {
            //  console.log("Uppercase was clicked" + text);
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert("remove to space","success");
        }
    
    const handleOnChange = (event) => {
        //  console.log("on Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');




    return ( <>
        <
        div className = "container" >
        < h1 > { props.heading } </h1> <
        div className = "mb-3" >
        <
        textarea className = "form-control"
        value = { text }
        onChange = { handleOnChange }
        id = "mybox"
        rows = "3" > </textarea>
         </div >
        <button className = "btn btn-primary mx-2"
        onClick = { handleUpClick } > Convert to Uppercase m </button><
        button className = "btn btn-primary mx -2"
        onClick = { handleLoClick } > Convert to Lowercase </button> <
        button className = "btn btn-primary mx -2"
        onClick = { handleClearClick } > Clear text </button>  
        <button className = "btn btn-primary mx-2"
        onClick = { handleExtraSpaces } > Remove Extra Spaces </button>
        </div>

        <div className = "container my.3"/ >
        <
        h1 > your text summary </h1>  <
        p > { text.split(" ").length }
        words and { text.length }
        character </p> <
        p > { 0.008 * text.split(" ").length }
        Minutes read </p>   <
        h2 > Preview </h2> 
        <p> { text } </p>
        </>
        
    )
}