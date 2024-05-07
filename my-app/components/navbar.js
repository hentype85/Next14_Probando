"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShowMenu(window.innerWidth > 600);
        };
        window.addEventListener('resize', handleResize);

    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
        <div className={showMenu ? "menu desktop-menu" : "menu-btn"}>
            <span className={showMenu ? "" : "bar"}></span>
            <span className={showMenu ? "" : "bar"}></span>
            <span className={showMenu ? "" : "bar"}></span>
        </div>
        <nav>
            <ul className={showMenu ? "menu desktop-menu" : ""}>
                <li className={showMenu ? "menu-item" : ""}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={showMenu ? "menu-item" : ""}>
                    <Link href="/login">
                        Login
                    </Link>
                </li>
                <li className={showMenu ? "menu-item" : ""}>
                    <Link href="/tienda">
                        Tienda
                    </Link>
                </li>
                <li className={showMenu ? "menu-item" : ""}>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li className="menu-item">
                    <Link href="/ejemplosHooks">
                        Ejemplos Hooks
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    );
}