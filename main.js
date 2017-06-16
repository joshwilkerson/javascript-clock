// clock face elements
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');


// get starting time value (on page load)
const now = new Date();
const seconds = now.getSeconds();
const minutes = now.getMinutes();
const hours = now.getHours();


// set initial hands position
let secondsDegrees = ((seconds / 60) * 360) + 90;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

let minutesDegrees = ((minutes / 60) * 360) + 90;
minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

let hoursDegrees = (((hours / 12) * 360) + 90) + (minutes*.5);
hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


// minute hand (triggered when second hand gets to top)
function moveMinuteHand() {
	minutesDegrees += 6;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;	
}


// hour hand (triggered when second hand gets to top)
// incremented by .5 degree to give appearance of continual movement
function moveHourHand(){
	hoursDegrees += .5;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}


// putting it all together
function clockMovement() {
	// second hand movement
	secondsDegrees += 6;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;	
	
	// 1 increment prior to top
	if(secondsDegrees == 444) {
		// remove CSS transition to prevent movement jump
		secondHand.classList.add('reset');
		// reset second hand degree value
		secondsDegrees = 84;
		// increment minute and hour hands
		moveMinuteHand();
		moveHourHand();
	}
		
	// re-apply CSS transition property
	if(secondsDegrees == 96) {
		secondHand.classList.remove('reset');
	}	
}

setInterval(clockMovement, 1000);