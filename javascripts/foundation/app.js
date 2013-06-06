;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);


// $(document).ready(function () {
//     var orbitalDial = new OrbitalDial({outerSelector: '#OuterSlider'
//       , onMoveCallBack: function() { console.log('moving!'); }
//       , onMoveEndCallBack: function() { console.log('Done moving the dial');}
//     });
// });

$(document).ready(function(){
      var elems = document.getElementsByClassName('file');

      var increase = Math.PI * 2 / elems.length;
      var x = 0, y = 0, angle = 0;

      for (var i = 0; i < elems.length; i++) {
          var elem = elems[i];
          // modify to change the radius and position of a circle
          x = 200 * Math.cos(angle) + 100;
          y = 200 * Math.sin(angle) + 100;
          elem.style.position = 'absolute';
          elem.style.left = x + 'px';
          elem.style.top = y + 'px';
          //need to work this part out
          var rot = 90 + (i * (360 / elems.length));
          elem.style['-moz-transform'] = "rotate("+rot+"deg)";
          elem.style.MozTransform = "rotate("+rot+"deg)";
          elem.style['-webkit-transform'] = "rotate("+rot+"deg)";
          elem.style['-o-transform'] = "rotate("+rot+"deg)";
          elem.style['-ms-transform'] = "rotate("+rot+"deg)";
          angle += increase;
          console.log(angle);
      }
  });



//jquery Knob
// Example of infinite knob, iPod click wheel
  var v, up=0,down=0,i=0
    ,$idir = $("div.idir")
    ,$ival = $("div.ival")
    ,incr = function() { i++; $idir.show().html("+").fadeOut(); $ival.html(i); }
    ,decr = function() { i--; $idir.show().html("-").fadeOut(); $ival.html(i); };
  $("input.infinite").knob({
      min : 0, 
      max : 20, 
      stopper : false, 
      change : function () {
            if(v > this.cv){
                if(up){
                    decr();
                    up=0;
                }else{up=1;down=0;}
            } else {
                if(v < this.cv){
                    if(down){
                        incr();
                        down=0;
                    }else{down=1;up=0;}
                }
            }
            v = this.cv;
        }
  });

  //get file name
  //move: file 1 - top right, file two - right, file 

  //animate direction
 $('.file').mouseover(function(){

    var fileNum = $(this).attr('class').charAt(12);
    var topMov,
        leftMov;

    switch(fileNum)
    {
    case '1':
      topMov = '+=0px';
      leftMov = '+=5px';
      break;
    case '2':
      topMov = '+=5px';
      leftMov = '+=5px';
      break;
    case '3':
      topMov = '+=5px';
      leftMov = '-=5px';
      break;
    case '4':
      topMov = '-=0px';
      leftMov = '-=5px';
      break;
    case '5':
      topMov = '-=5px';
      leftMov = '-=5px';
      break;
    case '6':
      topMov = '-=5px';
      leftMov = '+=5px';
      break;
    }

    console.log(topMov);
    console.log(leftMov);
    console.log(fileNum);

      $(this).stop().animate({

        left: leftMov,
        top: topMov

      }, 200, 'linear');


  });

    $('.file').mouseout(function(){

        var fileNum = $(this).attr('class').charAt(12);
    var topMov,
        leftMov;

    switch(fileNum)
    {
    case '1':
      topMov = '-=0px';
      leftMov = '-=5px';
      break;
    case '2':
      topMov = '-=5px';
      leftMov = '-=5px';
      break;
    case '3':
      topMov = '-=5px';
      leftMov = '+=5px';
      break;
    case '4':
      topMov = '+=0px';
      leftMov = '+=5px';
      break;
    case '5':
      topMov = '+=5px';
      leftMov = '+=5px';
      break;
    case '6':
      topMov = '+=5px';
      leftMov = '-=5px';
      break;
    }

      $(this).stop().animate({

        left: leftMov,
        top: topMov

      }, 300, 'linear');


  });

  $('.file').on('click', function(){
    $('.file').transition({ opacity: 0});
    $('.big_folder').show().delay(300).transition({ opacity: 1 });
    $('.libya').delay(300).transition({ opacity: 1, top: 210 });
    $('.web').delay(300).transition({ opacity: 1}, 200);
  });

   $('.big_folder').on('click', function(){
    $('.big_folder').transition({ opacity: 0});
    $('.file').show().delay(300).transition({ opacity: 1 }, 1000);
    $('.libya').transition({ opacity: 0, top: 240 });
    $('.web').delay(300).transition({ opacity: 0}, 200);
  });





