const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
	 const now = new Date();
	 
	 // seconds
	 const seconds = now.getSeconds();
	 const secondsDegrees = ((seconds / 60) * 360) + 90;
	 secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	 
	 // fix "looping" issue
	 if(seconds == 0) {
	 	secondHand.classList.add('top');
	 } else if(seconds == 1) {
	 	secondHand.classList.remove('top');
	 }
	 
	 // minutes
	 const minutes = now.getMinutes();
	 const minutesDegrees = ((minutes / 60) * 360) + 90;
	 minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	 
	 // minutes
	 const hours = now.getHours();
	 const hoursDegrees = ((hours / 12) * 360) + 90;
	 hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);



// after minute & hour hand finish initial transform, add class "slow"
minuteHand.addEventListener('transitionend', goSlow);
hourHand.addEventListener('transitionend', goSlow);

function goSlow() {
	this.classList.add('slow');
}
