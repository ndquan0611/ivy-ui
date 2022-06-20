const sliderMain = document.querySelector(".slider__main");
const sliderItems = document.querySelectorAll(".slider__item");
const prevBtn = document.querySelector(".slider__nav-prev");
const nextBtn = document.querySelector(".slider__nav-next");
const dotItems = document.querySelectorAll(".slider__dot-item");

const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderLenght = sliderItems.length;

let positionX = 0;
let index = 0;

dotItems.forEach(item => item.addEventListener("click", function(e) {
    dotItems.forEach(el => el.classList.remove("active"));
    e.target.classList.add("active");
    const sliderIndex = parseInt(e.target.dataset.index);
    index = sliderIndex;
    positionX = -1 * index * sliderItemWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
}))

prevBtn.addEventListener("click", function() {
    index--;
    if (index < 0) {
        index = sliderLenght - 1;
    }
    handleChangeSlider();
})

nextBtn.addEventListener("click", function() {
    index++;
    if (index > sliderLenght - 1) {
        index = 0;
    }
    
    handleChangeSlider();
})

function handleChangeSlider() {
    positionX = -1 * index * sliderItemWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;

    dotItems.forEach(el => el.classList.remove("active"));
    dotItems[index].classList.add("active");
}

function imgSlider() {
    index++;
    if (index >= sliderLenght) {
        index = 0;
    }
    handleChangeSlider();
}

setInterval(imgSlider, 5000);