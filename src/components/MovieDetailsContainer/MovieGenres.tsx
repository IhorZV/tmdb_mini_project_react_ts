import React, {FC, PropsWithChildren} from 'react';

import css from "./MovieGenres.module.css"

interface IProps extends PropsWithChildren {
    genre: {
        id: number;
        name: string;
    }
}

const MovieGenres: FC<IProps> = ({genre}) => {
    const {name} = genre;
    return (
        <div className={css.genre}>
            <div>
                {name}
            </div>
        </div>
    );
};

export {MovieGenres};