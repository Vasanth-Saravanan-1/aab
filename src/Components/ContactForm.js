import React from "react"
import './ContactForm.css'

function ContactForm(){
    return(
        <div className="form-container">
            <h1>
                Send a message to us..
            </h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Messsage" rows='4'></textarea>
                <button>Send message</button>
                
            </form>

        </div>
    )
}

export default ContactForm