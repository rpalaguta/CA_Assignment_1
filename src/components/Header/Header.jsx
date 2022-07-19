import React from "react";
import "./header.css"
import { Link } from "react-router-dom";
import routeCollection from '../../collections/routeCollection';


export default function Header() {
    return (
        <div className="Navigation">
            {
            routeCollection.map(route => (
                    <div className="navElement"><Link to={route.path}>{route.name}</Link></div>
                ))
            }
        </div>
    )
}