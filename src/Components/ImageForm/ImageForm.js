import React from "react";
import './ImageForm.css'
const ImageForm =()=>{
    return(
        <div className="box">
        <div>
        <p>Paste the Image link to detect face!</p>
        <input type='text' placeholder='Enter Image link'></input>
        <button>Detect</button>
        </div>
        </div>
    )
}

export default ImageForm