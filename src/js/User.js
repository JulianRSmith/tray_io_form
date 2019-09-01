import React, { Component } from "react";
import "../css/User.css";

class InputField extends Component {
    state = {
        clicked: false
    };

    // Update the state to display the error message once the field has changed value
    showError = () => {
        this.setState({ clicked: true });
    };

    render() {
        // Streamline the props variables
        const { name, type, text, required, errors, change } = this.props;
        return (
            <div className="input-field">
                <label>
                    {text}
                    {required && <span className="required">*</span>}
                    <input
                        name={name}
                        type={type}
                        required={required}
                        onChange={e => {
                            this.showError();
                            change(e);
                        }}
                        noValidate
                    ></input>
                    <div className="error-area">
                        {errors && (
                            <div
                                className={`error${
                                    this.state.clicked && !errors.valid
                                        ? " show"
                                        : ""
                                }`}
                            >
                                {errors.text}
                            </div>
                        )}
                    </div>
                </label>
            </div>
        );
    }
}

function User({ handleChange, nextPage, errors, noErrors }) {
    // Generate an array of all the required inputs
    const inputsData = [
        {
            name: "name",
            type: "text",
            text: "Name",
            required: true,
            error: {
                valid: errors.name,
                text: "Please enter your name"
            }
        },
        { name: "role", type: "text", text: "Role", required: false },
        {
            name: "email",
            type: "email",
            text: "Email",
            required: true,
            error: {
                valid: errors.email,
                text: "Please enter a valid email"
            }
        },
        {
            name: "password",
            type: "password",
            text: "Password",
            required: true,
            error: {
                valid: errors.password,
                text:
                    "Password must be at least 10 characters long, have at least 1 number, and must have at least 1 capital and lowercase letter"
            }
        }
    ];
    // Map over the array and for each item in the array create an input
    const inputs = inputsData.map((input, i) => (
        <InputField
            key={i}
            name={input.name}
            type={input.type}
            text={input.text}
            required={input.required}
            errors={input.error}
            change={handleChange}
        />
    ));
    return (
        <div className="page user">
            {inputs}
            <div className="page-btn-area">
                <button
                    className={`page-btn${noErrors ? " valid" : ""}`}
                    onClick={e => noErrors && nextPage(e, "user", "privacy")}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default User;
