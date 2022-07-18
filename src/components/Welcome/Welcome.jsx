import React from "react";
import { Link } from "react-router-dom";
import './welcome.css';


export default function Welcome() {
    return (
            <div className="welcomeBox">
                <Link to='/list'>Go to list</Link>
            </div>
    )
}