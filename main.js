//just a comment 

var tl = new TimelineMax({onComplete:function() {
    this.restart()}
});

TweenMax.to(".layer_18", 3.5, {
    scale: 1,
    yPercent:1.2,
    repeat: -1,
    yoyo: true,
    ease: Back.easeInOut.config(2)
  });

  TweenMax.fromTo(
    ".expand",
    3.5,
    {
      scale:1,
      transformOrigin: 'center center',
    },
    {
      scale:1.04,
      yPercent:1.02,
      ease:ExpoScaleEase.config(0.1,0.3),
      repeat: -1,
      yoyo: true,
    }
  );

  TweenMax.from(
    ".inner",
    3.5,
    {
    scaleX:.9,
    squash:2,
    ease:"myBounce",
    transformOrigin:"center center",
    }
  );

  TweenMax.to(
    ".inner",
    4.5,
    {
        scaleX: 1.1,
   
      ease:"myBounce-squash",
      transformOrigin:"center center",
      repeat: -1,
      yoyo: true,
    }
  );


  
  TweenMax.from(
    ".layer-2",
    3.5,
    {
    scaleX:.9,
    squash:2,
    ease:"myBounce",
    transformOrigin:"center center",
    }
  );

  TweenMax.to(
    ".layer-2",
    4.5,
    {
        scaleX: 1.1,
   
      ease:"myBounce-squash",
      transformOrigin:"center center",
      repeat: -1,
      yoyo: true,
    }
  );


  TweenMax.fromTo(
    ".layer_13",
    3.5,
    {
    scaleX:.9,
    squash:2,
    ease:"myBounce",
    transformOrigin:"center center",
    },

  {   scaleX: 1.1,
      ease:"myBounce-squash",
      transformOrigin:"center center",
      repeat: -1,
      yoyo: true,
    }
  );

  TweenMax.fromTo(
    ".layer_8",
    3.5,
    {  
    scaleX:.9,
    squash:2,
    ease:"myBounce",
    transformOrigin:"center center",

    },
    {
      scaleX: 1.1,
      scaleY: 1.1,
      ease:"myBounce-squash",
      transformOrigin:"center center",
      repeat: -1,
      yoyo: true,
  
    }
  );



  