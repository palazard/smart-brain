import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import Brain from './logoBrain.png';

const Logo = () => {
    return (
        <div className="ma4 mt0 divTilt">
            <Tilt>
                <div className="divInternTilt" style={{height: '160px', tiltMaxAngleX: '10', tiltMaxAngleY: '10'}}>
                    <p className="insideTilt"><img alt="logo" src={Brain}></img></p>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;