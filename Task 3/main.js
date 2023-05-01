let headers = document.querySelectorAll('.info-header');

headers.forEach(header => {
	header.addEventListener('click', () => {
		let infoBlock = header.parentNode;
		let isOpen = infoBlock.classList.contains('open');

		closeAllInfoBlocks();

		if (!isOpen) {
			infoBlock.classList.add('open');
		}
	});
});

function closeAllInfoBlocks() {
	let infoBlocks = document.querySelectorAll('.info-block');
	infoBlocks.forEach(block => {
		block.classList.remove('open');
	});
}
