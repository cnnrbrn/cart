import { displayMessage } from "../ui/shared/displayMessage.js";
import { handleAddToCartButtons } from "../handlers/handleAddToCartButtons.js";
import { fetchJackets } from "../api/fetchJackets.js";
import { renderAllJackets } from "../ui/jackets/renderAllJackets.js";

export async function displayJackets() {
	const container = document.querySelector("#container");
	try {
		const jackets = await fetchJackets();
		renderAllJackets(jackets, container);
		handleAddToCartButtons();
	} catch (error) {
		console.error(error);
		displayMessage(container, error.message, "error");
	}
}
