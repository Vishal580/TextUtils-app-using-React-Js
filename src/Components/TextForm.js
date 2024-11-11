import React, { useState } from 'react'

export default function TextForm(props) {
const [text, setText] = useState("Enter your text here");

const onClickHandelers = () => {
    // console.log("Upperscase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
}

const onChangeHandeler = (event) =>{
    // console.log("On Change");
    setText(event.target.value);
}
  return (
    <div>
        <h1>{props.headline}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={onChangeHandeler} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={onClickHandelers}>Convert to Uppercase</button>
    </div>
  )
}
