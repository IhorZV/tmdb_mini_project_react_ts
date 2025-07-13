import React, {FC, PropsWithChildren} from 'react';

import {YouTubeVideo} from "../YouTubeVideo/YouTubeVideo";
import {IMovieDetails} from "../../interfaces";


interface IProps extends PropsWithChildren {
    movieDetails: IMovieDetails;
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {

   const {id, original_title, release_date, poster_path, title, backdrop_path} = movieDetails;

    return (
        <div>

            <div>{original_title}</div>

            <div><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title}/></div>

            <div>id - {id}</div>
            <div>original_title - {original_title}</div>
            <div>release_date - {release_date}</div>
            <div>poster_path - {poster_path}</div>
            <div>title - {title}</div>

            <YouTubeVideo id={id}/>

        </div>
    );
};

export {MovieDetails};