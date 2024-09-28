let arrow = document.getElementsByClassName("category_left_item_arrow");
let list_item = document.getElementsByClassName("category_left_item_list");
let faq_arrow = document.getElementsByClassName("faq_item_arrow");
let faq_list = document.getElementsByClassName("faq_item_list");
let menuOpen = document.querySelector(".menu_open");
let colse = document.querySelector(".close");
let hat = document.querySelector(".hat");
let light = 0;
for (let i = 0;  i<arrow.length; i++) {
    arrow[i].addEventListener("click", function(){
    	/**/
    	for (let j = 0;  j<arrow.length; j++) {
    		list_item[j].classList.remove("category_left_item_list_active");
    	}
    	/**/
        list_item[i].classList.add("category_left_item_list_active")
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