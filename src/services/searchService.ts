import {IRes} from "../types";
import {IPaginatedMoviesResponse} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const searchService = {

    getAllBySearch: (page = 1, name: string): IRes<IPaginatedMoviesResponse> =>
        apiService.get(`${urls.search}?query=${name}`, {params: {page}})
}

export {
    searchService
}