import React, { useState } from "react";
import './styles.css';
import CartWidget from "./CartWidget";
import Input from "./input";

const NavBar = ({ logo }) => {
    const [search, setSearch] = useState('');
    const [active, setActive] = useState(false);



    const onChange = (event) => {
        const value = event.target.value;
        setSearch(value);
    }


    const onFocus = () => {
        setActive(true);
    }
    const onBlur = () => {
        setActive(false);
    }

    const inputClass = `container ${active ? 'active' : ''}`

    return (
        <header className="header">
            <a href="/" className="logo">{logo}</a>
            <input type="checkbox" className="side-menu" id="side-menu"></input>
            <label className="hamb" htmlFor="side-menu">
                <span className="hamb-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Plantas</a></li>
                    <li><a href="#">Descubre</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><CartWidget /></li>
                    <li><Input
                        placeholder='¿Qué estás buscando?'
                        id='search'
                        required
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className={inputClass}
                    /></li>
                </ul>
            </nav>
        </header>
    )
}


export default NavBar;