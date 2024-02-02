export function displayMessage(container = "#message", message = "There was an unexpected error", messageType = "error") {
	let parent = container;
	if (typeof container === "string") {
		parent = document.querySelector(container);
	}

	parent.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
