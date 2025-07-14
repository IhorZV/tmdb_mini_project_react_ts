import {IRes} from "../types";
import {IGenreResponse, IPaginatedMoviesResponse} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {

    getAll: (): IRes<IGenreResponse> =>
        apiService.get(urls.allGenres),
    getAllByGenreId: (page = 1, id: number): IRes<IPaginatedMoviesResponse> =>
        apiService.get(`${urls.movies}?with_genres=${id}`, {params: {page}})
}

export {
    genreService
}