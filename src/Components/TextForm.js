import React, { useState } from 'react'

export default function TextForm(props) {
const [text, setText] = useState("");

const UppercaseHandeler = () => {
    // console.log("Upperscase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
}

const LowercaseHandeler = () => {
    let newText = text.toLowerCase();
    setText(newText);
}

const clearTextHandeler = () => {
    let newText = "";
    setText(newText);
}

const CapitalizedCaseHandeler = () => {
    let newText = text
    .toLowerCase() // Convert the whole string to lowercase first
    .split(' ') // Split the string into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join the words back into a single string;
    setText(newText);
}
const copyToClipboardhandeler = () => {
    // Get the text field
    var copyText = document.getElementById("myBox");

    // Check if there is text to copy
    if (copyText.value === "") {
        alert("The textarea is empty. Nothing to copy!");
        return;  // Exit the function early if empty
    }

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

const DownloadTexthandeler = () => {
    var downloadText = document.getElementById("myBox");

    if(downloadText.value === ""){
        alert("The textarea is empty. Nothing to Download!");
        return;  // Exit the function early if empty
    }
    // Create a Blob from the text
    const blob = new Blob([text], { type: 'text/plain' });

    // Create a temporary link element
    const link = document.createElement("a");

    // Create an object URL for the Blob and set it as the link's href
    link.href = URL.createObjectURL(blob);

    // Set the download attribute with the desired file name
    link.download = "TextUtils.txt";

    // Append the link to the body (it's needed to trigger the download)
    document.body.appendChild(link);

    // Programmatically click the link to start the download
    link.click();

    // Clean up by removing the temporary link
    document.body.removeChild(link);
}

const onChangeHandeler = (event) =>{
    // console.log("On Change");
    setText(event.target.value);
}
  return (
    <>
    <div>
        <h1>{props.headline}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={onChangeHandeler} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-secondary mx-1' onClick={UppercaseHandeler}>Convert to Uppercase</button>
        <button className='btn btn-secondary mx-1' onClick={LowercaseHandeler}>Convert to Lowercase</button>
        <button className='btn btn-secondary mx-1' onClick={CapitalizedCaseHandeler}>Capitalized Case</button>
        <button className='btn btn-secondary mx-1' onClick={copyToClipboardhandeler}>Copy to Clipboard</button>
        <button className='btn btn-secondary mx-1' onClick={DownloadTexthandeler}>Download Text</button>
        <button className='btn btn-secondary mx-1' onClick={clearTextHandeler}>Clear all</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
        <p>Average time to read the given text is {0.008 * text.split(" ").length} Minuts</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
