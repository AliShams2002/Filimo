import { App } from '../App.js'
import axios from "axios";

export class Search {
    constructor() {
        this._formElm = document.getElementById('from-fillter');
        this.selectBox = this._formElm.querySelectorAll('select');
        this._keywordElm = this._formElm.querySelector('#keyword-search');

        this._debounceTimer = null;

        this.handlerAdvanceFillter();
    }

    handlerAdvanceFillter() {
        this.selectBox.forEach((selectElm) => {
            selectElm.addEventListener('change', this._filterByAdvanced.bind(this))
        })

        this._keywordElm.addEventListener('keyup', () => {
            this._debounce(this._byKeywordFilter.bind(this));
        });

    }

    async _byKeywordFilter() {
        
        if (this._keywordElm.value.trim() === '') {
            this._filterByAdvanced();
            return;
        }

        const movies = await this._keywordFilterRequest();

        App.getMovieList().render(movies);
    }

    async _filterByAdvanced() {
        const movies = await this._requestByAdvancedFilter();

        App.getMovieList().render(movies);
    }

    async _keywordFilterRequest() {
        
        const {data: response} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${this._keywordElm.value}`);

        return response.results;
    }

    async _requestByAdvancedFilter() {

        const stringFilter = this._converParamsValue(this._setParamsValue());

        const {data: response} = await axios.get(`https://api.themoviedb.org/3/discover/movie?${stringFilter}`)

        return response.results;
    }

    _setParamsValue() {
        const params = [];

        this.selectBox.forEach((selectElm) => {
            
            if (selectElm.value.trim() === '') return;

            params.push({
                name: selectElm.name,
                value: selectElm.value
            });
            
        })

        return params;
    }

    _converParamsValue(params) {

        return params.map((param) => {
            return `${param.name}=${param.value}`;
        }).join("&");
    }

    _setTimer (callback, delay = 500) {
        this._debounceTimer = setTimeout(() => {
            callback();
        }, delay);
    }

    _debounce(callback, delay) {
        clearTimeout(this._debounceTimer);
        this._setTimer(callback, delay);
    }

}