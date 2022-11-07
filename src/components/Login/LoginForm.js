import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../index.css';


class LoginForm extends React.Component {
    constructor(){
        super();
        this.state = {
            username:"",
            password:"",
        }
        // event handlers
        this.onLogin=this.onLogin.bind(this);
        this.changeUsername=this.changeUsername.bind(this);
        this.changePassword= this.changePassword.bind(this);
    }

    changeUsername(event){
        this.setState({username:event.target.value});
    }

    changePassword(event){
        this.setState({password:event.target.value});
    }

    onLogin(event){
        event.preventDefault();
        const User = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(User);
        document.cookie(User.username);
        window.location = "/";

    }

    render(){
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
}

export default LoginForm;