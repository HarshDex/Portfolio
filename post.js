// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });
// function init(){
//     gsap.registerPlugin(ScrollTrigger)
//     const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,

//     // for tablet smooth
//     tablet: { smooth: true },

//     // for mobile
//     smartphone: { smooth: true }

//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//         return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//         return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight
//         };
//     }
//     // follwoing line is not required to work pinning on touch screen
//     /* pinType: document.querySelector("#main
//     ").style.transform
//         ? "transform"
//         : "fixed"*/
//     });
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();
// }
// init()

function revealToSpan(){
    document.querySelectorAll(".reveal").forEach(function(elem){
        let spanChild = document.createElement("span");
        let spanParent = document.createElement("span");
    
        spanParent.classList.add("parent");
        spanChild.classList.add("child");
    
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);
        elem.innerHTML = "";
        elem.appendChild(spanParent);
    
    })
}

var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px",
    cursor.style.top = dets.y + "px"
})

revealToSpan();

var tl = gsap.timeline();
tl.from(".child span",{
    x : "10vw",
    duration : .7,
    stagger : .3,
    delay : .1,
    easeOut : Expo.easeOut,
})
tl.to(".parent .child",{
    y : "-100%",
    duration : .5,
})

tl.to("#green",{
    height : "100vh",
    top : 0,
    duration : .6,
})
tl.to("#green",{
    height : 0,
    top : 0,
    duration : .4,
    delay : -.3
})
tl.to("#page1",{
    height : "100vh",
    width :  "100vw",
    top : 0,
    duration : .4,
    delay : -.1
})

let openMenu =()=>{
    let q1 = document.querySelector("#sidebar");
    let q2 = document.querySelector("#sidebar-content");
    q1.style.width = "70vw";
    q2.style.display = "flex";
}

let closeMenu = ()=>{
    let q1 = document.querySelector("#sidebar");
    let q2 = document.querySelector("#sidebar-content");
    q1.style.width = "0vw";
    q2.style.display = "none";
}