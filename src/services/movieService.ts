import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovieDetails, IPaginatedMoviesResponse, IVideoResponse} from "../interfaces";

const movieService = {

    getAll: (page = 1): IRes<IPaginatedMoviesResponse> =>
        apiService.get(urls.movies, {params: {page}}),

    getMovieById: (id: number): IRes<IMovieDetails> =>
        apiService.get(`${urls.movie}/${id}`),

    getVideoById: (id: number): IRes<IVideoResponse> =>
        apiService.get(`${urls.movie}/${id}/videos`)
}

export {
    movieService
}