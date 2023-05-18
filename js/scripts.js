function handleForm(event) {
	event.preventDefault();

	const userSelections = document.querySelectorAll("input[name=grocery-item]:checked");
	let userSelectionsArray = Array.from(userSelections);
	const ul = document.querySelector("ul");
	const groceryForm = document.getElementById("grocery-list");
	groceryForm.setAttribute("class", "hidden");
	let sortedUserSelectionsArray = [];
	userSelectionsArray.forEach(element =>{
		sortedUserSelectionsArray.push(element.value.toUpperCase());
	});

	sortedUserSelectionsArray.sort();

	sortedUserSelectionsArray.forEach(function(element) {
		const li = document.createElement("li");
		li.append(element);
		ul.append(li);
	});
}

window.addEventListener("load", function() {
	document.querySelector("form#grocery-list").addEventListener("submit", handleForm);
});