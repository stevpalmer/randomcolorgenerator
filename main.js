// This variable stores the "Pick A Color" button
const clickButton = document.getElementById("click-button");

// This variable stores the "Mystery Color" button
const scrollButton = document.getElementById("scroll-button");

// This is a random number function that will create color codes for the randomColor variable
// rgb(255, 255, 255)
function randomNumber(num) {
	return Math.floor(Math.random() * num);
} 
 
// This is a function that changes the colors of the buttons
function colorChange(event) {
	const randomColor = "rgb(" + randomNumber(255) + "," + randomNumber(255) + "," + randomNumber(255) + ")";
	event.target.style.backgroundColor = randomColor;
}

clickButton.onclick = colorChange;

scrollButton.onwheel = colorChange;