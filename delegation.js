// const instruments = [
// 	{
// 		id: 1,
// 		img: "https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg",
// 		name: "Молоток",
// 		price: 150,
// 	},
// 	{
// 		id: 2,
// 		img: "https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg",
// 		name: "Перфоратор",
// 		price: 3000,
// 	},
// 	{
// 		id: 3,
// 		img: "https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg",
// 		name: "Рівень",
// 		price: 2000,
// 	},
// ];

// const list = document.querySelector(".list");

// const markup = instruments.reduce(
// 	(acc, { id, img, name, price }) =>
// 		acc +
// 		`<li data-product-id="${id}" class="js-item">
//             <img src="${img}" alt="${name}" width="150">
//                 <h2>${name}</h2>
// 				<h3>Ціна:${price}</h3>
// 				<button type="button" class="js-cart">Add to cart</button>
// 				<button type="button" class="js-favorite">Add to favorite</button></li>
// 				`,
// 	""
// );

// list.insertAdjacentHTML("beforeend", markup);

// const basket = [];
// const favorite = [];

// list.addEventListener("click", onClick);

// function onClick(event) {
// 	if (event.target.nodeName !== "BUTTON") {
// 		return;
// 	}
// 	if (event.target.classList.contains("js-cart")) {
// 		const product = { ...getElement(event.target) };
// 		basket.push(product);
// 		console.log(basket);
// 	} else if (event.target.classList.contains("js-favorite")) {
// 		const product = { ...getElement(event.target) };
// 		const haveProduct = favorite.find(({ id }) => id === product.id);

// 		if (haveProduct) {
// 			haveProduct.qty += 1;
// 		} else {
// 			product.qty = 1;
// 			favorite.push(product);
// 		}

// 		console.log("favorite:", favorite);
// 	}
// }

// /**
//  * Find and return current product
//  * @param {Object} elem
//  * @returns {Object}
//  */
// function getElement(elem) {
// 	const currentElement = elem.closest(".js-item");
// 	const productId = Number(currentElement.dataset.productId);
// 	const product = instruments.find(({ id }) => id === productId);
// 	return product;
// }
