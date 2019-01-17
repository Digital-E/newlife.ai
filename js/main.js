$(function() {

  //ScrollBar
  $("body").prognroll({
    color: "#b2ff59",
  });

  //getinvitecode

  let modalThing = $('.thumbnail');
  let modalWidth = modalThing.width();
  let openModalThing = false;
  $('.thumbnail').css({'transform':`translateX(${modalWidth-50}px)`});

  $(modalThing).on('click', function() {
    if (openModalThing) {
      TweenLite.to(modalThing, 1, {x: modalWidth - 50});
    } else {
      TweenLite.to(modalThing, 1, {x: - modalWidth + 500});
    }
    openModalThing = !openModalThing;
      }
    );


  //Elements Fade-in

    $('.logo').fadeTo( 2000, 1 );
    $('.download-button').fadeTo( 2000, 1 );
    $('.logo').fadeTo( 2000, 1 );
    $('.main-title-container p:nth-child(1)').fadeTo( 2000, 1 );
    $('.main-title-container p:nth-child(2)').fadeTo( 2000, 1 );
    $('.main-screen-container').fadeTo( 2000, 1 );
    $('.thumbnail').fadeTo( 2000, 1 );


    //plyr.io

const player1 = new Plyr('#player1', {
  autoplay: true,
  loop: {active: true},
  muted: true
});
const player2 = new Plyr('#player2', {
  autoplay: true,
  loop: {active: true},
  muted: true,
  hideControls: true
});


  // Skrollr

  // var s = skrollr.init();

  //ScrollMagic

  //Initiate controller

    var controller = new ScrollMagic.Controller();

//<Div-1> Animations

  //Pin Central Screen

    var blockTweenTimelineScreen = new TimelineMax();

  //   blockTweenTimelineScreen
  //   .to('#pinned-element1', 10, {
  //   opacity: '1',
  // })
  //   .to('#pinned-element1', 10, {
  //       opacity: '0',
  //     });

    var sceneScreen = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
      duration: 1500, // pin the element for a total of 400px
      offset: 215
    })
    .setPin('#pinned-element1') // the element we want to pin
    .setTween(blockTweenTimelineScreen)
    .addTo(controller);



    // var blockTween = new TweenMax.to('#title1', 0.5, {
    // opacity: '1',
    // });

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
      duration: 400, // pin the element for a total of 400px
      offset: 215
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
      duration: 400, // pin the element for a total of 400px
      offset: 615
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
      duration: 400, // pin the element for a total of 400px
      offset: 1015
    })
    .setPin('#left-title3')
    .setTween(blockTweenTimelineLeftTitle3) // the element we want to pin
    .addTo(controller);

    // setInterval(function(){
    //   var progress = scene.progress();
    //   console.log(progress);
    // },1000);

    // var blockTween2 = new TweenMax.to('#title2', 1.5, {
    // opacity: '1',
    // transform: 'translateX(-20px)'
    // });

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
      duration: 400, // pin the element for a total of 400px
      offset: 300
    })
    .setPin('#right-title-1')
    .setTween(blockTweenTimelineRightTitle1) // the element we want to pin
    .addTo(controller);

    // var blockTween3 = new TweenMax.to('#title3', 1.5, {
    // opacity: '1',
    // transform: 'translateX(-20px)'
    // });

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
      duration: 400, // pin the element for a total of 400px
      offset: 215
    })
    .setPin('#right-title-2')
    .setTween(blockTweenTimelineRightTitle2) // the element we want to pin
    .addTo(controller);

    // var blockTween4 = new TweenMax.to('#title4', 1.5, {
    // opacity: '1',
    // transform: 'translateX(-20px)'
    // });

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
      duration: 400, // pin the element for a total of 400px
      offset: 125
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
      duration: 400, // pin the element for a total of 400px
      offset: 525
    })
    .setPin('#right-title-4')
    .setTween(blockTweenTimelineRightTitle4) // the element we want to pin
    .addTo(controller);

    //Pin & Animate Right Title5

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
      duration: 400, // pin the element for a total of 400px
      offset: 625
    })
    .setPin('#right-title-5')
    .setTween(blockTweenTimelineRightTitle5) // the element we want to pin
    .addTo(controller);

    //Pin & Animate Right Title6

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
      duration: 400, // pin the element for a total of 400px
      offset: 725
    })
    .setPin('#right-title-6')
    .setTween(blockTweenTimelineRightTitle6) // the element we want to pin
    .addTo(controller);

    //Pin & Animate Right Title7

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
      duration: 400, // pin the element for a total of 400px
      offset: 1115
    })
    .setPin('#right-title-7')
    .setTween(blockTweenTimelineRightTitle7) // the element we want to pin
    .addTo(controller);

    //Pin & Animate Right Title8

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
      duration: 400, // pin the element for a total of 400px
      offset: 1015
    })
    .setPin('#right-title-8')
    .setTween(blockTweenTimelineRightTitle8) // the element we want to pin
    .addTo(controller);

    //Pin & Animate Right Title9

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
      duration: 400, // pin the element for a total of 400px
      offset: 915
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
})

// var myScroll = new IScroll('.wrapper');

var optionsTyped = {
  strings: ["Migos","Migos is an American hip hop trio from Lawrenceville, Georgia, founded in 2008."],
  typeSpeed: 50,
  loop: true,
  showCursor: true,
  cursorChar: '|',
}

var typed = new Typed(".text-block", optionsTyped);

});
