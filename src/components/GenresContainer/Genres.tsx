import React, {useEffect, useState} from 'react';

import {IGenre} from "../../interfaces";
import {genreService} from "../../services/genreService";
import {Genre} from "./Genre";
import css from "./Genres.module.css"

const Genres = () => {

    const [genres, setGenres] = useState<IGenre[] | null>(null)

    useEffect(() => {
        genreService.getAll().then(({data}) => setGenres(data.genres))
    }, [])

    return (
        <div className={css.genresList}>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};