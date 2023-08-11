
gsap.registerPlugin(ScrollTrigger);

// index gsap 

gsap.from(".navbar", {
  opacity: 0,
  duration: 1,
  y: -120,
  ease: "power1.out",
});

gsap.from(".ri-question-answer-fill", {
  opacity: 0,
  duration: 1,
  x: -100,
  ease: "power1.out",
});

gsap.from(".explorenbook", {
  opacity: 0,
  duration: 1,
  x: 200,
  ease: "power1.out",
});
gsap.from(".centerhead", {
  opacity: 0,
  duration: 1,
  scale: 0.8,
  ease: "power1.out",
});

gsap.from("#about>h1",{
  scrollTrigger:{
      trigger:"#about",
      start:"top 80%",
      // markers:true,
      scrub:4,
      end:"top 90%"
  },
  opacity:0,
  stagger:4,
  delay:.5,
  x: 300,
  ease:"SlowMo.ease"
})


gsap.from(".lefteve",{
  scrollTrigger:{
      trigger:"#events",
      start:"top 80%",
      // markers:true,
      scrub:4,
      end:"top 90%"
  },
  opacity:0,
  // stagger:4,
  // delay:.5,
  x: -100,
  ease:"power1.out"
})

gsap.from("#video-div",{
  scrollTrigger:{
      trigger:"#events",
      start:"top 80%",
      // markers:true,
      scrub:4,
      end:"top 100%"
  },
  opacity:0,
  stagger:4,
  delay:.5,
  scale: 30,
  ease:"SlowMo.ease"
})

gsap.to(".line1",{
  scrollTrigger:{
      trigger:"#services",
      start:"top 90%",
      // markers:true,
      scrub:4,
      end:"bottom 90%"
  },
  stagger:4,
  delay:.5,
  width:"80%",
  ease:"SlowMo.ease"
})


gsap.from(".chooseusheadcontent>h4",{
  scrollTrigger:{
      trigger:"#Chooseus",
      start:"top 80%",
      // markers:true,
      scrub:4,
      end:"bottom 100%"
  },
  opacity:0,
  stagger:4,
  delay:.5,
  scale: 0.5,
  ease:"SlowMo.ease"
})
gsap.from("#Review",{
  scrollTrigger:{
      trigger:"#Review",
      start:"top 20%",
      // markers:true,
      scrub:4,
      end:"top 100%"
  },
  opacity:0,
  stagger:4,
  delay:.5,
  scale: 3,
  ease:"SlowMo.ease"
})
gsap.from("#weddingvibes>.vidtext",{
  scrollTrigger:{
      trigger:"#weddingvibes",
      start:"top 50%",
      // markers:true,
      scrub:4,
      end:"top 100%"
  },
  opacity:0,
  stagger:4,
  delay:.5,
  x: 100,
  ease:"SlowMo.ease"
})
gsap.from("#renttext",{
  scrollTrigger:{
      trigger:"#rental",
      start:"top 80%",
      // markers:true,
      scrub:4,
      end:"top 100%"
  },
  opacity:0,
  stagger:4,
  delay:.5,
  x: -100,
  ease:"SlowMo.ease"
})

gsap.from("#image-container", {
  scrollTrigger: {
    start: "top 60%",
    trigger: "#Blogshome",
    // markers:true,
    end:"top 100%"
  },
  y: 20,
  opacity: 0,
  duration: 0.8,
  ease: Expo.easeInOut,
  skewY: 3,
});