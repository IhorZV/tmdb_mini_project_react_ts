import React from 'react';

import css from "./Footer.module.css"
import {ThemeSwitch} from "../ThemeSwitch/ThemeSwitch";

const Footer = () => {
    return (
        <div className={css.footer}>
            <div>Work by https://github.com/IhorZV</div>
            <div className={css.thema}>Thema: <ThemeSwitch/></div>
        </div>
    );
};

export {Footer};