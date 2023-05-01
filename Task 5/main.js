function generateCalendar() {
	let month = document.getElementById("month").value;
	let year = document.getElementById("year").value;
	let date = new Date(year, month - 1, 1);
	let firstDay = date.getDay() === 0 ? 7 : date.getDay();
	let totalDays = new Date(year, month, 0).getDate();
	let dayCount = 1;

	let calendarBody = document.getElementById("calendar-body");
	calendarBody.innerHTML = "";

	for (let row = 1; row <= 6; row++) {
		let newRow = document.createElement("tr");

		for (let col = 1; col <= 7; col++) {
			let newCell = document.createElement("td");

			if (dayCount <= totalDays && (row === 1 && col >= firstDay || row > 1)) {
				newCell.textContent = dayCount;
				dayCount++;
			} else {
				newCell.innerHTML = "&nbsp;";
			}

			newRow.appendChild(newCell);
		}

		calendarBody.appendChild(newRow);
	}


	let monthNames = [
		"січень",
		"лютого",
		"березня",
		"квітня",
		"травня",
		"червня",
		"липня",
		"серпня",
		"вересня",
		"жовтня",
		"листопада",
		"грудня"
	];

	let monthNumber = parseInt(month);
	let monthName = monthNumber >= 1 && monthNumber <= 12 ? monthNames[monthNumber - 1] : month;

	let output = document.createElement("p");
	output.textContent =  monthName + " " + year;
	document.body.appendChild(output);



}
