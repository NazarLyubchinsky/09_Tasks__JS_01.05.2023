let text = '';

function showDiv() {
	document.getElementById('editable-text').innerHTML = text;
	document.getElementById('editable-text').style.display = 'block';
	document.getElementById('editable-textarea').style.display = 'none';
	return false;
}

function showTextarea() {
	document.getElementById('editable-textarea').value = text;
	document.getElementById('editable-text').style.display = 'none';
	document.getElementById('editable-textarea').style.display = 'block';
	return false;
}

function handleCtrlE(event) {
	if (event.ctrlKey && event.key === 'e') {
		showTextarea();
		event.preventDefault();
	}
}

function handleCtrlS(event) {
	if (event.ctrlKey && event.key === 's') {
		text = document.getElementById('editable-textarea').value;
		showDiv();
		event.preventDefault();
	}
}

document.addEventListener('keydown', handleCtrlE);
document.addEventListener('keydown', handleCtrlS);