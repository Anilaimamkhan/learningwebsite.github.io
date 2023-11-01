








const navbarLists = document.querySelector(".navbar")
document.querySelector("#menu-icon").onclick = () => {
    navbarLists.classList.toggle("active")
}

// counter up
$(".count").counterUp({
    delay: 10,
    time: 2000
});


// filter start
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p_btn");
const p_img_elem = document.querySelectorAll(".img-overlay")

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);
    p_btn.forEach((curELem) => {
        curELem.classList.remove("p-btn-active")
    });
    p_btn_clicked.classList.add("p-btn-active")
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
});

var swiper = new Swiper(".slider", {
    spaceBetween: 30,
    slidesPerView: 4,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
 

    breakpoints: {
      "200": {
        slidesPerView: 1,
      },
      "540": {
        slidesPerView: 2,
      },
      "768": {
        slidesPerView: 3,
      },
      "1200": {
        slidesPerView: 4,
      },
    },
  });


 
//  animate counter 
// const counteNnumber = document.querySelectorAll(".counter-number");
// const speed = 200;
// counteNnumber.forEach((curentElem) => {
//     const updateNUmber = () => {
//         const targetNumber = parseInt(curentElem.dataset.number);
//         const initialNumber = parseInt(curentElem.innerText)
//         const incrementNumber = Math.trunc(targetNumber / speed);
//         if (initialNumber < targetNumber) {
//             curentElem.innerText = `${initialNumber + incrementNumber}+`;
//             setTimeout(updateNUmber, 10)
//         }
//     }
//     updateNUmber();
// })


const topScroll = document.querySelector("#scrollToTop");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        topScroll.style.display = "block";
    } else {
        topScroll.style.display = "none";
    }
})
topScroll.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

window.onload=()=> {
  navbarLists.classList.remove("active")
}


let per = document.getElementById("loading");
window.addEventListener("load", function(){
   per.style.display="none";

})
