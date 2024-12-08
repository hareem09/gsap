let tl=gsap.timeline()
tl.from("h2",{
    y:-30,
    duration:1.5,
    delay:0.5,
    opacity:0
})
tl.from("li",{
    y:-20,
    duration:1.5,
    opacity:0
})
tl.from("h1",{
    y:30,
    opacity:0,
    duration:1.5,
    scale:2
})