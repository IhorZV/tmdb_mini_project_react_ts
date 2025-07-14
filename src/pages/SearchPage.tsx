import React from 'react';

import {SearchMovieList} from "../components";
import css from "./PagesCss.module.css"

const SearchPage = () => {
    return (
        <div className={css.container}>
            <SearchMovieList/>
        </div>
    );
};

export {SearchPage};