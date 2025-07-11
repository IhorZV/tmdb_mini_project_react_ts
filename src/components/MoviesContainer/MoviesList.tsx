import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {IPaginatedMoviesResponse} from "../../interfaces";
import {movieService} from "../../services";
import {MoviesPoster} from "./MoviesPoster";
import css from './MoviesList.module.css'

interface IProps extends PropsWithChildren {

}


const MoviesList: FC<IProps> = () => {
    const [movieList, setMovieList] = useState<IPaginatedMoviesResponse | null>(null);

    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    useEffect(() => {

            movieService.getAll(+page).then(({data}) => setMovieList(data))

    }, [page]);
    return (
        <div className={css.wrapper_movie}>
            {movieList && movieList.results.map(moviePoster => <MoviesPoster key={moviePoster.id}
                                                                             moviePoster={moviePoster}/>)}
        </div>
    );
};

export {MoviesList};