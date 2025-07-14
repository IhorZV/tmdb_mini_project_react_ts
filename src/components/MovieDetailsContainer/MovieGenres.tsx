import React, {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import css from "./MovieGenres.module.css"

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