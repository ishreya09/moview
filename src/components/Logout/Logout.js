import React from "react";
import SetCookie from '../../SetCookie';


function Logout(){
    SetCookie();
    return (
        <div className="container-fluid">
            <h1 style={{position:"relative",padding:"100px"}} className="text-primary text-center">You have logged out successfully</h1>
            <a style={{position:"relative"}}  href="/" className="Button text-center btn btn-primary">Go to Home</a>
        </div>
    );
}

export default Logout;