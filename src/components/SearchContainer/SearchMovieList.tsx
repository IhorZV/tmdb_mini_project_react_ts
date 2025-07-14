import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import {IPaginatedMoviesResponse} from "../../interfaces";
import css from "../MoviesContainer/MoviesList.module.css";
import {searchService} from "../../services/searchService";
import { MoviesPoster } from '../MoviesContainer/MoviesPoster';
import {PaginationContainer} from "../PaginationContainer/PaginationContainer";

interface IProps extends PropsWithChildren {

}

const SearchMovieList: FC<IProps> = () => {

    const [movieList, setMovieList] = useState<IPaginatedMoviesResponse | null>(null);
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    const {name} = useParams();

    useEffect(() => {

        searchService.getAllBySearch(+page,name).then(({data}) => setMovieList(data))

    }, [page, name]);
    return (
        <div>
            <div className={css.wrapper_movie}>
                {movieList && movieList.results.map(moviePoster => <MoviesPoster
                    key={moviePoster.id} moviePoster={moviePoster}/>)}
            </div>
            <div className={css.PaginationContainer}>
                {movieList && <PaginationContainer movieList={movieList}/>}
            </div>
        </div>

    );
};

export {SearchMovieList};