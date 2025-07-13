import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {movieService} from "../../services";
import {IMovieDetails} from "../../interfaces/IMovieDetails";
import {MovieDetails} from "./MovieDetails";

const MovieApiDetails = () => {

    const {id} = useParams();

    const [movieDetails, setMovieDetails] = useState<IMovieDetails>(null);


    useEffect(() => {

        movieService.getMovieById(+id).then(({data}) => setMovieDetails(data));

    }, [id]);

    return (
        <div>
            {movieDetails && <MovieDetails movieDetails={movieDetails}/>}
        </div>
    );
};

export {MovieApiDetails};