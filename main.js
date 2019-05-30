var tl = new TimelineMax({onComplete:function() {
    this.restart()}
});

tl.to(".layer_18", 3.5, {
    scale: 1,
    yPercent:1.2,
    repeat: -1,
    yoyo: true,
    ease: Back.easeInOut.config(2)
  });

  TweenMax.fromTo(
    ".layer_15",
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

  TweenMax.fromTo(
    ".layer_14",
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

  TweenMax.fromTo(
    ".layer_13",
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

  TweenMax.fromTo(
    ".layer_9",
    3.5,
    {
      scale:1,
      transformOrigin: 'center center',
    },
    {
      scale:1.04,
      xPercent:1.2,
      yPercent:1.4,
      squash:2,
      ease:Back.easeInOut.config(5),
      repeat: -1,
      yoyo: true,
    }
  );



  