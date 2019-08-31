import React, { Component } from "react";
import "../css/App.css";

import PageDisplay from "./PageDisplay";
import User from "./User";
import Privacy from "./Privacy";

class App extends Component {
    state = {
        pages: {
            index: 0,
            user: true,
            privacy: false,
            done: false
        },
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
        // Next page
        this.nextPage(e, "privacy", "done");
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

    nextPage = (e, currentPage, nextPage) => {
        // Stop browser from refreshing
        e.preventDefault();
        // Increase the index of the pages by 1. Then set the current page to false and the next page to true
        this.setState(prevState => {
            prevState.pages.index = prevState.pages.index + 1;
            prevState.pages[currentPage] = false;
            prevState.pages[nextPage] = true;
            return {
                pages: prevState.pages
            };
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Sign up</h1>
                <div className="form-area">
                    {/* Show Page Display */}
                    <PageDisplay pages={this.state.pages} />
                    <form className="form" onSubmit={this.handleSubmit}>
                        {/* Display "User" Page */}
                        {this.state.pages.user && (
                            <User
                                handleChange={this.handleChange}
                                nextPage={this.nextPage}
                            />
                        )}
                        {/* Display "Privacy" Page */}
                        {this.state.pages.privacy && (
                            <Privacy
                                handleChange={this.handleChange}
                                checkboxes={{
                                    primary: this.state.updatesPrimary,
                                    third: this.state.updatedThird
                                }}
                            />
                        )}
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
