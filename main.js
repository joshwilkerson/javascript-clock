const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	// add degrees for hour hand (in between main markers)
	const degreesBetween = 30;
	const betweenHourPercent = minutes / 60 * 100;
	const additionalDegrees = degreesBetween * betweenHourPercent / 100;

	// seconds
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	// minutes
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

	// hours
	const hoursDegrees = ((hours / 12) * 360) + 90 + additionalDegrees;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	function addMovement() {
		document.querySelector('.clock-face').classList.add('canMove');
	}

	setTimeout(addMovement, 100);
}

setDate();
setInterval(setDate, 1000);
