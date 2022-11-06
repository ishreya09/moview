import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../index.css';


function LoginForm() {
    return (
        <div className="LoginForm container-fluid">
            <h1>Login</h1>
            <form>
                <div className="mb-3 text-start">
                    <label for="username" className="form-label text-muted ">Username</label>
                    <input type="text" name="username" className="form-control" id="username" placeholder="username" />
                </div>
                <div className="mb-3 text-start">
                    <label for="password" className="form-label text-muted ">Password</label>
                    <input type="text" name="password" className="form-control" id="password" placeholder="password" />
                </div>
                
                <input type="submit" className="btn btn-outline-primary" />
            </form>
        </div>
    );
}

export default LoginForm;