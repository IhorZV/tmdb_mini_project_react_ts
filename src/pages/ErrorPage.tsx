import React from 'react';

import css from "./ErrorPage.module.css"

const ErrorPage = () => {
    return (
        <div className={css.wrapper}>
            <h1> Page not found </h1>
            <img className={css.imgError}
                src="https://static.vecteezy.com/system/resources/previews/004/447/618/non_2x/design-layout-for-the-404-error-page-not-found-with-a-silhouette-of-a-cat-on-the-background-of-a-window-vector.jpg"
                alt="page-not-found"/>
        </div>
    );
};

export {ErrorPage};