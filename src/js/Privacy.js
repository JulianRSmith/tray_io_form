import React from "react";
import "../css/Privacy.css";

function Checkbox({ name, status, text, change }) {
    return (
        <div className="input-field">
            <label>
                <input
                    name={name}
                    type="checkbox"
                    checked={status}
                    onChange={change}
                ></input>
                <span className="check"></span>
                <span className="text">{text}</span>
            </label>
        </div>
    );
}

function Privacy({ handleChange, checkboxes }) {
    // Create checkboxes array
    const checkData = [
        {
            name: "updatesPrimary",
            status: checkboxes.primary,
            text: "Receive updates about Tray.io products by email"
        },
        {
            name: "updatedThird",
            status: checkboxes.third,
            text:
                "Receive communication by email for other products created by the Tray.io team"
        }
    ];
    // Map over checboxes array and for each item create a checkbox
    const checkboxList = checkData.map((checkbox, i) => (
        <Checkbox
            key={i}
            name={checkbox.name}
            status={checkbox.status}
            text={checkbox.text}
            change={handleChange}
        />
    ));
    return (
        <div className="page privacy">
            <div className="page-inputs">{checkboxList}</div>
            <div className="page-btn-area">
                <button className="page-btn valid">Submit</button>
            </div>
        </div>
    );
}

export default Privacy;
