import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div id="contactForm">
      <h1>Contact Us</h1>
        <form className="formContainer">

            <div className="form-group">
                <p>Name:</p>
                <input type="text"/>
            </div>

            <div className="form-group">
                <p>Email:</p>
                <input type="text"/>
            </div>

            <div className="form-group">
                <p>Message:</p>
                <textarea></textarea>
            </div>

            <div className="buttonDiv">
                <button id="sendButton">Send</button>
            </div>

        </form>

      </div>
    )
  }
}
