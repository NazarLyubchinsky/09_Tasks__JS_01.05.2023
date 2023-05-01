const images = ["img/OIP.jpeg", "img/OIP (1).jpeg", "img/OIP(2).jpeg"];

const galleryImage = document.getElementById("gallery-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

nextBtn.addEventListener("click", function () {
	currentIndex++;
	updateGallery();
});

prevBtn.addEventListener("click", function () {
	currentIndex--;
	updateGallery();
});

function updateGallery() {
	galleryImage.src = images[currentIndex];

	if (currentIndex === 0) {
		prevBtn.disabled = true;
	} else {
		prevBtn.disabled = false;
	}

	if (currentIndex === images.length - 1) {
		nextBtn.disabled = true;
	} else {
		nextBtn.disabled = false;
	}
}

updateGallery();


