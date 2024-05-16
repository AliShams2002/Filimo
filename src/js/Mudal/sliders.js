
export class movieSplide{
  constructor() {
    this.interval;
    this.slide();
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

    this.sliders();
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

document.addEventListener('DOMContentLoaded', function () {

  // 1 Slide Per Move
  var splide1 = new Splide('.splide-1', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
  });
  splide1.mount();

  // Focus Center
  var splide2 = new Splide('.splide-2', {
      type: 'loop',
      perPage: 3,
      focus: 'center',
  });
  splide2.mount();

});
