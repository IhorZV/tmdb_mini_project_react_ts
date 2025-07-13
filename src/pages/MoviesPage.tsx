import React from 'react';

import {Genres, MoviesList} from "../components";

const MoviesPage = () => {
    return (
        <div>
            <Genres/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};