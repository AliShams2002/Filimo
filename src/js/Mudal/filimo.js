import { Movies } from "./render.js";
import { Sliders } from "./sliders.js";
import { Menu } from "./menu.js";
import { ArchiveRender } from "./archivePage.js";
import { GenersList } from "./GenreList.js";
import YearsList from "./YearsList.js";
import { Search } from "./Search.js";



export class Filimo {
    constructor() {
        this.movies = new Movies();
        this.menu = new Menu();
        this.sliders = new Sliders();
        this.archiveRender = new ArchiveRender();
        this.genersList = new GenersList();
        this.yearsList = new YearsList();
        this.search = new Search();

    }
}




