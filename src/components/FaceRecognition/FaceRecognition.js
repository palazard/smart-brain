import React from "react";
import './FaceRecognition.css';
//Code for multiple faces:
import Box from './Box';

//Code for 1 face only1:
    // const FaceRecognition = ({image, boxes})=> {
    //     return (
    //         <div className="centerElements ma pa4">
    //             <div className="absolute">
    //                 <img alt="" src={image} id="image"/>
    //                 <div className="box" style={{"top": boxes.topRow, "left": boxes.leftCol, "right": boxes.rightCol, "bottom": boxes.bottomRow}}></div>
    //             </div>
    //         </div>
    //     )
    // }

//Code for multiple faces:
const FaceRecognition = ({image, boxes}) => {
    // console.log("Received by FaceRecognition", boxes);
    return (
        <div className="centerElements ma pa4">
            <div className="absolute">
                <img alt="" src={image} id="image"/>
                {
                    boxes.map((box, index)=> 
                        <Box key={index}
                            topRow={box.topRow} 
                            leftCol={box.leftCol} 
                            rightCol={box.rightCol} 
                            bottomRow={box.bottomRow}
                        />
                    )
                }
            </div>
        </div>
    );
}


export default FaceRecognition;