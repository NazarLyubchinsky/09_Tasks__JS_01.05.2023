window.onload = function () {
	const slider = document.getElementById("pointer");
	const output = document.getElementById("result");
	output.innerHTML = slider.value;

	slider.oninput = function () {
		output.innerHTML = this.value;
	}
}
