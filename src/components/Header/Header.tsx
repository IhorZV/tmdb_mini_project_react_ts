import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
import {SearchForm} from "../SearchForm/SearchForm";


const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to="/">Home</NavLink>
            <SearchForm/>
        </div>
    );
};

export {Header};