import axios from "axios";

import {baseURL} from "../constants";

const apiService = axios.create({
        baseURL, headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmNkMGUwNzE0NWU5MmVjNDFlNGZkNmUzMzA0NDVlNSIsInN1YiI6IjYxMmZiZDQ5ZjYyMWIyMDA4OTQ0OTA0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZU7MrDN0Pl6hEMCHiXXTibBrW71hC5jisbxhF7oCloc'
        }
    }
);

export {
    apiService
}