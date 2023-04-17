import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({inputChange, onButtonSubmit}) => {
    return (
        <div className="tc">
            <p className="pa3 f3 white">This Magic Brain will detect the faces in your pictures</p>
            <div className="pa3 br3 shadow-2 w-70 centerElements center">
                <input type="text" className="f5 ma2 h2 w-80" placeholder="https://url-of-your-image.com/yourimage" onChange={inputChange}></input>
                <button onClick={onButtonSubmit} className="f5 ma2 pa2 grow submitButton w-20">Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;