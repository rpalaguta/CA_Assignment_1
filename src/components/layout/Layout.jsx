import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <Outlet />
        </div>
    )
}