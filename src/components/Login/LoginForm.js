import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../index.css';
import axios from "axios";
import FillCookie from "./FillCookie";

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        }  

        

        // event handlers
        this.onLogin = this.onLogin.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changeUsername(event) {
        this.setState({ username: event.target.value });
    }

    changePassword(event) {
        this.setState({ password: event.target.value });
    }

    onLogin(event) {
        event.preventDefault();
        const User = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(User);
        axios.post("http://localhost:4000/login", User)
            .then((response) => {
                FillCookie(response.data);
                window.location = "/";
            })
            .catch((err) => {
                alert("Username or Password Invalid! Try again");
                // alert(err);
            })

    }

    render() {
        return (
            <div className="LoginForm container-fluid">
                <h1>Login</h1>
                <form method="post" onSubmit={this.onLogin}>
                    <div className="mb-3 text-start">
                        <label for="username" className="form-label text-muted ">Username</label>
                        <input required type="text" name="username" className="form-control" onChange={this.changeUsername} id="username" placeholder="username" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="password" className="form-label text-muted ">Password</label>
                        <input type="password" name="password" className="form-control" id="password" onChange={this.changePassword} placeholder="password" />
                    </div>

                    <input required type="submit" className="btn btn-outline-primary" /><br /><br />
                    <span>Don't have an Account,<a href="/signup" className="text-center" style={{ textDecoration: "none" }}> Click here to sign up</a></span>
                </form>

            </div>
        );
    }
}

export default LoginForm;