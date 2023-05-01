
let bookList = document.getElementById("book-list");
let selectedBooks = [];

bookList.addEventListener("click", function (event) {
	let clickedElement = event.target;

	//Ctrl
	if (event.ctrlKey || event.metaKey) {
		if (selectedBooks.includes(clickedElement)) {
			clickedElement.style.color = "";
			selectedBooks = selectedBooks.filter(book => book !== clickedElement);
		} else {
			clickedElement.style.color = "red";
			selectedBooks.push(clickedElement);
		}
	}
	// Shift 
	else if (event.shiftKey) {
		let currentBookIndex = Array.from(bookList.children).indexOf(clickedElement);
		let lastSelectedBookIndex = Array.from(bookList.children).indexOf(selectedBooks[selectedBooks.length - 1]);
		let minIndex = Math.min(currentBookIndex, lastSelectedBookIndex);
		let maxIndex = Math.max(currentBookIndex, lastSelectedBookIndex);

		for (let i = minIndex; i <= maxIndex; i++) {
			let book = bookList.children[i];
			book.style.color = "green";
			if (!selectedBooks.includes(book)) {
				selectedBooks.push(book);
			}
		}
	}
	// кнопки не затиснуті
	else {
		for (let book of selectedBooks) {
			book.style.color = "";
		}
		selectedBooks = [];
		clickedElement.style.color = "yellow";
		selectedBooks.push(clickedElement);
	}
});
