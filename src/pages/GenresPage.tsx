import React from 'react';

import {MoviesByGenreId} from "../components";
import css from "./PagesCss.module.css"


const GenresPage = () => {
    return (
        <div className={css.container}>
            <MoviesByGenreId/>
        </div>
    );
};

export {GenresPage};