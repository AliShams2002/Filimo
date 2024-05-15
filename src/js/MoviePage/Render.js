import axios from "axios";


export class Render{
    constructor() {
        this.movieElm = document.getElementById('movie');
        this.genresList = document.getElementById('genres');
        this.actorsList = document.getElementById('actors');
        this.trailer = document.getElementById('trailer');
        this.listWraper = document.getElementById('movies-list');
        this.template = document.getElementById('movie-list-item');

        this._getLocalStorage();
    }

    async fetch(id) {
        
        const {data: responseRender} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
        const {data: responseSimilar} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`);
        const {data: responseActors} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`);
        const {data: responseVideo} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);

        this.render(responseRender);
        this.similarRender(responseSimilar.results);
        this.renderActors(responseActors.cast);
        this.rendervideo(responseVideo.results);
        
    }

    render(movie) {
        this.movieElm.querySelector("#video").poster = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
        this.movieElm.querySelector('#img').src = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
        this.trailer.poster = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
        this.movieElm.querySelector('#title').innerHTML = movie.title;
        this.movieElm.querySelector('#year').innerHTML = movie.release_date.split('-',1);
        this.movieElm.querySelector('#country').innerHTML = movie.origin_country;
        this.movieElm.querySelector('#runtime').innerHTML = `${movie.runtime} minute`;
        this.movieElm.querySelector('#rate').innerHTML = movie.vote_average.toFixed(1);
        this.movieElm.querySelector('#description').innerHTML = movie.overview;


        movie.genres.forEach((item) => {
            const spn = document.createElement('span');

            spn.id = item.id;
            spn.innerText = `${item.name}, `

            this.genresList.append(spn);
        })
    }

    similarRender(movies) {
        movies.forEach((movie) => {
            const movieElm = document.importNode(this.template.content, true);

            movieElm.querySelector('li').value = movie.id;
            movieElm.querySelector('.media-box-title').innerText = movie.title;
            movieElm.querySelector('.rate').innerHTML = `<i class="ri-star-fill"></i> ${movie.vote_average.toFixed(1)}`;
            movieElm.querySelector('.media-thumb').src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

            this.listWraper.append(movieElm);
            
        })

        const items = document.querySelectorAll('.item');

        for (let index = 0; index < items.length; index++) {
            items[index].addEventListener('click', () => {
                localStorage.setItem('key', items[index].value);
                window.location.href = './moviePage.html';
            })
        }
    }

    renderActors(actors) {
        for (let index = 0; index < 5; index++) {
            const actor = document.createElement('li');

            actor.innerText = `${actors[index].name},`;

            this.actorsList.append(actor);
        }
    }

    rendervideo(key) {
        key.forEach((item) => {
            if(item.type === "Trailer" && item.size === 1080) {
                this.trailer.src = `https://www.youtube.com/embed/${item.key}`
            }
        })
        
    }

    _getLocalStorage() {
        const id = localStorage.getItem('key');

        this.fetch(id);
    }


}