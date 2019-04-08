$(function() {
  

  //Rellax.js

  // var rellax = new Rellax('.rellax');

  //Elements Fade-in

    $('.logo').fadeTo( 2000, 0.8 );
    $('.logo-mobile').fadeTo( 2000, 1 );
    $('.download-buttons').fadeTo( 2000, 0.8 );
    $('.main-title-container p:nth-child(1)').fadeTo( 2000, 1 );
    $('.main-title-container p:nth-child(2)').fadeTo( 2000, 1 );
    $('.main-screen-container').fadeTo( 2000, 1 );
    $('.menu').fadeTo( 2000, 1 );
    $('.new-menu-container').fadeTo( 1000, 1);
    $('.bottom-menu-container').fadeTo( 2000, 1);
    $('.invite-capsule').fadeTo( 2000, 1 );
    $('.sound-icon-2').fadeTo( 2000, 0.8 );


//Get Invite

  $('.invite-capsule, .CTA-button').on('click', function() {
    
    $('.new-menu-container, .bottom-menu-container, .blur').toggleClass("blurAll");

    vex.dialog.alert({
      message: 'How to get invited?',
      input: [
        '<div class="modal-subtitle">',
        'Entering NEW LIFE AI requires an invitation. If you don\'t have one there are two options:',
        '</div>',
        '<br/>',
        '<div class="modal-socials">',
        '<img src="./assets/facebook-white.svg">',
        '<img src="./assets/instagram-white.svg">',
        '</div>',
        '<div class="modal-subtitle-2">',
        'Go to NEW LIFE AI\'s <a href="https://facebook.com/newlifeai" target="_blank"><u>Facebook</u></a> or <a href="https://www.instagram.com/newlife.ai/" target="_blank"><u>Instagram</u></a> page and see which of your friends already follow NEW LIFE AI. They may already be registered.',
        '</div>',
    ].join(''),
      callback: function (value) {
          if (value) {
            $('.new-menu-container, .bottom-menu-container, .blur').toggleClass("blurAll");
          } else {
            $('.new-menu-container, .bottom-menu-container, .blur').toggleClass("blurAll");
          }
      }
  })

  })  

    //plyr.io

const player1 = new Plyr('#player1', {
  autoplay: true,
  loop: {active: true},
}).on('ready', event => {
    let player = event.detail.plyr;
    player.volume = 0;
});

const player2 = new Plyr('#player2', {
  autoplay: true,
  loop: {active: true},
}).on('ready', event => {
    let player = event.detail.plyr;
    player.play();
    var soundOn = true;
    player.volume = 1;

    $('.sound-icon-2').on('click', function(){
      if (soundOn == true) {
        player.volume = 0;
          $(this).css({'opacity': 0.3})
      } else {
        player.volume = 1;
        $(this).css({'opacity': 1})
      }
      soundOn = !soundOn;
    }
  )
});



  //ScrollMagic

  //Initiate controller
  var controller;

  if ( $(window).width() > 576) {      
    controller = new ScrollMagic.Controller(); 
  } 

//<Div-1> Animations

  //Pin Central Screen


    var blockTweenTimelineScreen = new TimelineMax();

    blockTweenTimelineScreen
    .to('#pinned-element1', 1, {
    transform: 'scale(1) translateX(-220px)',
    boxShadow: '0px 0px 120px rgba(255,255,255, 0.5)',
  })

  .to('#pinned-element1', 5, {
  transform: 'scale(1) translateX(-225px)',
  boxShadow: '0px 0px 120px rgba(255,255,255, 0.5)',
})

    let windowHeight = $(window).height();

    var sceneScreen = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: '400%', // pin the element for a total of 400px
      offset: windowHeight/2 + 220,
      triggerHook: 'onEnter'
    })
    .setPin('#pinned-element1') // the element we want to pin
    .setTween(blockTweenTimelineScreen)
    .addTo(controller);


    //Pin & Animate Left Title1

    var blockTweenTimelineLeftTitle1 = new TimelineMax();

    blockTweenTimelineLeftTitle1
    .to('#left-title1', 1.5, {
    opacity: '1',
  })
    .to('#left-title1', 1.5, {
        opacity: '0',
      });

    var sceneLeftTitle1 = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: 800, // pin the element for a total of 400px
      offset: 615
    })
    .setPin('#left-title1')
    .setTween(blockTweenTimelineLeftTitle1) // the element we want to pin
    .addTo(controller);

    //Pin & Animate Left Title2

    var blockTweenTimelineLeftTitle2 = new TimelineMax();

    blockTweenTimelineLeftTitle2
    .to('#left-title2', 1.5, {
    opacity: '1',
  })
    .to('#left-title2', 1.5, {
        opacity: '0',
      });

    var sceneLeftTitle2 = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: 800, // pin the element for a total of 400px
      offset: 1415
    })
    .setPin('#left-title2')
    .setTween(blockTweenTimelineLeftTitle2) // the element we want to pin
    .addTo(controller);

    //Pin & Animate Left Title3

    var blockTweenTimelineLeftTitle3 = new TimelineMax();

    blockTweenTimelineLeftTitle3
    .to('#left-title3', 1.5, {
    opacity: '1',
  })
    .to('#left-title3', 1.5, {
        opacity: '0',
      });

    var sceneLeftTitle3 = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: 800, // pin the element for a total of 400px
      offset: 2215
    })
    .setPin('#left-title3')
    .setTween(blockTweenTimelineLeftTitle3) // the element we want to pin
    .addTo(controller);


    //Pin & Animate Right Title1

    var blockTweenTimelineRightTitle1 = new TimelineMax();

    blockTweenTimelineRightTitle1
    .to('#right-title-1', 1.5, {
    opacity: '1',
    transform: 'translateX(-20px)'
  })
    .to('#right-title-1', 1.5, {
        opacity: '0',
      });

    var sceneRightTitle1 = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: 800, // pin the element for a total of 400px
      offset: 700
    })
    .setPin('#right-title-1')
    .setTween(blockTweenTimelineRightTitle1) // the element we want to pin
    .addTo(controller);


    //Pin & Animate Right Title2

    var blockTweenTimelineRightTitle2 = new TimelineMax();

    blockTweenTimelineRightTitle2
    .to('#right-title-2', 1.5, {
    opacity: '1',
    transform: 'translateX(-20px)'
  })
    .to('#right-title-2', 1.5, {
        opacity: '0',
      });

    var sceneRightTitle2 = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: 800, // pin the element for a total of 400px
      offset: 615
    })
    .setPin('#right-title-2')
    .setTween(blockTweenTimelineRightTitle2) // the element we want to pin
    .addTo(controller);


    //Pin & Animate Right Title3

    var blockTweenTimelineRightTitle3 = new TimelineMax();

    blockTweenTimelineRightTitle3
    .to('#right-title-3', 1.5, {
    opacity: '1',
    transform: 'translateX(-20px)'
  })
    .to('#right-title-3', 1.5, {
        opacity: '0',
      });

    var sceneRightTitle3 = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: 800, // pin the element for a total of 400px
      offset: 530
    })
    .setPin('#right-title-3')
    .setTween(blockTweenTimelineRightTitle3) // the element we want to pin
    .addTo(controller);

    //Pin & Animate Right Title4

    var blockTweenTimelineRightTitle4 = new TimelineMax();

    blockTweenTimelineRightTitle4
    .to('#right-title-4', 1.5, {
    opacity: '1',
    transform: 'translateX(-20px)'
  })
    .to('#right-title-4', 1.5, {
        opacity: '0',
      });

    var sceneRightTitle4 = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: 800, // pin the element for a total of 400px
      offset: 1500
    })
    .setPin('#right-title-4')
    .setTween(blockTweenTimelineRightTitle4) // the element we want to pin
    .addTo(controller);

  //   //Pin & Animate Right Title5

    var blockTweenTimelineRightTitle5 = new TimelineMax();

    blockTweenTimelineRightTitle5
    .to('#right-title-5', 1.5, {
    opacity: '1',
    transform: 'translateX(-20px)'
  })
    .to('#right-title-5', 1.5, {
        opacity: '0',
      });

    var sceneRightTitle5 = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: 800, // pin the element for a total of 400px
      offset: 1415
    })
    .setPin('#right-title-5')
    .setTween(blockTweenTimelineRightTitle5) // the element we want to pin
    .addTo(controller);

  //   //Pin & Animate Right Title6

    var blockTweenTimelineRightTitle6 = new TimelineMax();

    blockTweenTimelineRightTitle6
    .to('#right-title-6', 1.5, {
    opacity: '1',
    transform: 'translateX(-20px)'
  })
    .to('#right-title-6', 1.5, {
        opacity: '0',
      });

    var sceneRightTitle6 = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: 800, // pin the element for a total of 400px
      offset: 1330
    })
    .setPin('#right-title-6')
    .setTween(blockTweenTimelineRightTitle6) // the element we want to pin
    .addTo(controller);
  //
  //   //Pin & Animate Right Title7

    var blockTweenTimelineRightTitle7 = new TimelineMax();

    blockTweenTimelineRightTitle7
    .to('#right-title-7', 1.5, {
    opacity: '1',
    transform: 'translateX(-20px)'
  })
    .to('#right-title-7', 1.5, {
        opacity: '0',
      });

    var sceneRightTitle7 = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: 800, // pin the element for a total of 400px
      offset: 2300
    })
    .setPin('#right-title-7')
    .setTween(blockTweenTimelineRightTitle7) // the element we want to pin
    .addTo(controller);
  //
  //   //Pin & Animate Right Title8

    var blockTweenTimelineRightTitle8 = new TimelineMax();

    blockTweenTimelineRightTitle8
    .to('#right-title-8', 1.5, {
    opacity: '1',
    transform: 'translateX(-20px)'
  })
    .to('#right-title-8', 1.5, {
        opacity: '0',
      });

    var sceneRightTitle8 = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: 800, // pin the element for a total of 400px
      offset: 2215
    })
    .setPin('#right-title-8')
    .setTween(blockTweenTimelineRightTitle8) // the element we want to pin
    .addTo(controller);

  //   //Pin & Animate Right Title9

    var blockTweenTimelineRightTitle9 = new TimelineMax();

    blockTweenTimelineRightTitle9
    .to('#right-title-9', 1.5, {
    opacity: '1',
    transform: 'translateX(-20px)'
  })
    .to('#right-title-9', 1.5, {
        opacity: '0',
      });

    var sceneRightTitle9 = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: 800, // pin the element for a total of 400px
      offset: 2130
    })
    .setPin('#right-title-9')
    .setTween(blockTweenTimelineRightTitle9) // the element we want to pin
    .addTo(controller);

});

//<Div-3> Animations

//Controller Initiate

var controllerDiv3 = new ScrollMagic.Controller();

//Animate #div-3-img1

var blockTweenTimelineDiv3Img1 = new TimelineMax();

blockTweenTimelineDiv3Img1
.to('#div-3-img1', 1, {
opacity: '1',
x:"0",
y:"500"
})
.to('#div-3-img1', 5, {
    opacity: '1',
    delay: 0,
    transformOrigin:'50% 50%',
    x:"0",
    y:"0"
  })
  .to('#div-3-img1', 1, {
      delay: 3,
      transform: 'scale(1.3)',
      filter: 'blur(4px)',
      x:"0",
      y:"0"
    });

var sceneDiv3Img1 = new ScrollMagic.Scene({
  triggerElement: '#pinned-trigger2', // starting scene, when reaching this element
  duration: 1000, // pin the element for a total of 400px
  offset: 0,
  triggerHook: 1
})
.setTween(blockTweenTimelineDiv3Img1) // the element we want to pin
.addTo(controllerDiv3);

//Animate #div-3-img2

var blockTweenTimelineDiv3Img2 = new TimelineMax();

blockTweenTimelineDiv3Img2
.to('#div-3-img2', 1, {
opacity: '1',
x:"0",
y:"0"
})
.to('#div-3-img2', 1, {
    opacity: '1',
    delay:0,
    transform: 'scale(1.3)',
    filter: 'blur(4px)',
    x:"0",
    y:"0"
  });

var sceneDiv3Img2 = new ScrollMagic.Scene({
  triggerElement: '#pinned-trigger2', // starting scene, when reaching this element
  duration: 1000, // pin the element for a total of 400px
  offset: 0,
  triggerHook: 1
})
.setTween(blockTweenTimelineDiv3Img2) // the element we want to pin
.addTo(controllerDiv3);


//<Div-5> Animations

//Controller Initiate

var controllerDiv5 = new ScrollMagic.Controller();

//Animate #div-5-img1

var blockTweenTimelineDiv5Img1 = new TimelineMax();

blockTweenTimelineDiv5Img1
.to('#div-5-img1', 1, {
opacity: '1',
x:"0",
y:"500"
})
.to('#div-5-img1', 5, {
    opacity: '1',
    delay: 0,
    transformOrigin:'50% 50%',
    x:"0",
    y:"0"
  })
  .to('#div-5-img1', 1, {
      delay: 3,
      transform: 'scale(1.3)',
      filter: 'blur(4px)',
      x:"0",
      y:"0"
    });

var sceneDiv5Img1 = new ScrollMagic.Scene({
  triggerElement: '#pinned-trigger3', // starting scene, when reaching this element
  duration: 1000, // pin the element for a total of 400px
  offset: 0,
  triggerHook: 1
})
.setTween(blockTweenTimelineDiv5Img1) // the element we want to pin
.addTo(controllerDiv5);

//Animate #div-5-img2

var blockTweenTimelineDiv5Img2 = new TimelineMax();

blockTweenTimelineDiv5Img2
.to('#div-5-img2', 1, {
opacity: '1',
x:"0",
y:"0"
})
.to('#div-5-img2', 1, {
    opacity: '1',
    delay:0,
    transform: 'scale(1.3)',
    filter: 'blur(4px)',
    x:"0",
    y:"0"
  });

var sceneDiv3Img2 = new ScrollMagic.Scene({
  triggerElement: '#pinned-trigger3', // starting scene, when reaching this element
  duration: 1000, // pin the element for a total of 400px
  offset: 0,
  triggerHook: 1
})
.setTween(blockTweenTimelineDiv5Img2) // the element we want to pin
.addTo(controllerDiv5);




//Map Init & Parameters

$(function(){
  var cities = [
  {name: '', coords: [10, -65]},
  {name: 'Caracas', coords: [10, -65]},
  {name: '', coords: [45, 0]},
  {name: 'Bordeaux', coords: [45, 0]},
  {name: '', coords: [30, 50]},
  {name: 'Dubai', coords: [30, 50]},
  {name: '', coords: [40, -120]},
  {name: 'Los Angeles', coords: [40, -120]},
  {name: '', coords: [40, 140]},
  {name: 'Tokyo', coords: [40, 140]},
];

  let options = {map:'world_mill',
  markers: cities.map(function(h){ return {name: h.name, latLng: h.coords} }),
  backgroundColor:'',
  zoomOnScroll:false,
  regionStyle:{
    initial: {
        fill: 'white',
        "fill-opacity": 0.2,
        stroke: 'white',
        "stroke-width": 0,
        "stroke-opacity": 0.1
      },
      hover: {
  "fill-opacity": 0.3,
  cursor: 'pointer'
},
  },
  onRegionTipShow: function(e, el, code){
  el.html(unidentified);
},
onMarkerTipShow: function(event, label, index){
  label.css({'color':'white', 'font-family':'basicsans7','font-size':'24px','background':'transparent','border':'0px'});
},
markerStyle: {
  initial: {
  fill: 'rgba(127,255,0, 1)',
  stroke: 'rgba(127,255,0, 1)',
  "fill-opacity": 1,
  "stroke-width": 0,
  "stroke-opacity": 0,
  r: 5
},
hover: {
"fill-opacity": 1,
cursor: 'pointer'
    }
  },
}

$('#world-mapp').vectorMap(options);

var circles = $("circle:odd");

var circlesToAddClasses = $("circle:odd");

circlesToAddClasses.each(function(){
  $(this).addClass('venobox');
  $(this).attr('data-vbtype','video');
  $(this).attr('data-autoplay','true');
  $(this).attr('data-href','https://vimeo.com/286116952');
});

$('.venobox').venobox(); 

TweenMax.to(circles, 2, {
ease: Linear.easeNone,
transformOrigin:"center center",
scale:5,
opacity: 0,
repeat:-1}
);

//Replace Radar Waves on window resize

$(window).resize(function (){
  let parent = $('#world-mapp').parent();
  let child = $('#world-mapp');
  child.empty();
  $('#world-mapp').remove();
  parent.append(child);
  $('#world-mapp').vectorMap(options);

  var circles = $("circle:odd");

  TweenMax.to(circles, 2, {
  ease: Linear.easeNone,
  transformOrigin:"center center",
  scale:5,
  opacity: 0,
  repeat:-1}
  );

  var circlesToAddClasses = $("circle:odd");

  circlesToAddClasses.each(function(){
    $(this).addClass('venobox');
    $(this).attr('data-vbtype','video');
    $(this).attr('data-autoplay','true');
    $(this).attr('data-href','https://vimeo.com/286116952');
  });
  
  $('.venobox').venobox(); 

})

// Autotype

var optionsTyped1 = {
  strings: ["We","We are the infinite decentralised collective your parents warned you about."],
  typeSpeed: 50,
  loop: false,
}

var optionsTyped2 = {
  strings: ["A.I.","A.I. assisted curators measure your clout, which defines your earnings."],
  typeSpeed: 50,
  loop: false,
}

var typed2;

var typed1;

// Smooth Scroll

var scroll = new SmoothScroll('a[href*="#"]');

//Menu Select script

 $.fn.filterOpacity = function (index, opacity) {

   var number = index;

   $(this).filter(
     function( index ) {
       return index == number;
 }).css({'transform':'scale(1)','filter':'blur(0px)','opacity':opacity})
};

  $.fn.filterAll = function (indexArray, opacityArray) {
    for(i=0; i < indexArray.length; i++) {
      $(this).filterOpacity(indexArray[i],opacityArray[i]);
    }
  }

  let indexArray = [0,1,2,3,4,5,6,7];
  let opacityArray = [1,0.8,0.7,0.6,0.5,0.4,0.3,0.2];

  $('.menu').children().children().filterAll(indexArray, opacityArray);
  $('.menu').children().children().eq(0).css({'transform':'scale(1.1)','filter':'blur(0)'});


  $.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
  };

$(window).on('resize scroll', function(){
  $('.scroll-to-element').each(function() {
    if ($(this).isInViewport()) {
      var active = $(this).attr('id');

      if(active === 'apppreview') {
        let indexArray = [0,1,2,3,4,5,6,7];
        let opacityArray = [0.8,1,0.8,0.7,0.6,0.5,0.4,0.3];

        $('.menu').children().children().filterAll(indexArray, opacityArray);
        $('.menu').children().children().eq(1).css({'transform':'scale(1.1)','filter':'blur(0)'});

      }
      else if (active === 'vision') {
        let indexArray = [0,1,2,3,4,5,6,7];
        let opacityArray = [0.7,0.8,1,0.8,0.7,0.6,0.5,0.4];

        $('.menu').children().children().filterAll(indexArray, opacityArray);
        $('.menu').children().children().eq(2).css({'transform':'scale(1.1)','filter':'blur(0)'});

      } else if (active === 'thehiddenforce') {
        let indexArray = [0,1,2,3,4,5,6,7];
        let opacityArray = [0.6,0.7,0.8,1,0.8,0.7,0.6,0.5];

        $('.menu').children().children().filterAll(indexArray, opacityArray);
        $('.menu').children().children().eq(3).css({'transform':'scale(1.1)','filter':'blur(0)'});

      } else if (active === 'newpower') {
        let indexArray = [0,1,2,3,4,5,6,7];
        let opacityArray = [0.5,0.6,0.7,0.8,1,0.8,0.7,0.6];

        $('.menu').children().children().filterAll(indexArray, opacityArray);
        $('.menu').children().children().eq(4).css({'transform':'scale(1.1)','filter':'blur(0)'});

      } else if (active === 'introduction') {
        let indexArray = [0,1,2,3,4,5,6,7];
        let opacityArray = [1,0.8,0.7,0.6,0.5,0.4,0.3,0.2];

        $('.menu').children().children().filterAll(indexArray, opacityArray);
        $('.menu').children().children().eq(0).css({'transform':'scale(1.1)','filter':'blur(0)'});

      } else if (active === 'startnow') {
        let indexArray = [0,1,2,3,4,5,6,7];
        let opacityArray = [0.4,0.5,0.6,0.7,0.8,1,0.8,0.7];

        $('.menu').children().children().filterAll(indexArray, opacityArray);
        $('.menu').children().children().eq(5).css({'transform':'scale(1.1)','filter':'blur(0)'});

      } else if (active === 'worldwide') {
        let indexArray = [0,1,2,3,4,5,6,7];
        let opacityArray = [0.3,0.4,0.5,0.6,0.7,0.8,1,0.8];

        $('.menu').children().children().filterAll(indexArray, opacityArray);
        $('.menu').children().children().eq(6).css({'transform':'scale(1.1)','filter':'blur(0)'});

      }
    }

    if($('.text-block').isInViewport() && !$('.text-block').attr("id")) {
      typed1 = new Typed(".text-block", optionsTyped1);
      $(".text-block").attr("id", "done");
    };

    if($('.text-block2').isInViewport() && !$('.text-block2').attr("id")) {
      typed2 = new Typed(".text-block2", optionsTyped2);
      $(".text-block2").attr("id", "done");
    };

  });

})

});
