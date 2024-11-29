document.querySelector("html").style.opacity = "100%";
let catalog = 3;

function move(){
	if(catalog == 1){
	document.querySelector(".card_move").style.left = "0%";
		}
	if(catalog == 2){
	document.querySelector(".card_move").style.left = "-100%";
		}
	if(catalog == 3){
	document.querySelector(".card_move").style.left = "-200%";
	}
}








/*let health = 100;
let hungry = 100;

if ( health<20){
	console.log('Тебе не здоровиться')
}*/