
////////////////////////////////////////////////////////////
// DIVIDER ANIMATIONS // DIVIDER ANIMATIONS // DIVIDER ANIMATIONS


// DIVIDER ONE
gsap.to(".divider-down", {
  y: 60,
  duration: 1,
  scrollTrigger: {
  trigger: ".divider-down",
  start: "top 90%",
  end: "bottom 30%",
  scrub: true,
  toggleActions: "restart mone none none",
  // markers: {
  //   startColor: "pink",
  //   endColor: "blue",
  //   fontSize: "3rem"
  // }
}
});

gsap.to(".divider-up", {
  y: -60,
  duration: 1,
  scrollTrigger: {
  trigger: ".divider-up",
  start: "top 90%",
  end: "bottom 30%",
  scrub: true,
  toggleActions: "restart mone none none",
  // markers: {
  //   startColor: "pink",
  //   endColor: "blue",
  //   fontSize: "3rem"
  // }
}
});

// DIVIDER TWO
gsap.to(".divider-down-2", {
  y: 60,
  duration: 1,
  scrollTrigger: {
  trigger: ".divider-up-2",
  start: "top 90%",
  end: "bottom 30%",
  scrub: true,
  toggleActions: "restart mone none none",
  // markers: {
  //   startColor: "pink",
  //   endColor: "blue",
  //   fontSize: "3rem"
  // }
}
});

gsap.to(".divider-up-2", {
  y: -60,
  duration: 1,
  scrollTrigger: {
  trigger: ".divider-up-2",
  start: "top 90%",
  end: "bottom 30%",
  scrub: true,
  toggleActions: "restart mone none none",
  // markers: {
  //   startColor: "pink",
  //   endColor: "blue",
  //   fontSize: "3rem"
  // }
}
});


// DIVIDER THREE


gsap.to(".divider-down-3", {
  y: 60,
  duration: 1,
  scrollTrigger: {
  trigger: ".divider-up-3",
  start: "top 90%",
  end: "bottom 30%",
  scrub: true,
  toggleActions: "restart mone none none",
  // markers: {
  //   startColor: "pink",
  //   endColor: "blue",
  //   fontSize: "3rem"
  // }
}
});

gsap.to(".divider-up-3", {
  y: -60,
  duration: 1,
  scrollTrigger: {
  trigger: ".divider-up-3",
  start: "top 90%",
  end: "bottom 30%",
  scrub: true,
  toggleActions: "restart mone none none",
  // markers: {
  //   startColor: "pink",
  //   endColor: "blue",
  //   fontSize: "3rem"
  // }
}
});



////////////////////////////////////////////////////////////
// 3X3 CARD ANIMATIONS  // 3X3 CARD ANIMATIONS  // 3X3 CARD ANIMATIONS 


gsap.to(".move-left", {
  x: -16,
  duration: 8,
  scrollTrigger: {
  trigger: ".move-left",
  start: "top 60%",
  end: "bottom 20%",
  scrub: true,
  toggleActions: "restart reverse",
  // markers: {
  //   startColor: "green",
  //   endColor: "red",
  //   fontSize: "3rem"
  // }
}
});
  

gsap.to(".move-right", {
  x: 16,
  duration: 8,
  scrollTrigger: {
  trigger: ".move-left",
  start: "top 60%",
  end: "top 0%",
  scrub: true,
  toggleActions: "restart reverse",
  // markers: {
  //   startColor: "pink",
  //   endColor: "blue",
  //   fontSize: "3rem"
  // }
}
});


gsap.to(".move-up-down", {
  y: 30,
  duration: 1,
  scrollTrigger: {
  trigger: ".move-up-down",
  start: "top 90%",
  end: "bottom 30%",
  scrub: true,
  toggleActions: "restart mone none none",
  // markers: {
  //   startColor: "pink",
  //   endColor: "blue",
  //   fontSize: "3rem"
  // }
}
});

gsap.to(".move-up", {
  y: -20,
  duration: 1,
  scrollTrigger: {
  trigger: ".move-up",
  start: "top 90%",
  end: "bottom 30%",
  scrub: true,
  toggleActions: "restart mone none none",
  // markers: {
  //   startColor: "pink",
  //   endColor: "blue",
  //   fontSize: "3rem"
  // }
}
});

// Review the toggle actions

gsap.to(".pattern-bg", {
  scale: 1.4,
  duration: 1,
  scrollTrigger: {
  trigger: ".pattern-bg",
  start: "top 50%",
  end: "bottom 10%",
  scrub: true,
  toggleActions: "restart mone none none",
  // markers: {
  //   startColor: "pink",
  //   endColor: "blue",
  //   fontSize: "3rem"
  // }
}
});




////////////////////////////////////////////////////////////
// 2x2 CARD ANIMATIONS // 2x2 CARD ANIMATIONS // 2x2 CARD ANIMATIONS 



gsap.to(".move-left-2x2", {
  x: -6,
  duration: 8,
  scrollTrigger: {
  trigger: ".move-left-2x2",
  start: "top 60%",
  end: "bottom 20%",
  scrub: true,
  toggleActions: "restart reverse",
  // markers: {
  //   startColor: "green",
  //   endColor: "red",
  //   fontSize: "3rem"
  // }
}
});
  

gsap.to(".move-right-2x2", {
  x: 4,
  duration: 8,
  scrollTrigger: {
  trigger: ".move-right-2x2",
  start: "top 60%",
  end: "top 0%",
  scrub: true,
  toggleActions: "restart reverse",
  // markers: {
  //   startColor: "pink",
  //   endColor: "blue",
  //   fontSize: "3rem"
  // }
}
});


gsap.to(".move-down-2x2", {
  y: 10,
  duration: 1,
  scrollTrigger: {
  trigger: ".move-down-2x2",
  start: "top 90%",
  end: "bottom 30%",
  scrub: true,
  toggleActions: "restart mone none none",
  // markers: {
  //   startColor: "pink",
  //   endColor: "blue",
  //   fontSize: "3rem"
  // }
}
});

gsap.to(".move-up-2x2", {
  y: -20,
  duration: 1,
  scrollTrigger: {
  trigger: ".move-up-2x2",
  start: "top 90%",
  end: "bottom 30%",
  scrub: true,
  toggleActions: "restart mone none none",
  // markers: {
  //   startColor: "pink",
  //   endColor: "blue",
  //   fontSize: "3rem"
  // }
}
});

// Review the toggle actions

