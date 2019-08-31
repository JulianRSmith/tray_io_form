import React from "react";

function Privacy({ handleChange, checkboxes }) {
    return (
        <div className="page">
            <label>
                <input
                    name="updatesPrimary"
                    type="checkbox"
                    checked={checkboxes.primary}
                    onChange={handleChange}
                ></input>
                Receive updates about Tray.io products by email
            </label>
            <label>
                <input
                    name="updatedThird"
                    type="checkbox"
                    checked={checkboxes.third}
                    onChange={handleChange}
                ></input>
                Receive communication by email for other products created by the
                Tray.io team
            </label>
            <button>Submit</button>
        </div>
    );
}

export default Privacy;
