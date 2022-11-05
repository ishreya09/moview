import React from "react";

function ContactUs() {
    return (
        <div className="ContactUsForm">
            <h1>Contact Us</h1>
            <form>
                <div className="mb-3 text-start">
                    <label for="name" className="form-label text-muted ">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" placeholder="John Doe" />
                </div>
                <div className="mb-3 text-start">
                    <label for="email" className="form-label text-muted ">Email address</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3 text-start">
                    <label for="message" className="form-label text-muted ">Message</label>
                    <textarea className="form-control" name="message" id="message" rows="4"></textarea>
                </div>
                <input type="submit" className="btn btn-outline-primary" />            
            </form>
        </div>
    );
}

export default ContactUs;