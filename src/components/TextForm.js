import React, { useState } from 'react';



export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success");
  }
  const handleLowClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
  }
  const handleClear = ()=>{
    // console.log("Clear was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Your text has been Cleared!", "success");
  }
  const handleCopy= ()=>{
    // console.log("Copy was clicked" + text);
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges()
    props.showAlert("Copied the Text to Clipboard!", "success");
  }
  const handleSpaces = ()=>{
    // console.log("Remove extra spaces was clicked" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are Removed!", "success");
  }
  const handleOnChange = (event)=>{
    // console.log("Handle on change was clicked");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <div>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleUpClick}>Convert to UpperCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleClear}>Clear the text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleCopy}>Copy the text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleSpaces}>Remove extra spaces</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleLowClick}>Convert to LowerCase</button>
        </div>
        
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
