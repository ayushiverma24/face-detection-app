import React from "react";
import './ImageForm.css'
const ImageForm = () => {
    return (
        <div>
            <div className="parent">
                <div>
                <p>Paste the Image link to detect face!</p>
                </div>
                <div className="container">
                {/* <div className="box-input"> */}
                    <input type='text' placeholder='Enter Image link'></input>
                {/* </div> */}
                {/* <div className="box-button"> */}
                    <button>Detect</button>
                {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default ImageForm