gsap.set('.box',{

    repeat:1,
    opacity:1,

})

gsap.from('.box',{
    x:-500,
    repeat:-1,
    opacity:0,
    yoyo:true,
    duration:4,

})

gsap.from('.head-a',{
    y:-200,
    duration:5,
    // opacity:0,
    repeat:0,
    // yoyo:true,
    // stagger:0,
})
