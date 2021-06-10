export default class Navbar {
    constructor() {

        this.nav = document.querySelector('.js-menu');
        this.toggle = document.querySelector('.js-menu-mobile-toggle');

        this.navIsOpen = false;

        this.init()

    }

    init() {
        // console.log("init Navbar");

        this.toggle.addEventListener('click', this.toggleMenu.bind(this))


    }

    toggleMenu() {

        // console.log('toggleMenu')

        if(this.navIsOpen) {
            this.navIsOpen = false;
            this.nav.classList.remove('is-open');

        } else {
            this.navIsOpen = true;
            this.nav.classList.add('is-open');
        }

    }
}
