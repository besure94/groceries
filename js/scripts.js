function handleForm(event) {
	event.preventDefault();
	const userSelections = document.querySelectorAll("input[name=grocery-item]:checked");
	const userSelectionsArray = Array.from(userSelections);
	const ul = document.querySelector("ul");
	const alphaArray = userSelectionsArray.sort();

	userSelectionsArray.forEach(function(element) {
		const li = document.createElement("li");
		li.append(element.value);
		ul.append(li);
	});
}

window.addEventListener("load", function() {
	document.querySelector("form#grocery-list").addEventListener("submit", handleForm);
});