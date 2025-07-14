import React, {FC, PropsWithChildren} from 'react';
import { useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from "./Genre.module.css"

interface IProps extends PropsWithChildren {
    genre: IGenre;
}

const Genre: FC<IProps> = ({genre}) => {

    const navigate = useNavigate();

    const {name,id} = genre;
    return (
        <div className={css.genre} onClick={()=>navigate(`/genre/${id}`) }>
            {name}
        </div>
    );
};

export {Genre};