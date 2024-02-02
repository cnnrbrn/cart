import * as storage from "../../helpers/storage/index.js";

export function displayCart() {
	const cart = storage.getCart();
	const container = document.querySelector("#cart");

	if (cart.length === 0) {
		container.innerHTML = "<p>Your cart is empty</p>";
		return;
	}

	cart.forEach((item) => {
		const cartItem = createCartItem(item);
		container.appendChild(cartItem);
	});

	// filter method to remove items from the existing cart array
	// or
	// splice method to remove items from the existing cart array

	// map creates an array from an existing array

	// const itemHtml = cart.map((item) => createCartItem(item));
	// console.log(itemHtml);
	// console.log(...itemHtml);

	// container.append(...itemHtml);

	// const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);
}

function createCartItem(item) {
	const { title, price, image } = item;

	const div = document.createElement("div");
	div.classList.add("cart-item");

	const titleContainer = document.createElement("h5");
	titleContainer.textContent = title;

	const priceContainer = document.createElement("p");
	priceContainer.textContent = price;

	const img = document.createElement("img");
	img.src = image;
	img.alt = title;

	div.appendChild(priceContainer);
	div.appendChild(titleContainer);
	div.appendChild(img);

	return div;
}
