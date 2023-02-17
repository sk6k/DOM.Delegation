// const arr = [1, 2, 3, 4, 5, 6, 7];
// let total = 0;

// arr.forEach((el) => (total += el));

// console.log(total);

// const square = arr.map((el) => el * el);

// console.log(square);

// const every = arr.every((el) => el > 0);
// console.log(every);

// const some = arr.some((el) => el < 0);
// console.log(some);

// const lessThanZero = arr.filter((el) => el < 0);
// console.log(lessThanZero);

// const evenNumbers = arr.filter((el) => el % 2 === 0 && el > 0);
// console.log(evenNumbers);

// const lessThanFiveSymbol = arr.filter((el) => el.length < 5);
// console.log(lessThanFiveSymbol);

// const arrsOfarray = arr.filter((el) => Array.isArray(el));
// console.log(arrsOfarray);

// const result = arr.filter((el) => el < 0).length;
// console.log(result);

// const total = arr.reduce((previous, el) => {
// 	return previous + el;
// });
// console.log(total);

// const cars = [
// 	{
// 		make: "Honda",
// 		model: "CR-V",
// 		type: "suv",
// 		amount: 14,
// 		price: 24045,
// 		onSale: true,
// 	},
// 	{
// 		make: "Honda",
// 		model: "accord",
// 		type: "sedan",
// 		amount: 2,
// 		price: 22455,
// 		onSale: true,
// 	},
// 	{
// 		make: "Honda",
// 		model: "Accord",
// 		type: "sedan",
// 		amount: 2,
// 		price: 22455,
// 		onSale: true,
// 	},
// 	{
// 		make: "Mazda",
// 		model: "Mazda 6",
// 		type: "sedan",
// 		amount: 8,
// 		price: 24195,
// 		onSale: false,
// 	},
// 	{
// 		make: "Mazda",
// 		model: "CX-9",
// 		type: "suv",
// 		amount: 7,
// 		price: 31520,
// 		onSale: true,
// 	},
// 	{
// 		make: "Toyota",
// 		model: "4Runner",
// 		type: "suv",
// 		amount: 19,
// 		price: 34210,
// 		onSale: false,
// 	},
// 	{
// 		make: "Toyota",
// 		model: "Sequoia",
// 		type: "suv",
// 		amount: 16,
// 		price: 45560,
// 		onSale: false,
// 	},
// 	{
// 		make: "Toyota",
// 		model: "Tacoma",
// 		type: "truck",
// 		amount: 4,
// 		price: 24320,
// 		onSale: true,
// 	},
// 	{
// 		make: "Ford",
// 		model: "F-150",
// 		type: "truck",
// 		amount: 11,
// 		price: 27110,
// 		onSale: true,
// 	},
// 	{
// 		make: "Ford",
// 		model: "Fusion",
// 		type: "sedan",
// 		amount: 13,
// 		price: 22120,
// 		onSale: true,
// 	},
// 	{
// 		make: "Ford",
// 		model: "Explorer",
// 		type: "suv",
// 		amount: 6,
// 		price: 31660,
// 		onSale: false,
// 	},
// ];

// console.log(window);
// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінeнним значенням властивості price залежно від переданої знижки (%).
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// function makeCarsWithDiscount(arr, discount) {
// 	return arr.map((item) => {
// 		item.price = (item.price / 100) * (100 - discount);
// 		return item;
// 	});
// }

// console.log(makeCarsWithDiscount(cars, 6));
// console.table(makeCarsWithDiscount(cars, 11));

// Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша за значення параметра threshold.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// function filterByPrice(arr, threshold) {
// 	return arr.filter(({ price }) => price < threshold);
// }

// console.log(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// function getCarsWithDiscount(arr) {
// 	return arr.filter(({ onSale }) => onSale);
// }

// console.log(getCarsWithDiscount(cars));

// Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається зі значенням параметра type.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getCarsWithType = (arr, key) => arr.filter(({ type }) => type === key);

// console.log(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

// // Example 6 - Метод find
// Функція getCarByModel знаходить та повертає об'єкт даної моделі авто та повертає його
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getCarByModel = (arr, model) =>
// 	arr.find(({ model: carModel }) => carModel === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

// Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за збільшенням значення властивості amount.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// function sortByAscendingAmount(arr) {
// 	return [...arr].sort((a, b) => a.amount - b.amount);
// }

// console.table(sortByAscendingAmount(cars));

// Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів, відсортований за зменшенням значення властивості price.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const sortByDescendingPrice = (cars) => {
// 	return [...cars].sort((a, b) => b.price - a.price);
// };

// console.table(sortByDescendingPrice(cars));

// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному  порядку.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const sortByModel = (cars) => {
// 	return [...cars].sort((a, b) => a.model.localeCompare(b.model));
// };

// console.table(sortByModel(cars));
// console.table(sortByModel(cars));

// Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getTotalAmount = (cars) =>
// 	cars.reduce((previous, { amount }, idx, arr) => {
// 		return previous + amount;
// 	}, 0);

// console.log(getTotalAmount(cars));

// Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі.
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getModelsOnSale = (cars) => {
// 	return cars
// 		.reduce((acc, el) => {
// 			if (el.onSale) {
// 				acc.push(el);
// 			}
// 			return acc;
// 		}, [])
// 		.map(({ model }) => model);
// };

// const getModelsOnSale = (cars) =>
// 	cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.log(getModelsOnSale(cars));

// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає список (Марка, Модель кількість та Ціна) автомобілів на розпродажі (властивість onSale), відсортованих за зростанням ціни.
// Кількість автомобілів ХХ:
// 1...Марка Модель кількість Ціна
// 2...
// Якщо не знайдено жодного автомобіля повертається стрінга
// "За вашим запитом не знайдено жодного автомобіля"
// {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true
// },

// const getSortedCarsOnSale = (cars) => {
// 	const response = cars
// 		.filter(({ onSale }) => onSale)
// 		.sort((a, b) => a.price - b.price);

// 	return (str = response.reduce(
// 		(acc, { make, model, amount, price }, idx) => {
// 			return acc + `${idx + 1}.${make} ${model} ${amount} ${price}\n`;
// 		},
// 		response.length
// 			? `Кількість автомобілів ${response.length}:\n`
// 			: "За вашим запитом не знайдено жодного автомобіля"
// 	));
// };

// console.log(getSortedCarsOnSale(cars));

// const students = [
// 	{
// 		name: "Манго",
// 		courses: ["математика", "фізика"],
// 	},
// 	{
// 		name: "Полі",
// 		courses: ["інформатика", "математика"],
// 	},
// 	{
// 		name: "Ківі",
// 		courses: ["фізика", "біологія"],
// 	},
// ];

// const allCourses = students.flatMap((student) => student.courses);
// console.log(allCourses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// const uniqueCourses = allCourses.filter(
// 	(course, index, array) => array.indexOf(course) === index
// );

// // console.log(uniqueCourses);

// const obj = {
// 	name: "USER",
// 	arrow: () => {
// 		console.log(this);
// 	},
// };

// obj.arrow();

// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує та повертає загальну вартість каменів з таким ім'ям,
// ціною та кількістю із властивості stones.

// const chopShop = {
// 	stones: [
// 		{ name: "Emerald", price: 1300, quantity: 4 },
// 		{ name: "Diamond", price: 2700, quantity: 3 },
// 		{ name: "Sapphire", price: 1400, quantity: 7 },
// 		{ name: "Ruby", price: 800, quantity: 2 },
// 	],
// 	calcTotalPrice(stoneName) {
// 		const stone = this.stones.find(({ name }) => name === stoneName);
// 		if (stone) {
// 			return stone.price * stone.quantity;
// 		}
// 		return "error";
// 	},
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
//   console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
//   console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice("qwerty"));

// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.
// function generateId() {
// 	console.log("hello");
// }
// const phonebook = {
// 	contacts: [],
// 	add(contact) {
// 		const newContact = {
// 			list: "default",
// 			...contact,
// 			id: this.generateId(),
// 			createdAt: this.getDate(),
// 		};
// 		this.contacts.push(newContact);
// 	},
// 	generateId() {
// 		return "_" + Math.random().toString(36).substr(2, 9);
// 	},
// 	getDate() {
// 		return new Date();
// 	},
// };

// phonebook.add({
// 	name: "Mango",
// 	email: "mango@mail.com",
// 	list: "friends",
// }),
// 	phonebook.add({
// 		name: "Poly",
// 		email: "poly@hotmail.com",
// 	});
// console.log(phonebook);

// Example 3 - Калькулятор
// Створіть об'єкт calculator із трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
// const calculator = {
// 	a: 0,
// 	b: 0,

// 	read(a, b) {
// 		this.a = a || 0; // 0, NaN, null, undefined, "", false
// 		this.b = b ?? 0; // null, undefined
// 	},

// 	add() {
// 		return this.a + this.b;
// 	},
// 	mult() {
// 		return this.a * this.b;
// 	},
// };

// calculator.read(7, 6789);
// console.log(calculator.add());
// console.log(calculator.mult());
