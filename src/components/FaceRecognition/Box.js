//Code for multiple faces:
import React from 'react';

const Box = ({topRow, leftCol, rightCol, bottomRow}) => {
    return(
     <div className="box" style={{"top": topRow, "left": leftCol, "right": rightCol, "bottom": bottomRow}}></div>
    )
}

export default Box;