let arrow = document.getElementsByClassName("category_left_item_arrow");
let list_item = document.getElementsByClassName("category_left_item_list");
let faq_arrow = document.getElementsByClassName("faq_item_arrow");
let faq_list = document.getElementsByClassName("faq_item_list");
let menuOpen = document.querySelector(".menu_open");
let colse = document.querySelector(".close");
let hat = document.querySelector(".hat");
let categLeft = document.querySelector(".category_left_fixed");
let categOpen = document.querySelector(".categ_open");
let categArrow = 0;
let light = 0;
for (let i = 0;  i<arrow.length; i++) {
    arrow[i].addEventListener("click", function(){
    		list_item[i].classList.toggle("category_left_item_list_active");
    })
}
for (let i = 0;  i < faq_arrow.length; i++) {
    faq_arrow[i].addEventListener("click", function(){
        faq_list[i].classList.toggle("faq_item_list_active");
        faq_arrow[i].classList.toggle("faq_item_arrow_color");
    })
}
menuOpen.addEventListener("click", function(){
    hat.style.top = "0%";
})
colse.addEventListener("click", function(){
    hat.style.top = "-100%";
})

categOpen.addEventListener("click", function(){
    if (categArrow == 0) {
            categLeft.style.left = "45px";
            categArrow = 1;
            categOpen.style.transform = "rotate(180deg)"
    } else {
            categLeft.style.left = "-200px";
            categArrow = 0;
            categOpen.style.transform = "rotate(0deg)"
    }
})

