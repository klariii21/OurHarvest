import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    };
    // To ensure this is calling this.handleChange
    this.handleChange = this.handleChange.bind(this);
  }

  //Field could be firstname, lastname,phone.email or message
  //value is the content inputted by the user
  handleChange(field, value) {
    this.setState({
      [field]:value,
    })
  }

//On Submitting the form
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  
  render() {
    return (
      <div className="container_contact">
        <div className="contact-heading">
          <h3>Contact Us</h3>
          <p>Please enter your details below:</p>
        </div>

        <div className="formbox">
          <form onSubmit={this.handleSubmit}>
            <div className="row input-field s6">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                value={this.state.firstName}
                onChange={(e) => this.handleChange('firstName',e.target.value)}
              />
            </div>

            <div className="row input-field s6">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                value={this.state.lastName}
                onChange={(e) => this.handleChange('lastName',e.target.value)}
              />
            </div>

            <div className="row input-field s6">
              <label htmlFor="phone">Phone no:</label>
              <input
                type="text"
                value={this.state.phone}
                onChange={(e) => this.handleChange('phone',e.target.value)}
              />
            </div>

            <div className="row input-field s6">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                value={this.state.email}
                className="validate"
                onChange={(e) => this.handleChange('email',e.target.value)}
              />
            </div>

            <div className="row input-field s6">
              <label htmlFor="message">Message(optional):</label>
              <textarea
                type="text"
                value={this.state.message}
                className="materialize-textarea"
                onChange={(e) => this.handleChange('message',e.target.value)}
              ></textarea>
            </div>

            <button className="btn waves-effect waves-light">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
