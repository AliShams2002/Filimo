import { Filimo } from "./Mudal/filimo.js";
import axios from "axios";

export class App {
    static init() {
        axios.defaults.headers.common['accept'] = 'application/json';
        axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjQ3ZDkzYjMyMzkzZmNmZWM3YWVlMGJmYjc3ZTkwNSIsInN1YiI6IjY1YjRkYmVmZjY1OTZmMDE4NGZlNWQ4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hBMBs1TF6vaSQYeWLiMwWzBJvbZAMjCLfii1hSLg5Yw';

        this.filimo = new Filimo();
    }

    static getMovieList() {
        return this.filimo.archiveRender;
    }
}

App.init();