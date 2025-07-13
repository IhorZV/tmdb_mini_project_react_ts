import React, {FC, PropsWithChildren} from 'react';

import {YouTubeVideo} from "../YouTubeVideo/YouTubeVideo";
import {IMovieDetails} from "../../interfaces";
import css from "./MovieDetails.module.css"
import {MovieGenres} from "./MovieGenres";


interface IProps extends PropsWithChildren {
    movieDetails: IMovieDetails;
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {

    const {
        id, original_title, release_date, poster_path,
        runtime, budget, overview, tagline, genres
    } = movieDetails;

    return (
        <div>

            <div className={css.original_title}>{original_title}</div>

            <div className={css.wrapper_one}>
                <div className={css.poster}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                                                 alt={original_title}/></div>
                <div className={css.infoBox}>
                    <div>Release date: {release_date}</div>
                    <div>Budget: {budget === 0 ? "No information" : `${budget}$`}</div>
                    <div>Runtime: {runtime === 0 ? "No information" : `${runtime} m`} </div>
                    <div>Tagline: "{tagline === "" ? "No information" : `${tagline}`}"</div>
                    <div className={css.genres}>
                        Genres: {genres.map(genre => <MovieGenres key={genre.id} genre={genre}/>)}
                    </div>
                </div>
            </div>

            <div className={css.overview}>
                <div>{overview}</div>
            </div>
            <div className={css.Video}>
                <YouTubeVideo id={id}/>
            </div>
        </div>
    );
};

export {MovieDetails};