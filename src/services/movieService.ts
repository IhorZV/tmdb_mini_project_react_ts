import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IPaginatedMoviesResponse} from "../interfaces";

const movieService = {

    getAll: (page = 1):IRes<IPaginatedMoviesResponse> =>
        apiService.get(urls.movies, {params: {page}}),
    getMovieById:(id:number):IRes<IPaginatedMoviesResponse>=>
        apiService.get(`${urls.movie}/${id}`)
}

export {
    movieService
}