import React from 'react';
import './Navigation.css';

const Navigation = ({onChangeRoute, isSignIn}) => {
    return !isSignIn
    ? (
        <nav >
            <p onClick={()=>onChangeRoute("signin")} className='f3 link underline pa3 pointer grow menu'>Sign in</p>
            <p onClick={()=>onChangeRoute("register")} className='f3 link underline pa3 pointer grow menu'>Register</p>
        </nav>
    )
    : (
        <nav >
            <p onClick={()=>onChangeRoute("signin")} className='f3 link underline pa3 pointer grow menu'>Sign out</p>
        </nav>
    );
}

export default Navigation;