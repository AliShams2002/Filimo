import axios from "axios";

export class ArchiveRender{
    constructor() {
        this.listWraper = document.getElementById('list-wraper');
        this.template = document.querySelector('.movie-item-1');

        this.Items = [];

        this.fetch();
        this.movieHandler();
    }

    async fetch() {
        const {data: trending} = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US');

        this.render(trending.results);
    }

    render(movies) {
        this.listWraper.innerHTML = '';
        movies.forEach((movie) => {
            const movieElm = document.importNode(this.template.content, true);
            
            movieElm.querySelector('li').value = movie.id;
            movieElm.querySelector('.media-box-title').innerText = movie.title;
            movieElm.querySelector('.rate').innerHTML = `<i class="ri-star-fill"></i> ${movie.vote_average.toFixed(1)}`;
            movieElm.querySelector('.media-thumb').src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
            this.listWraper.append(movieElm);
        })

        this.movieHandler();
    }

    movieHandler() {
        const items = document.querySelectorAll('.item');

        items.forEach((item) => {
            item.addEventListener('click', () => {
                this.Items.push(item.value);

                const id = localStorage.getItem('id');

                this.Items.push(id);

                localStorage.setItem('id', this.Items);
                localStorage.setItem('key', item.value);
                window.location.href = './moviePage.html';
            })
        })
    }

}