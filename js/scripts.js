function handleForm(event) {
	event.preventDefault();
	const userSelections = document.querySelectorAll("input[name=grocery-item]:checked");
	const userSelectionsArray = Array.from(userSelections);
	// const alphaArray = userSelectionsArray.sort();

	userSelectionsArray.forEach(function(element) {
		const paragraph = document.createElement("p");
		paragraph.append(element.value);
		document.body.append(paragraph);
	});

	const alphaArray = userSelectionsArray.sort();
	const ul = document.querySelector("ul");
	alphaArray.forEach(function(element) {
		const li = document.createElement("li");
		li.append(element);
		ul.append(li);
	});
}

window.addEventListener("load", function() {
	document.querySelector("form#grocery-list").addEventListener("submit", handleForm);
});