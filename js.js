function show() {
	document.querySelector('#kuz').style.display = "block";
	document.querySelector('#kuz').style.background = "white";
	
}
function order() {
	document.querySelector('.order').style.top = "69px";

	setTimeout(function() {
		document.querySelector('.order').style.top = "-69px";
	}, 5000);
}