function handleForm(event) {
	event.preventDefault();
	const userSelections = document.querySelectorAll("input[name=grocery-list]:checked");
	const userSelectionArray = Array.from(userSelections);
}

window.addEventListener("load", function() {
	document.querySelector("form#grocery-list").addEventListener("submit", handleForm);
});