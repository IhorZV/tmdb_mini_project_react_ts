import React, {FC, PropsWithChildren, useContext} from 'react';

import {IMovie} from "../../interfaces";
import css from './MoviesPoster.module.css'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {StarsRating} from "../StarsRating/StarsRating";
import {Context} from "../../hoc";

interface IProps extends PropsWithChildren {
    moviePoster: IMovie;
}


const MoviesPoster: FC<IProps> = ({moviePoster}) => {

    const [Thema] = useContext(Context);

    const {id, original_title, release_date, poster_path, vote_average} = moviePoster;

    const navigate = useNavigate();

    return (
        <div className={css.wrapper_cardMovie}>

            <div onClick={()=>navigate(`/movies/${id}`)}>
                    <img className={css.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster"/>
            </div>

            <div className={Thema ? css.name : css.nameDark } onClick={()=>navigate(`/movies/${id}`)}>
                    {original_title}
            </div>

            <div className={Thema ? css.release_date : css.release_dateDark}>
                Date: {release_date}
            </div>
            <div className={css.StarsRating}><StarsRating vote_average={vote_average}/>  {vote_average}</div>
        </div>
    );
};

export {MoviesPoster};