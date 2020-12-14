'use strict';


window.addEventListener('load', function() {
    
    /* Menu Movil */
    if(screen.width < 769){
        let menu = document.getElementById('menu');
        let nav = document.getElementById('nav');
        let cont = 0;
        nav.style.display = "none";
        menu.addEventListener('click', function(){
            if(cont === 0){
                nav.style.display = "block";
                cont = 1;
            } else {
                nav.style.display = "none";
                cont = 0;
            }
        });
    }


    /* Slider */
    
    if(screen.width < 768){
        new Glider(document.getElementById('glider-single01'), {
            slidesToShow: 1,
            dots: '#dots01',
            draggable: true,
            scrollLock: true,
            rewind: true,
            scrollLockDelay: 150,
            arrows: {
              prev: '#glider-prev01',
              next: '#glider-next01'
            },
            easing: function (x, t, b, c, d) {
              return c*(t/=d)*t + b;
            }
          });
    } else {
        new Glider(document.getElementById('glider-single01'), {
            slidesToShow: 3,
            dots: '#dots01',
            draggable: true,
            scrollLock: true,
            rewind: true,
            arrows: {
              prev: '#glider-prev01',
              next: '#glider-next01'
            },
            easing: function (x, t, b, c, d) {
              return c*(t/=d)*t + b;
            }
          });
    }


});