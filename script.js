//your JS code here. If required.
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
	alert(counter.innerHTML); 
    counter.innerHTML = Number(counter.innerHTML) + 1; 
});