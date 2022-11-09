import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../../index.css';
import axios from "axios";


class ContactUs extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: "",
        }
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeMessage = this.changeMessage.bind(this);
        this.onContactSubmit = this.onContactSubmit.bind(this);
    }

    changeName(event) {
        this.setState({name:event.target.value});
    }

    changeEmail(event){
        this.setState({email:event.target.value});
    }

    changeMessage(event){
        this.setState({message:event.target.value});
    }

    onContactSubmit(event){
        event.preventDefault();
        const contactUser= {
            name:this.state.name,
            email:this.state.email,
            message:this.state.message,
        }
        axios.post("http://localhost:4000/contactus",contactUser)
            .then(response=>{
                window.location="/contactus/thank-you";
            })
            .catch(error=>{
                alert("Please fill the all the fields correctly");
            })
        
        
    }


    render() {
        return (
            <div className="ContactUsForm container-fluid">
                <h1>Contact Us</h1>
                <p className="text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores autem cupiditate placeat assumenda quaerat, ut eveniet expedita saepe voluptatem illum cum optio ipsum enim illo, consequatur porro omnis est repudiandae sed sint minima ratione alias? Accusamus quisquam tempora repellat excepturi! Natus dolorum porro eveniet fugiat, odit quis in eaque, rem libero voluptatem quas blanditiis ipsam voluptatum, officiis sit praesentium rerum! Quasi magnam corrupti laborum pariatur dignissimos illum excepturi. A, suscipit. Ab cupiditate ducimus quo ex, perspiciatis corporis quidem repellendus laudantium itaque cum quisquam nihil magnam necessitatibus illum. Eius, ad est quam sed, non nesciunt error delectus vitae porro quisquam doloremque.
                </p>
                <form method="post" onSubmit={this.onContactSubmit}>
                    <div className="mb-3 text-start">
                        <label for="name" className="form-label text-muted ">Your Name</label>
                        <input required type="text" name="name" className="form-control" onChange={this.changeName} id="name" placeholder="John Doe" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="email" className="form-label text-muted ">Email address</label>
                        <input required type="email" name="email" className="form-control" id="email" onChange={this.changeEmail} placeholder="name@example.com" />
                    </div>
                    <div className="mb-3 text-start">
                        <label for="message" className="form-label text-muted ">Message</label>
                        <textarea required className="form-control" onChange={this.changeMessage} name="message" id="message" rows="4"></textarea>
                    </div>
                    <input type="submit" className="btn btn-outline-primary" />
                </form>
            </div>
        );
    }
}

export default ContactUs;