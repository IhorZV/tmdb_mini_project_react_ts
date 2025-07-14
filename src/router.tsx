import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {ErrorPage, GenresPage, MovieDetailsPage, MoviesPage, SearchPage} from "./pages";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <ErrorPage/>, children: [

            {index: true, element: <Navigate to={"movies"}/>},
            {
                path: 'movies', element: <MoviesPage/>,
            },
            {
                path: "movies/:id", element: <MovieDetailsPage/>
            },
            {
                path: "genre/:id", element: <GenresPage/>
            },
            {
                path: "search/:name", element:<SearchPage/>
            }
        ]
    }
]);

export {router}