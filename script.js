
document.querySelector(".main").addEventListener("mousemove",(dets)=>{
    gsap.to(".cursor",{
        x : dets.clientX,
        y : dets.clientY,
    })
})
const text = document.querySelector('.part1 h1').textContent;
console.log(text);
const part1 = document.querySelector('.part1');
const array = text.split(" ");
while (part1.firstChild) {
    part1.removeChild(part1.firstChild);
}
array.forEach((elem)=>{
    const span = document.createElement("span");
    span.innerHTML = elem;
    part1.appendChild(span);
});

const text2 = document.querySelector('.part2 h1').textContent;
console.log(text);

const part2 = document.querySelector('.part2');
const array2 = text2.split(" ");

while (part2.firstChild) {
    part2.removeChild(part2.firstChild);
}

array2.forEach((elem)=>{
    const span = document.createElement("span");
    span.innerHTML = elem;
    part2.appendChild(span);
});


part1.addEventListener("mouseenter",()=>{
    gsap.to('.cursor',{
        height : "250px",
        width : "250px",
        cursor : "pointer"
    })

    const allSpan = document.querySelectorAll(".part1 span")
    allSpan.forEach((elem) => {
        elem.addEventListener("mouseenter", (e) => {
          const currentSpan = e.target;
          console.log(currentSpan);
            gsap.to(currentSpan, {
                display : "none",   
          });
        });
      
        elem.addEventListener("mouseleave", (e) => {
          const currentSpan = e.target;
          console.log(currentSpan);
          gsap.to(currentSpan, {
             display : "inline-block", 
          });
        });
      });
})
part1.addEventListener("mouseleave",()=>{
    gsap.to('.cursor',{
        height : "20px",
        width : "20px",
    })
})