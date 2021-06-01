'use strict'

window.addEventListener('load', function(){
    if(this.screen.width < 769){
        new Glider(document.getElementById('glider-single'), {
            slidesToShow: 1,
            dots: '#dots',
            draggable: true,
            arrows: {
              prev: '#glider-prev',
              next: '#glider-next'
            },
            easing: function (x, t, b, c, d) {
              return c*(t/=d)*t + b;
            }
          });
    } else {
        new Glider(document.getElementById('glider-single'), {
            slidesToShow: 3,
            dots: '#dots',
            draggable: true,
            arrows: {
              prev: '#glider-prev',
              next: '#glider-next'
            },
            easing: function (x, t, b, c, d) {
              return c*(t/=d)*t + b;
            }
          });
    }
  });