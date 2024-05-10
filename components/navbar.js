"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(true);
    const [showMobileMenu, setShowMobileMenu] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
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

    // CSS variable para el menu mobile
    const CSSmenubtn = showMobileMenu ? "menu-btn" : "menu-btn active";
    const CSSmenunav = showMobileMenu ? "nav" : "nav active";
    const CSSnavLink = showMobileMenu ? "nav__list_item" : "nav__list_item active";

    // abrir menu burguer en dispositivos moviles
    const toggleMenu = () => {    
        setShowMobileMenu(!showMobileMenu);
    }
    // cerrar automaticamente menu burguer en dispositivos moviles
    const closeToggleMenu = () => {
        if (!showMobileMenu) { // si esta abierto
            setShowMobileMenu(true);
        }
    }

    return (
        <>
        <div className="topdiv">

            <div className="topdiv_bottom_content">
                <div className={showMenu ? "" : CSSmenubtn} onClick={ () => {toggleMenu();} }>
                    <span className={showMenu ? "" : "bar"}></span>
                    <span className={showMenu ? "" : "bar"}></span>
                    <span className={showMenu ? "" : "bar"}></span>
                </div>
            </div>
                <nav className={showMenu ? "" : CSSmenunav}>
                    <ul className={showMenu ? "menu desktop-menu" : CSSnavLink}>
                        <li className={showMenu ? "menu-item" : CSSnavLink} onClick={ () => {closeToggleMenu();} }>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={showMenu ? "menu-item" : CSSnavLink} onClick={ () => {closeToggleMenu();} }>
                            <Link href="/login">Login</Link>
                        </li>
                        <li className={showMenu ? "menu-item" : CSSnavLink} onClick={ () => {closeToggleMenu();} }>
                            <Link href="/tienda">Tienda</Link>
                        </li>
                        <li className={showMenu ? "menu-item" : CSSnavLink} onClick={ () => {closeToggleMenu();} }>
                            <Link href="/ejemplosHooks">Hooks React</Link>
                        </li>
                        <li className={showMenu ? "menu-item" : CSSnavLink} onClick={ () => {closeToggleMenu();} }>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={showMenu ? "menu-item" : CSSnavLink} onClick={ () => {closeToggleMenu();} }>
                            <Link href="/">*****</Link>
                        </li>
                        <li className={showMenu ? "menu-item" : CSSnavLink} onClick={ () => {closeToggleMenu();} }>
                            <Link href="/">*****</Link>
                        </li>
                        <li className={showMenu ? "menu-item" : CSSnavLink} onClick={ () => {closeToggleMenu();} }>
                            <Link href="/">*****</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}