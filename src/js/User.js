import React from "react";
import "../css/User.css";

function InputField({ name, type, text, required, change }) {
    return (
        <div className="input-field">
            <label>
                {text}
                {required && <span className="required">*</span>}
                <input
                    name={name}
                    type={type}
                    required={required}
                    onChange={change}
                ></input>
            </label>
        </div>
    );
}

function User({ handleChange, nextPage }) {
    // Generate an array of all the required inputs
    const inputsData = [
        { name: "name", type: "text", text: "Name", required: true },
        { name: "role", type: "text", text: "Role", required: false },
        { name: "email", type: "email", text: "Email", required: true },
        { name: "password", type: "password", text: "Password", required: true }
    ];
    // Map over the array and for each item in the array create an input
    const inputs = inputsData.map((input, i) => (
        <InputField
            key={i}
            name={input.name}
            type={input.type}
            text={input.text}
            required={input.required}
            change={handleChange}
        />
    ));
    return (
        <div className="page user">
            {inputs}
            <div className="page-btn-area">
                <button
                    className="page-btn"
                    onClick={e => nextPage(e, "user", "privacy")}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default User;
