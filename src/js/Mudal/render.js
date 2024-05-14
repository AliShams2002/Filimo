import axios from "axios";


export class Movies {
    constructor() {
        this.imgCoverElm = document.querySelectorAll('#img-cover');
        this.smallImg = document.querySelectorAll('#sm-img');
        this.movieList = document.querySelectorAll('#movies-list');
        this.template1 = document.querySelector('.movie-item-1');
        this.template2 = document.querySelector('.movie-item-2');
        this.bestMovie = document.querySelector('.best-movie');

        this.fetch();
    }

    async fetch() {
        const {data: cover} = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
        const {data: trending} = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US');
        const {data: popular} = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
        const {data: nowPlaying} = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1');
        const {data: TopRated} = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1');
        

        this.renderCover(cover.results);
        this.renderTrending(trending.results);
        this.renderPoular(popular.results);
        this.renderNowPlaying(nowPlaying.results);
        this.renderTopRated(TopRated.results);
    }

    renderTrending(movies) {

        movies.forEach((movie) => {
            const movieElm = document.importNode(this.template1.content, true);

            movieElm.querySelector('li').value = movie.id;
            movieElm.querySelector('.media-box-title').innerText = movie.title;
            movieElm.querySelector('.rate').innerHTML = `<i class="ri-star-fill"></i> ${movie.vote_average.toFixed(1)}`;
            movieElm.querySelector('.media-thumb').src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

            this.movieList[0].append(movieElm);
        })

        const items = document.querySelectorAll('.item');

        for (let index = 0; index < items.length; index++) {
            items[index].addEventListener('click', () => {
                localStorage.setItem('key', items[index].value);
                window.location.href = './moviePage.html';
            })
        }

    }

    renderCover(movies) {

        for (let index = 0; index < 3; index++) {
            this.imgCoverElm[index].value = movies[index].id;
            this.imgCoverElm[index].querySelector('#img').src = `https://image.tmdb.org/t/p/original/${movies[index].backdrop_path}`;
            this.smallImg[index].src = `https://image.tmdb.org/t/p/original/${movies[index].backdrop_path}`;
            this.imgCoverElm[index].querySelector('#poster-title').innerHTML = movies[index].title;
            this.imgCoverElm[index].querySelector('#poster-rate').innerHTML = `<i class="ri-star-fill"></i> ${movies[index].vote_average.toFixed(1)}`;


            this.imgCoverElm[index].addEventListener('click', () => {
                localStorage.setItem('key', this.imgCoverElm[index].value);
                window.location.href = './moviePage.html';
            })
        }

    }

    renderPoular(movies) {

        movies.forEach((movie) => {
            const movieElm = document.importNode(this.template2.content, true);

            movieElm.querySelector('li').value = movie.id;
            movieElm.querySelector('.media-box-title').innerText = movie.title;
            movieElm.querySelector('.rate').innerHTML = `<i class="ri-star-fill"></i> ${movie.vote_average.toFixed(1)}`;
            movieElm.querySelector('.media-thumb').src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

            this.movieList[1].append(movieElm);
            
        })

        this.popularMovie(movies[0]);

        const items = document.querySelectorAll('.item');

        for (let index = 0; index < items.length; index++) {
            items[index].addEventListener('click', () => {
                localStorage.setItem('key', items[index].value);
                window.location.href = './moviePage.html';
            })
        }
    }

    renderTopRated(movies) {
        movies.forEach((movie) => {
            const movieElm = document.importNode(this.template1.content, true);

            movieElm.querySelector('li').value = movie.id;
            movieElm.querySelector('.media-box-title').innerText = movie.title;
            movieElm.querySelector('.rate').innerHTML = `<i class="ri-star-fill"></i> ${movie.vote_average.toFixed(1)}`;
            movieElm.querySelector('.media-thumb').src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

            this.movieList[2].append(movieElm);
            
        })

        const items = document.querySelectorAll('.item');

        for (let index = 0; index < items.length; index++) {
            items[index].addEventListener('click', () => {
                localStorage.setItem('key', items[index].value);
                window.location.href = './moviePage.html';
            })
        }
    }


    renderNowPlaying(movies) {
        movies.forEach((movie) => {
            const movieElm = document.importNode(this.template2.content, true);

            movieElm.querySelector('li').value = movie.id;
            movieElm.querySelector('.media-box-title').innerText = movie.title;
            movieElm.querySelector('.rate').innerHTML = `<i class="ri-star-fill"></i> ${movie.vote_average.toFixed(1)}`;
            movieElm.querySelector('.media-thumb').src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

            this.movieList[3].append(movieElm);
            
        })

        const items = document.querySelectorAll('.item');

        for (let index = 0; index < items.length; index++) {
            items[index].addEventListener('click', () => {
                localStorage.setItem('key', items[index].value);
                window.location.href = './moviePage.html';
            })
        }
    }

    popularMovie(movie) {
        this.bestMovie.querySelector('.img').id = movie.id;
        this.bestMovie.querySelector('.cover').src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
        this.bestMovie.querySelector('.img').src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
        this.bestMovie.querySelector('.title').innerText = movie.title;
        this.bestMovie.querySelector('.description').innerText = movie.overview;
        this.bestMovie.querySelector('.rate').innerHTML = `<i class="ri-star-fill"></i> ${movie.vote_average.toFixed(1)}`;

        this.bestMovie.querySelector('.img').addEventListener('click', (e) => {
            localStorage.setItem('key', e.target.id);
            window.location.href = './moviePage.html';
        })
    }
    

    

}