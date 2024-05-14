import { Render } from './Render.js';
import { movieSplide } from "../Mudal/sliders.js";
import { Menu } from "../Mudal/menu.js";

export class MoviePage {
    constructor() {
        this.render = new Render();
        this.Sliders = new movieSplide();
        this.menu = new Menu();
    }
}