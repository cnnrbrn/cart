export function renderAllJackets(items, container) {
	container.innerHTML = "";

	for (let i = 0; i < items.length; i++) {
		const item = items[i];

		const { id, title, price, discountedPrice, onSale, image, description, sizes } = item;

		const isOnSale = item.onSale;

		const productContainer = document.createElement("div");
		productContainer.classList.add("product");

		const imageElement = document.createElement("img");
		imageElement.classList.add("product-images");
		imageElement.src = image;
		imageElement.alt = "Product Image";

		const titleElement = document.createElement("h2");
		titleElement.textContent = title;

		const descriptionElement = document.createElement("p");
		descriptionElement.textContent = description;

		const priceContainer = document.createElement("div");
		priceContainer.classList.add("products");
		priceContainer.textContent = "Price: ";

		const priceValue = isOnSale ? `$${item.discountedPrice.toFixed(2)}` : `$${item.price.toFixed(2)}`;

		const priceElement = document.createElement("span");
		priceElement.style.color = isOnSale ? "red" : "inherit";
		priceElement.style.textDecoration = isOnSale ? "line-through" : "none";
		priceElement.textContent = priceValue;

		priceContainer.appendChild(priceElement);

		const onSaleElement = document.createElement("div");
		onSaleElement.classList.add("on-sale");
		onSaleElement.style.color = "green";
		onSaleElement.textContent = isOnSale ? `On Sale: $${item.discountedPrice.toFixed(2)}` : "";

		const addToCartButton = document.createElement("button");
		addToCartButton.classList.add("add-cta");
		addToCartButton.dataset.id = item.id;
		addToCartButton.dataset.title = item.title;
		addToCartButton.dataset.price = item.price;
		addToCartButton.dataset.image = item.image;
		addToCartButton.dataset.action = "add-to-cart";
		addToCartButton.textContent = "Add to cart";

		productContainer.appendChild(imageElement);
		productContainer.appendChild(titleElement);
		productContainer.appendChild(descriptionElement);
		productContainer.appendChild(priceContainer);
		productContainer.appendChild(onSaleElement);
		productContainer.appendChild(addToCartButton);

		container.appendChild(productContainer);
	}
}
