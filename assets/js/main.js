// Sidebar
const itemSidebar = document.querySelectorAll(".category__sidebar-item");

itemSidebar.forEach((item) => {
    item.addEventListener("click", function() {
        item.classList.toggle("block");
    });
});

// Product
const tabs = document.querySelectorAll(".tab-item");
const contents = document.querySelectorAll(".tab-content");
const showMore = document.querySelector(".show-more a");
const showImg = document.querySelector(".showImg");
const showHide = document.querySelector(".showHide");

const bigImg = document.querySelector(".product__content-left-big img");
const smallImg = document.querySelectorAll(".product__content-left-small img");

smallImg.forEach((img) => {
    img.addEventListener("click", function(){
        bigImg.src = img.src;
    })
})

tabs.forEach((tab, index) => {
    const content = contents[index];

    tab.onclick = function() {
        const tabActive = document.querySelector(".tab-item.active");
        const contentActive = document.querySelector(".tab-content.active");
        tabActive.classList.remove("active");
        contentActive.classList.remove("active");

        this.classList.add("active");
        content.classList.add("active");  

        contents.forEach((content) => {
            content.classList.remove("showContent");

            showImg.classList.remove("showImg");
            showImg.classList.remove("showHide");
            showHide.classList.remove("showHide");
            showHide.classList.remove("showImg");

            showImg.classList.add("showImg");
            showHide.classList.add("showHide");
        })
    }
})

if (showMore) {
    showMore.addEventListener("click", function(e) {
        e.preventDefault();
        contents.forEach((content) => {
            content.classList.toggle("showContent");

            showImg.classList.toggle("showImg");
            showImg.classList.toggle("showHide");
            
            showHide.classList.toggle("showHide");
            showHide.classList.toggle("showImg");
        })
    }) 
}