
let additionalNews = [
	"<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iusto ratione nisi debitis similique essefugit quibusdam, a quos nemo facere omnis dolor soluta amet necessitatibus rerum, veritatis quo velit?</p>",
	"<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iusto ratione nisi debitis similique essefugit quibusdam, a quos nemo facere omnis dolor soluta amet necessitatibus rerum, veritatis quo velit?</p>",
	"<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iusto ratione nisi debitis similique essefugit quibusdam, a quos nemo facere omnis dolor soluta amet necessitatibus rerum, veritatis quo velit?</p>",
	"<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iusto ratione nisi debitis similique essefugit quibusdam, a quos nemo facere omnis dolor soluta amet necessitatibus rerum, veritatis quo velit?</p>",
	"<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iusto ratione nisi debitis similique essefugit quibusdam, a quos nemo facere omnis dolor soluta amet necessitatibus rerum, veritatis quo velit?</p>",
	"<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iusto ratione nisi debitis similique essefugit quibusdam, a quos nemo facere omnis dolor soluta amet necessitatibus rerum, veritatis quo velit?</p>",
	"<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iusto ratione nisi debitis similique essefugit quibusdam, a quos nemo facere omnis dolor soluta amet necessitatibus rerum, veritatis quo velit?</p>",
	"<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iusto ratione nisi debitis similique essefugit quibusdam, a quos nemo facere omnis dolor soluta amet necessitatibus rerum, veritatis quo velit?</p>",
	"<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iusto ratione nisi debitis similique essefugit quibusdam, a quos nemo facere omnis dolor soluta amet necessitatibus rerum, veritatis quo velit?</p>",
	"<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iusto ratione nisi debitis similique essefugit quibusdam, a quos nemo facere omnis dolor soluta amet necessitatibus rerum, veritatis quo velit?</p>"
];

function addNews() {
	let newsList = document.getElementById("news-list");
	for (let i = 0; i < additionalNews.length; i++) {
		let listItem = document.createElement("li");
		listItem.innerHTML = additionalNews[i];
		newsList.appendChild(listItem);
	}
}

window.addEventListener("scroll", function () {

	if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
		addNews();
	}
});