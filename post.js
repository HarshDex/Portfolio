AOS.init({ 
    duration : 2000
});
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
    cursor.style.left = dets.clientX + "px",
    cursor.style.top = dets.clientY + "px"
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
tl.to("#loader",{
    height : "0vh",
    top : 0,
    duration : .4,
    delay : .2,
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

let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");
let card4 = document.querySelector("#card4");
let button = document.querySelector("#button");
let imagePart = document.querySelector(".image-part")
function cardAnimation(){
    card1.style.left = "5%";
    card1.style.transform  = "rotate(-20deg)";
    card1.style.backgroundColor = "blue";

    card2.style.left = "15%";
    card2.style.transform  = "rotate(-5deg)";
    card2.style.backgroundColor = "yellow";
    card2.style.top = "3%";

    card3.style.left = "25%";
    card3.style.transform  = "rotate(10deg)";
    card3.style.backgroundColor = "purple";

    card4.style.top = "10%";
    card4.style.left = "32%";
    card4.style.transform  = "rotate(20deg)";
    card4.style.backgroundColor = "green";

    button.style.display = "flex";
}
function displayNone(){
    card1.style.transform  = "rotate(0deg)";
    card1.style.backgroundColor = "green";
    card1.style.left = "20%";
    card1.style.top = "5%";

    card2.style.transform  = "rotate(0deg)";
    card2.style.backgroundColor = "blue";
    card2.style.left = "20%";
    card2.style.top = "5%";

    card3.style.transform  = "rotate(0deg)";
    card3.style.backgroundColor = "blue";
    card3.style.left = "20%";
    card3.style.top = "5%";

    card4.style.transform  = "rotate(0deg)";
    card4.style.backgroundColor = "blue";
    card4.style.left = "20%";
    card4.style.top = "5%";

    imagePart.style.display = "flex";
    imagePart.style.justifyContent = "center";
    imagePart.style.alignCenter = "center";
    button.style.display = "none";
}
gsap.registerPlugin(ScrollTrigger)
// gsap.to("#main",{
//     backgroundColor : "black",
//     scrollTrigger : {
//         trigger : "#page1",
//         start : "top 60%",
//         end : "top 10%",
//         scrub : 4,
//     }
// })
gsap.from(".card-part",{
    x : -370,
    ease : "power1.out",
    scrollTrigger : {
        trigger : "#page1",
        start : "top 60%",
        end : "top 5%",
        scrub :2,
    }
})
gsap.from(".image-part",{
    x : 500,
    ease : "power1.out",
    scrollTrigger : {
        trigger : "#page1",
        start : "top 60%",
        end : "top 15%",
        scrub :2,
    }
})
gsap.from(".text h1",{
    transform : "scale(0.8)",
    ease : "power1.out",
    scrollTrigger : {
        trigger : "#page2",
        start : "top 60%",
        end : "top : 40%",
        scrub : 3,
    }
})
gsap.from(".text h2",{
    transform : "scale(0.8)",
    ease : "power1.out",
    scrollTrigger : {
        trigger : "#page2",
        start : "top 60%",
        end : "top : 40%",
        scrub : 3,
    }
})

let projects = document.querySelectorAll(".page5-image-container-image img");
projects.forEach((elem)=>{
    elem.addEventListener("mousemove",(dets)=>{
        cursor.style.height = "100px";
        cursor.style.width = "100px";
        cursor.style.backgroundColor = "white";
        cursor.style.color = "black";
        cursor.innerHTML = "Visit ↗"
    })
    elem.addEventListener("mouseleave",(dets)=>{
        cursor.style.height = "10px";
        cursor.style.width = "10px";
        cursor.style.backgroundColor = "orange";
        cursor.innerHTML = "";
    })
})

gsap.to("#page4",{
    width : "100vw",
    scrollTrigger : {
        trigger : "#page4",
        start : "top bottom",
        end : "top 80%",
        scrub : true,
        markers : true,
    }
})

