import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../index.css';
import setState from "react";
import axios from "axios";

class SignupForm extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            name: "",
            email: "",
            password: "",
        };
        // bind all the events here
        this.changeUsername = this.changeUsername.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
    }

    changeUsername = (event) => {
        this.setState({ username: event.target.value });
    }
    changeName = (event) => {
        this.setState({ name: event.target.value });
    }
    changeEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }


    onSignUp = (event) => {
        event.preventDefault();
        const signedupUser = {
            username: this.state.username,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:4000/signup",signedupUser)
        .then(response=>{
            console.log(response.data);
        })
        window.location = "/login";
    }

    render() {
        return (
            <div className="LoginForm container-fluid">
                <h1>Sign Up</h1>
                <form method="post" onSubmit={this.onSignUp}>
                    <div className="mb-3 text-start">
                        <label for="username" className="form-label text-muted ">Username</label>
                        <input required type="text" name="username" onChange={this.changeUsername} value={this.state.username} className="form-control" id="username" placeholder="Username" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="name" className="form-label text-muted ">Name</label>
                        <input required type="text" name="name"  value={this.state.name} onChange={this.changeName} className="form-control" id="name" placeholder="Full Name" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="username" className="form-label text-muted ">Email</label>
                        <input required type="email" name="email"  value={this.state.email} onChange={this.changeEmail} className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="password" className="form-label text-muted ">Password</label>
                        <input required  type="password" name="password"  value={this.state.password} onChange={this.changePassword} className="form-control" id="password" placeholder="Password" />
                    </div>

                    <input type="submit" value="Sign Up" className="btn btn-outline-primary" />
                </form>
                <span className="text-start">Already a user? <a href="/login">Login here</a></span>
            </div>
        );
    }
}

export default SignupForm;