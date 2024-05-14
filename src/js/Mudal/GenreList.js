import axios from "axios";

export class GenersList {
    constructor() {
        this.genersList = document.getElementById('filter-genres');

        this.loadGenres();
    }

    fetch() {
        return axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en');
    }

    async loadGenres() {
        const {data: response} = await this.fetch();

        this.render(response.genres);
    }

    render(genres) {
        genres.forEach((genre) => {
            const filterElm = document.createElement('option');

            filterElm.innerHTML = genre.name;
            filterElm.value = genre.id;

            this.genersList.append(filterElm);
        })

    }   
}