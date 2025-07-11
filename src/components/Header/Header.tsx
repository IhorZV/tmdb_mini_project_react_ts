import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"


const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to="/">Home</NavLink>
        </div>
    );
};

export {Header};