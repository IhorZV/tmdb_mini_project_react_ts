import React from 'react';

import {MovieApiDetails} from "../components";
import css from "./PagesCss.module.css"

const MovieDetailsPage = () => {
    return (
        <div className={css.container}>
            <MovieApiDetails/>
        </div>
    );
};

export {MovieDetailsPage};