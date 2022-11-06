import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../index.css';


function SignupForm() {
    return (
        <div className="LoginForm container-fluid">
            <h1>Sign Up</h1>
            <form>
                <div className="mb-3 text-start">
                    <label for="username" className="form-label text-muted ">Username</label>
                    <input type="text" name="username" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="mb-3 text-start">
                    <label for="name" className="form-label text-muted ">Name</label>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Full Name" />
                </div>
                <div className="mb-3 text-start">
                    <label for="username" className="form-label text-muted ">Email</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="mb-3 text-start">
                    <label for="password" className="form-label text-muted ">Password</label>
                    <input type="text" name="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="mb-3 text-start">
                    <label for="password2" className="form-label text-muted ">Enter Password Again</label>
                    <input type="text" name="password2" className="form-control" id="password2" placeholder="Password again" />
                </div>
                
                <input type="submit" className="btn btn-outline-primary" />
            </form>
        </div>
    );
}

export default SignupForm;