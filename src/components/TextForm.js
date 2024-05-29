import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","success")
  };
  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
    
  };
  const [text, setText] = useState("");
  // setText('afafafa')  // esto garyo bhane aba enter text here hunna tyo bhitra ko value aucha//
  return (

    <>
    <div className="container " style={{color: props.mode==='dark'?'white':'#142536'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#142536'}} value={text} onChange={handleOnChange} id="myBox" rows="9"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        convert to uppercase
      </button>
    </div>
    <div className="container my-4 "style={{backgroundColor:props.mode==='dark'?'#142536':'white', color:props.mode==='dark'?'white':'#142536'}}>
        <h1> your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} character</p>
        <p>time that might me taken to read {0.008 * text.split(" ").length }</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"WRITE SOMETHING MOTHERFUCKER"}</p>
    </div>
    </>
  );
}
