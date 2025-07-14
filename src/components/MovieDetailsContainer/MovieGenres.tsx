import React, {FC, PropsWithChildren} from 'react';

import css from "./MovieGenres.module.css"
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre: {
        id: number;
        name: string;
    }
}

const MovieGenres: FC<IProps> = ({genre}) => {
    const navigate = useNavigate();
    const {name, id} = genre;
    return (
        <div className={css.genre} onClick={()=>navigate(`/genre/${id}`)} >
            <div>
                {name}
            </div>
        </div>
    );
};

export {MovieGenres};