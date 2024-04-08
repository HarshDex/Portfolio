gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  offset: 500
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"
});



const e = document.querySelector('.loading-screen p').innerHTML;
const em = document.querySelector('.loading-screen p');
const loadingText = e.split(' ');
em.innerHTML = '';
loadingText.forEach((elem, index) => {
  const wordSpan = document.createElement('span');
  const single = elem.split('');
  single.forEach((el, index) => {
    const letterSpan = document.createElement('span');
    letterSpan.textContent = el;
    letterSpan.style.display = 'inline-block';
    gsap.fromTo(
      letterSpan,
      { x: -15 * index, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.3, stagger: 0.08 }
    );
    wordSpan.appendChild(letterSpan);
  });
  const wordSpace = document.createElement('span');
  wordSpace.innerHTML = '&nbsp;';
  if (index < loadingText.length - 1) {
    wordSpan.appendChild(wordSpace);
  }
  em.appendChild(wordSpan);
});

gsap.to('.loading-screen', {
  height: 0,
  delay: 2,
  onComplete: () => {
    locoScroll.update(); 
    ScrollTrigger.refresh()
  }
});
gsap.to('.loading-screen p', { display: 'none', delay: 1.8 });
gsap.to('.loading-screen img', { display: 'none', delay: 1.5 });
gsap.to('.page1-headings h1', { opacity: 1, delay: 2.5, duration: 1 });

const typedTextSpans = document.querySelectorAll('.typed-text');

function typeText(element, texts, delay = 150) {
  let currentTextIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < texts[currentTextIndex].length) {
      if (!element.textContent) element.textContent = texts[currentTextIndex][0];
      else element.textContent += texts[currentTextIndex][charIndex];
      charIndex++;
      setTimeout(type, delay);
    } else {
      setTimeout(deleteText, 2000);
    }
  }

  function deleteText() {
    if (charIndex > 0) {
      element.textContent = element.textContent.slice(0, -1);
      charIndex--;
      setTimeout(deleteText, delay / 2);
    } else {
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      setTimeout(type, 500);
    }
  }

  type();
}

typedTextSpans.forEach((span) => {
  const texts = ["Designer", "Developer"];
  typeText(span, texts);
});

gsap.to('.circle', {
  opacity: 0,
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",
    start: "top 60%", 
    end: "center center", 
    scrub: true,
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const dynamicText = [
    "1) Hey, My name is Harsh Vardhan Shah and I am a Full Stack Developer.", 
    "2) Currently in my third year of pursuing a Bachelor of Technology in Computer Science, I am constantly expanding my knowledge and skills to stay at the forefront of the ever-evolving tech industry",
    "3) As a full stack developer with a specialization in modern web development, I bring a comprehensive skill set to the table, encompassing both front-end and back-end technologies.", 
    "4) With a focus on designing and developing user-friendly and visually appealing websites, I strive to deliver exceptional digital experiences that engage and convert visitors.", 
    "5) In addition to my web development expertise, I am also proficient in Flutter development, enabling me to create cross-platform mobile applications with ease.", 
    "6) My passion for technology and commitment to delivering high-quality solutions make me a valuable asset to any team, and I am always eager to take on new challenges and opportunities for growth"
  ];
  const dynamicTextElement = document.querySelector(".dynamic-text");
  let currentTextIndex = 0;

  gsap.to('.page2-about h1',{
    opacity : 1,
    scrollTrigger : {
      scroller : ".main",
      trigger : '.page2',
      start : "top 60%",
      end : 'top 10%',
      scrub : true,
    }
  })
  gsap.to('.page2-image',{
    rotate : "5deg",
    scrollTrigger : {
      scroller : ".main",
      trigger : '.page2',
      start : "top 60%",
      end : 'top 10%',
      scrub : true,
    }
  })
  gsap.to('.page2-image img',{
    opacity : 1,
    scrollTrigger : {
      scroller : ".main",
      trigger : '.page2',
      start : "top 60%",
      end : 'top 10%',
      scrub : true,
    }
  })
  gsap.to('.page2', {
    scrollTrigger: {
      trigger: ".page2",
      scroller: '.main',
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      onUpdate: self => {
        const progress = self.progress.toFixed(2);
        const targetIndex = Math.floor(progress * (dynamicText.length - 1));
        currentTextIndex = targetIndex;
        dynamicTextElement.textContent = dynamicText[currentTextIndex];
      }
    }
  });
});


locoScroll.on('scroll', (instance) => {
  if (instance.direction === 'down' && instance.scroll.y >= instance.limit.y) {
    instance.scrollTo('bottom', { duration: 1000, disableLerp: true });
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();