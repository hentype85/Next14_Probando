"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 600) {
                setShowMenu(true);
            } else {
                setShowMenu(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // ejecutar al cargar la pagina

        return () => { // limpiar el evento
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    // manipular DOM
    // abrir menu burguer en dispositivos moviles
    const toggleMenu = () => {
        let menuBtn = document.querySelector('.menu-btn');
        let menu = document.querySelector('.nav');
    
        menuBtn.addEventListener('click', function() {
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }

    // cerrar automaticamente menu burguer en dispositivos moviles
    const closeToggleMenu = () => {
        let navLink = document.querySelectorAll('.nav__list_item');
        let menuBtn = document.querySelector('.menu-btn');
        let menu = document.querySelector('.nav');
    
        navLink.forEach( (n) => {
            n.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }
    // fin manipular DOM

    return (
        <>
        <div className={showMenu ? "" : "menu-btn"} onClick={ () => {toggleMenu();  closeToggleMenu();} }>
            <span className={showMenu ? "" : "bar"}></span>
            <span className={showMenu ? "" : "bar"}></span>
            <span className={showMenu ? "" : "bar"}></span>
        </div>
        <div class={showMenu ? "" : "header__nav"}>
            <nav class={showMenu ? "" : "nav"}>
                <ul className={showMenu ? "menu desktop-menu" : "nav__list"}>
                    <li className={showMenu ? "menu-item" : "nav__list_item"}>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className={showMenu ? "menu-item" : "nav__list_item"}>
                        <Link href="/login">
                            Login
                        </Link>
                    </li>
                    <li className={showMenu ? "menu-item" : "nav__list_item"}>
                        <Link href="/tienda">
                            Tienda
                        </Link>
                    </li>
                    <li className={showMenu ? "menu-item" : "nav__list_item"}>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li className={showMenu ? "menu-item" : "nav__list_item"}>
                        <Link href="/ejemplosHooks">
                            Ejemplos Hooks
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    );
}