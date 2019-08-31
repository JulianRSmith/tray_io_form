import React, { Component } from "react";
import "../css/App.css";

class App extends Component {
    state = {
        name: "",
        role: "",
        email: "",
        password: "",
        updatesPrimary: true,
        updatedThird: false
    };

    // Calls when an input's value has changed
    handleChange = e => {
        // Get the input that has changed value
        const target = e.target;
        // Get the input's value - if it's a checkbox get the "checked" attribute value
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        // Get the input's name
        const name = target.name;
        // Update the corresponding input's state with the new value
        this.setState({
            [name]: value
        });
    };

    // Calls when the form is submited
    handleSubmit = e => {
        // Prevent browser from reloading the page
        e.preventDefault();
        // Get state of inputs
        const {
            name,
            role,
            email,
            password,
            updatesPrimary,
            updatedThird
        } = this.state;
        // Create object with the value of all the inputs
        const formData = {
            name,
            role,
            email,
            password,
            updatesPrimary,
            updatedThird
        };
        // Output object to console as JSON
        console.log(JSON.stringify(formData));
    };

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    {/* User Section */}
                    <label>
                        Name
                        <input
                            name="name"
                            type="text"
                            required
                            onChange={this.handleChange}
                        ></input>
                    </label>
                    <label>
                        Role
                        <input
                            name="role"
                            type="text"
                            onChange={this.handleChange}
                        ></input>
                    </label>
                    <label>
                        Email
                        <input
                            name="email"
                            type="email"
                            required
                            onChange={this.handleChange}
                        ></input>
                    </label>
                    <label>
                        Password
                        <input
                            name="password"
                            type="password"
                            required
                            onChange={this.handleChange}
                        ></input>
                    </label>
                    {/* Privacy Section */}
                    <label>
                        <input
                            name="updatesPrimary"
                            type="checkbox"
                            checked={this.state.updatesPrimary}
                            onChange={this.handleChange}
                        ></input>
                        Receive updates about Tray.io products by email
                    </label>
                    <label>
                        <input
                            name="updatedThird"
                            type="checkbox"
                            checked={this.state.updatedThird}
                            onChange={this.handleChange}
                        ></input>
                        Receive communication by email for other products
                        created by the Tray.io team
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default App;
