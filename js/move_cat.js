function catIsGone() {
	cat.style.display = "none";
}

const cat = document.getElementById('myCat');
const score = document.getElementById('score');
var clickCount = 0;

const changePositionHandler = () => {
	cat.style.position = "absolute";
	// TODO: account for cat size when calculating position
	cat.style.left =  Math.random() * 80 + "%";
	cat.style.top =  Math.random() * 80 + "%";
}

const resetTimerHandler = () => {
	window.clearTimeout(timeoutHandle);
	timeoutHandle = window.setTimeout(catIsGone, 1000);
}

const increaseCountHandler = () => {
	score.innerText = parseInt(score.innerText) + 1;
}


timeoutHandle = window.setTimeout(catIsGone, 1000);
cat.addEventListener('click', changePositionHandler);
cat.addEventListener('click', resetTimerHandler);
cat.addEventListener('click', increaseCountHandler);
