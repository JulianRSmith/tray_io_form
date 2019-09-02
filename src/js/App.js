import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import "../css/App.css";

import PageDisplay from "./PageDisplay";
import User from "./User";
import Privacy from "./Privacy";
import Done from "./Done";

class App extends Component {
    state = {
        pages: {
            index: 0,
            user: true,
            privacy: false,
            done: false
        },
        doneReady: false,
        name: "",
        role: "",
        email: "",
        password: "",
        updatesPrimary: true,
        updatedThird: false,
        inputsValid: {
            name: false,
            email: false,
            password: false
        }
    };

    // Function which determins if the form is valid or not
    formValid = () =>
        this.state.inputsValid.name &&
        this.state.inputsValid.email &&
        this.state.inputsValid.password;

    // Function which validates the required inputs
    validateInput = (name, value) => {
        let errors = this.state.inputsValid;
        // RFC 2822 email validation -  matches "99.99% of all email addresses in actual use today.". Source = https://www.regular-expressions.info/email.html
        const validEmail = RegExp(
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        );
        // If password has 1 number, 1 lowercase letter, 1 uppercase letter
        const validPassword = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/g);

        switch (name) {
            case "name":
                errors.name = value.length > 0;
                break;
            case "email":
                errors.email = validEmail.test(value);
                break;
            case "password":
                errors.password = value.length > 9 && validPassword.test(value);
                break;
            default:
                break;
        }
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

        // Validation
        this.validateInput(name, value);

        // Update the corresponding input's state with the new value
        this.setState({
            [name]: value
        });
    };

    // Calls when the form is submited
    handleSubmit = e => {
        // Prevent page from reloading
        e.preventDefault();
        // Is the form valid?
        if (this.formValid()) {
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
        }
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
                    <form
                        className="form"
                        onSubmit={this.handleSubmit}
                        noValidate
                    >
                        {/* Display "User" Page */}
                        <CSSTransition
                            in={this.state.pages.user}
                            timeout={600}
                            unmountOnExit
                        >
                            <User
                                handleChange={this.handleChange}
                                nextPage={this.nextPage}
                                errors={this.state.inputsValid}
                                noErrors={this.formValid()}
                            />
                        </CSSTransition>
                        {/* Display "Privacy" Page */}
                        <CSSTransition
                            in={this.state.pages.privacy}
                            timeout={600}
                            unmountOnExit
                        >
                            <Privacy
                                handleChange={this.handleChange}
                                checkboxes={{
                                    primary: this.state.updatesPrimary,
                                    third: this.state.updatedThird
                                }}
                            />
                        </CSSTransition>
                        {/* Show done page */}
                        <CSSTransition
                            in={this.state.pages.done}
                            timeout={600}
                            unmountOnExit
                            onEntered={() => this.setState({ doneReady: true })}
                        >
                            <Done isShown={this.state.doneReady} />
                        </CSSTransition>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
