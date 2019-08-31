import React from "react";
import "../css/PageDisplay.css";

function PageDisplay({ pages }) {
    // Calculate the position of the active track by dividing by the number of pages then multiplying by the current page index
    const trackPosCalc = (100 / 3) * pages.index;
    // Update the track's CSS variable with this calculation
    document.documentElement.style.setProperty(
        "--trackPos",
        trackPosCalc + "%"
    );
    return (
        <div className="page-display">
            <div className={`page-display-item${pages.user ? " active" : ""}`}>
                User
            </div>
            <div
                className={`page-display-item${pages.privacy ? " active" : ""}`}
            >
                Privacy
            </div>
            <div className={`page-display-item${pages.done ? " active" : ""}`}>
                Done
            </div>
            <div className="page-display-track"></div>
        </div>
    );
}

export default PageDisplay;
