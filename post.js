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