import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IPaginatedMoviesResponse} from "../../interfaces";
import {useParams, useSearchParams} from "react-router-dom";
import css from "../MoviesContainer/MoviesList.module.css";
import {MoviesPoster} from "../MoviesContainer/MoviesPoster";
import {PaginationContainer} from "../PaginationContainer/PaginationContainer";
import {genreService} from "../../services/genreService";

interface IProps extends PropsWithChildren {

}

const MoviesByGenreId: FC<IProps> = () => {

    const [movieList, setMovieList] = useState<IPaginatedMoviesResponse | null>(null);
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');
    const {id} = useParams();

    useEffect(() => {

        genreService.getAllByGenreId(+page,+id).then(({data}) => setMovieList(data))

    }, [page, id]);
    return (
        <div>
            <div className={css.wrapper_movie}>
                {movieList && movieList.results.map(moviePoster => <MoviesPoster
                    key={moviePoster.id} moviePoster={moviePoster}/>)}
            </div>
            <div className={css.PaginationContainer}>
                <PaginationContainer/>
            </div>
        </div>

    );
};

export {MoviesByGenreId};