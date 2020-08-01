let body = document.querySelector('body');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let css = document.querySelector('h3')

const setGradient = () => {
	body.style.background =
	 "linear-gradient(to left, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
