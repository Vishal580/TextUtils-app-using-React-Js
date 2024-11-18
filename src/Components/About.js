// import React, { useState } from 'react'
import React from 'react'

export default function About(props) {
// const [myStyle, setmyStyle] = useState({
//     color: "black",
//     backgroundColor: "white"
// });

let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'#232743':'white'
}
// const [BtnText, setBtnText] = useState("Enable Dark Mode");

// const darkToggleMode = () =>{
//     if(myStyle.color === "black"){
//         setmyStyle({
//             color: "white",
//             backgroundColor: "black",
//             // border: '0.5px solid white'
//         });
//         setBtnText("Enable Light Mode");
//     }
//     else{
//         setmyStyle({
//             color: "black",
//             backgroundColor: "white"
//         });
//         setBtnText("Enable Dark Mode");
//     }
// }
  return (
    <div className="container my-3" style={myStyle}>
        <h1 className='container my-3' >About TextUtils</h1>
        <p className='container my-3'>Welcome to TextUtils, your go-to web application for all things text manipulation! TextUtils is designed to help you transform and manage text exactly the way you want. Whether you're drafting a document, preparing content, or editing notes, TextUtils provides a range of powerful yet easy-to-use tools to make your work seamless.</p>
        <p className='container my-3'>Here's a quick overview of what TextUtils can do for you:</p>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <b>Key Features</b>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Convert to Uppercase: </strong>Need to make a bold statement? With just a click, convert any text to uppercase, making it stand out and convey importance. This feature is perfect for titles, headings, or emphasizing sections of your text.<br/><br/>
                    <strong>Convert to Lowercase: </strong>Standardize your text effortlessly. Convert any text to lowercase with a single click, making it ideal for email addresses, usernames, or simply keeping a consistent text style.<br/><br/>
                    <strong>Capitalized Case: </strong>Give your text a polished look by capitalizing the first letter of each word. This feature is especially helpful for titles, names, and proper nouns, ensuring your text appears professional and well-formatted.<br/><br/>
                    <strong>Copy to Clipboard: </strong>Simplify your workflow by quickly copying transformed text to your clipboard. With the "Copy to Clipboard" feature, you can easily paste your edited text into any document or application without extra steps.<br/><br/>
                    <strong>Download Text: </strong>Save your work directly to your device. The "Download Text" feature allows you to download the modified text as a file, making it convenient for sharing, archiving, or future use.<br/><br/>
                    <strong>Clear All: </strong>Start fresh anytime you need! With the "Clear All" feature, remove all text from the editor instantly, allowing you to work on new text inputs without any hassle.<br/>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <b>Customizable Modes</b>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils goes beyond text editing by offering various display modes to suit your environment and preferences: <br/><br/>
                    <strong>Light Mode: </strong>A clean and classic look, Light Mode provides maximum readability in well-lit environments.<br/><br/>
                    <strong>Dark Mode: </strong>Dark Mode reduces eye strain in low-light settings and gives the interface a sleek, modern aesthetic.<br/><br/>
                    <strong>Brown Mode: </strong>This unique mode combines warmth and comfort, providing an earthy tone that’s easy on the eyes and helps maintain focus.<br/><br/>
                    <strong>Skyblue Mode: </strong>Refresh your workspace with a soft and calming blue theme, perfect for staying productive with a relaxing visual backdrop.<br/>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <b>Why Choose TextUtils?</b>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils is designed to be user-friendly, efficient, and adaptable to your needs. Whether you're formatting a professional document, editing text for a presentation, or simply jotting down notes, TextUtils offers a suite of tools to enhance your productivity and streamline your workflow.
                </div>
                </div>
            </div>
        </div>
        {/* <div className="containe my-3">
            <button type="button" className="btn btn-secondary" onClick={darkToggleMode}>{BtnText}</button>
        </div> */}
    </div>
  )
}
