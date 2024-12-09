gsap.from("#pg1 #box",{
    scale:0,
    delay:1,
    duration:2,
    opacity:0,
    rotate:360,
    scrollTrigger:{
        trigger:"#pg1 #box",
        scroller:"body",
        start:"top 50%",
        end:"bottom 40%",
        scrub:2,
        pin:true
    }
})
gsap.from("#pg2 h1",{
   opacity:0,
   x:500,
   duration:2,
   scrollTrigger:{
    trigger:"#pg2 h1",
    scroller:"body",
    markers:true,
    start:"top 50%",
    end:"top 50%",
    scrub:2,
   }
})
gsap.from("#pg2 h2",{
    opacity:0,
    x:-500,
    duration:2,
    scrollTrigger:{
     trigger:"#pg2 h2",
     scroller:"body",
    //  markers:true,
     start:"top 50%",
     end:"top 50%",
    scrub:2,
    }
 })
 gsap.to("#pg3 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#pg3",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        pin:true,
        scrub:2
    }
 })
gsap.from("#pg4 #box",{
    scale:0,
    duration:2,
    opacity:0,
    rotate:360,
    scrollTrigger:{
        trigger:"#pg4 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top -100%"
    }
})