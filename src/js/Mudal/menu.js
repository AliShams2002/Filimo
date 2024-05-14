

export class Menu{
    constructor() {
        this.menuelm = document.getElementById('menu');
        this.menubtn = document.getElementById('menu-btn');
        this.menulist = document.getElementById('menu-list-item');
        this.close = document.getElementById('close');

        this.handler();
    }

    handler() {
        this.menubtn.addEventListener('click', (event) => {
            event.preventDefault();
            this.replaces();
        })

        this.close.addEventListener('click', (event) => {
            event.preventDefault();
            this.replaces();
        })
    }

    replaces() {
        this.menuelm.classList.toggle('-translate-x-full');
        this.menuelm.classList.toggle('-translate-x-0');
    }
}