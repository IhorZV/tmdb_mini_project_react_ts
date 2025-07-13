import React, {FC, PropsWithChildren} from 'react';

import {IGenre} from "../../interfaces";
import css from "./Genre.module.css"
import {useLocation} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre: IGenre;
}

const Genre: FC<IProps> = ({genre}) => {
    const location = useLocation();
    const {name} = genre;
    return (
        <div className={css.genre}>
            {name}
        </div>
    );
};

export {Genre};