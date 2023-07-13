import React,{useState} from 'react'
import './components.css';


export default function Textform(props) {
    
    const upclick = () =>{
        // console.log("uppercase was clicked" );
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Text connverted to UpperCase","success");
    }
    
    const loclick = () =>{
        // console.log("lowercase was clicked")
        let newtext2 = text.toLowerCase();
        setText(newtext2);
        props.showAlert("Text connverted to LowerCase","success");

    }
    
    const clear = () =>{
        setText("")
        props.showAlert("Text has been cleared","success");
    }
    
    // const email = (text) =>{
    //     var ele = document.getElementById("pole");
    //     var matches = props.text.split(" ").filter((text)=>{
    //         var regex = /([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    //         return regex.exec(text);
    //     });
    //     if (text === " "){
    //         ele.innerHTML =" "; 
    //     }
    //     if (matches === null) {
    //         ele.innerHTML = "no email's found";
    //     }
    //     else{
    //         ele.innerHTML = matches;
    //         }


        // var matches = text.split(" ").filter((text)=>{
        // var regex = /([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
        // var matches = regex.exec(text);
        // return matches;
        // })
        // if (text === " "){
        //         ele.innerHTML =" ";
        //     }
        // if (matches === null) {
        //     ele.innerHTML = "no email's found";
        // } 
        // else {
        //     ele.innerHTML = matches.split(" ");
        // }
        // props.showAlert("Email extracted look below for the email's","success");
    // }
    
    const copy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success");

    }

    const handleExtraSpaces = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extraspaces has been removed from the text","success");

    }
    
    const handleonchange = (event) =>{
        // console.log("on change");
        setText(event.target.value);
    }
    
    const[text,setText] = useState("");
    
    // text = "new text";// wrong way to change the state 
    // setText("new text");// right way to change the state
    
    // const count = () =>{
    //     let c1 = 0
    //     if(/\s+$/.test(text) || text === ""){
    //         c1=c1+1;
    //     }
    //     // if(text === ""){
    //     //     c1 = 1
    //     // }
    //     return c1;
    // }
  return (
    <>
        <div className='container' style = {{color: props.mode === "dark"?"white":"black"}}>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
            <textarea className="form-control" onChange={handleonchange} style = {{backgroundColor: props.mode === "dark"?"#5E8EB4":"white" , color: props.mode === "black",fontWeight:"600"}} 
            value={text} placeholder='Enter your text' id="myBox" rows="8"></textarea>
            </div>
            <button id="sai" disabled={text.length===0} className="btn btn-outline-info mx-2 my-1" style = {{color: props.mode ==="dark"?"white":"black"}} onClick={upclick}>convert to uppercase</button>
            <button id="sai" disabled={text.length===0} className="btn btn-outline-info mx-2 my-1" style = {{color: props.mode ==="dark"?"white":"black"}} onClick={loclick}>convert to lowercase</button>
            <button id="sai" disabled={text.length===0} className="btn btn-outline-info mx-2 my-1" style = {{color: props.mode ==="dark"?"white":"black"}} onClick={clear}>clear text</button>
            {/* <button id="sai" disabled={text.length===0} className="btn btn-outline-info mx-2 my-1" style = {{color: props.mode ==="dark"?"white":"black"}} onClick={email}>Extract email-id</button> */}
            <button id="sai" disabled={text.length===0} className="btn btn-outline-info mx-2 my-1" style = {{color: props.mode ==="dark"?"white":"black"}} onClick={copy}>Copy text</button>
            <button id="sai" disabled={text.length===0} className="btn btn-outline-info mx-2 my-1" style = {{color: props.mode ==="dark"?"white":"black"}} onClick={handleExtraSpaces}>remove extra spaces</button>
        </div>
        <div className="container my-2" style = {{color: props.mode ==="dark"?"white":"black"}}>
            <h2>Your text summary</h2>   
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something in the text box to preview it"}</p>
            <h3>Email Id's</h3>
            <p id="pole">{text.split(" ").filter((text)=>{var regex = /([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
            return regex.exec(text);})}</p>
        </div>
    </>
  )
}
