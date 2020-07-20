var mas = document.getElementById("mas");
var otros =document.getElementById("otros");

function mostrar() {
	otros.style.display = "block";}
	

mas.style.cursor = "pointer";
mas.addEventListener("click", mostrar);