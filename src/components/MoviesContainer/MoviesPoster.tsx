import React, {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces";
import css from './MoviesPoster.module.css'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {StarsRating} from "../StarsRating/StarsRating";

interface IProps extends PropsWithChildren {
    moviePoster: IMovie;
}


const MoviesPoster: FC<IProps> = ({moviePoster}) => {

    const {id, original_title, release_date, poster_path, vote_average} = moviePoster;

    const navigate = useNavigate();

    return (
        <div className={css.wrapper_cardMovie}>

            <div onClick={()=>navigate(`/movies/${id}`)}>
                {/*<NavLink to={`${id}`}>*/}
                    <img className={css.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster"/>
                {/*</NavLink>*/}
            </div>

            <div className={css.name} onClick={()=>navigate(`/movies/${id}`)}>
                {/*<NavLink to={`${id}`}>*/}
                    {original_title}
                {/*</NavLink>*/}
            </div>

            <div className={css.release_date}>
                Date: {release_date}
            </div>
            <div className={css.StarsRating}><StarsRating vote_average={vote_average}/>  {vote_average}</div>
        </div>
    );
};

export {MoviesPoster};