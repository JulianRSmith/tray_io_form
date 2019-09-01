import React from "react";
import "../css/Done.css";

function Done() {
    return (
        <div className="page done">
            <h2 className="title">All done!</h2>
            <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
            >
                <path
                    d="M30 45.5L49 64L93 20.5"
                    stroke="#0E66F9"
                    strokeWidth="8"
                    className="ready-1"
                ></path>
                <path
                    d="M79.5 18C74.8333 13.8333 67.5 6 49 6C29 6 6 22 6 49.5C6 74 26 93 49 93C67.5 93 96.5 79 92.5 42"
                    stroke="#0E66F9"
                    strokeWidth="8"
                    className="ready-2"
                ></path>
            </svg>

            <p className="text">
                Please verify your email address, you should have recieved an
                email from us already!
            </p>
        </div>
    );
}

export default Done;
