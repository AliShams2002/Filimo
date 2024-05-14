
export class movieSplide{
  constructor() {
    this.interval;
    this.autoPlay();
  }

  autoPlay() {
    this.interval = setTimeout(() => this.slide(), 4000);
  }

  slide() {
    var splide = new Splide( '.splide-5', {
      type: 'loop',
        mediaQuery: 'max',
        breakpoints: {
          500: {
            perPage: 2,
          },
          768: {
            perPage: 3,
          },
          1028: {
            perPage: 4,
          },
          1280: {
            perPage: 5,
          },
          2000: {
            perPage: 5,
          }
      },
        perMove: 1,
        autoplay: true,
        arrows: false,
        pagination: false,
        focus: 'center'
    } );
    
    splide.mount();
  }
}


export class Sliders{
  constructor() {
    this.interval;

    this.autoPlay();
  }

  autoPlay() {
    this.interval = setTimeout(() => this.sliders(), 2000);
  }

  sliders() { 

    for (let index = 1; index <= 4; index++) {
      var splide = new Splide(`.splide-${index}`, {
        type: 'loop',
        mediaQuery: 'max',
        breakpoints: {
          500: {
            perPage: 2,
          },
          768: {
            perPage: 3,
          },
          1028: {
            perPage: 4,
          },
          1280: {
            perPage: 5,
          },
          2000: {
            perPage: 5,
          }
      },
        perMove: 1,
        autoplay: true,
        arrows: false,
        pagination: false,
        focus: 'center'
      } );
      splide.mount();
    }

      var splide9 = new Splide('.splide-9-main', {
        type: 'loop',
        heightRatio: 0.5,
        pagination: false,
        arrows: false,
        cover: true,
        autoplay: true,
        
      });   
      
      var splide9Thumbnail = new Splide('.splide-9-thumbnail', {
        arrows: '',
        rewind: true,
        fixedWidth: 104,
        fixedHeight: 58,
        isNavigation: true,
        gap: 10,
        focus: 'center',
        pagination: false,
        cover: true,
        dragMinThreshold: {
            mouse: 4,
            touch: 10,
        },
        breakpoints: {
            640: {
                fixedWidth: 66,
                fixedHeight: 38,
            },
        },
      });
      
      splide9.sync(splide9Thumbnail);
      splide9.mount();
      splide9Thumbnail.mount();

    }

}
