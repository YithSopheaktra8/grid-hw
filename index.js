let gridItems = document.querySelectorAll(".grid-item");
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");
let span = document.getElementsByClassName("close")[0];

gridItems.forEach(function (gridItem) {
	gridItem.addEventListener("click", function () {
		modal.style.display = "flex";
		modalImg.src = this.querySelector("img").src;
		document.body.classList.add("open-modal");
	});
});

span.addEventListener("click", function () {
	modal.style.display = "none";
    document.body.classList.remove("open-modal");
});
