import React from 'react';

import {Genres, MoviesList} from "../components";
import css from "./PagesCss.module.css"

const MoviesPage = () => {
    return (
        <div className={css.container}>
            <Genres/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};