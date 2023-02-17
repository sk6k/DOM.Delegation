// class User {
// 	constructor({ name = "", age = 1, numberOfPosts = 1, topics = [] }) {
// 		this.email = name;
// 		this.age = age;
// 		this.numberOfPosts = numberOfPosts;
// 		this.topics = topics;
// 	}
// 	getinfo() {
// 		return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
// 	}

// 	updatePostCount(value) {
// 		this.numberOfPosts += value;
// 	}
// }

// const mango = new User({
// 	name: "mango@mail.com",
// 	age: 24,
// 	numberOfPosts: 20,
// 	topics: ["tech", "cooking"],
// });
// console.log(mango);

// console.log(mango.getinfo());

// mango.updatePostCount(3);

// console.log(mango.getinfo());

// class Storage {
// 	constructor(items) {
// 		this.items = items;
// 	}

// 	getItems() {
// 		return this.items;
// 	}

// 	addItem(item) {
// 		this.items.push(item);
// 	}

// 	removeItem(item) {
//         const idx = this.items.indexOf(item);
//         // -(idx + 1) === ~idx;

// 		if (!!~idx) {
// 			this.items.splice(idx, 1);
// 		}
// 	}
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// console.log(storage.getItems());
// storage.addItem("j");
// console.log(storage.getItems());
// storage.removeItem("j");
// storage.removeItem("🍋");
// console.log(storage.getItems());

// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
// 	#login;
// 	#email;
// 	constructor(login, email) {
// 		this.#login = login;
// 		this.#email = email;
// 	}

// 	get login() {
// 		return this.#login;
// 	}
// 	set login(newLogin) {
// 		this.#login = newLogin;
// 	}

// 	get email() {
// 		return this.#email;
// 	}

// 	set email(newEmail) {
// 		this.#email = newEmail;
// 	}
// }

// const andy = new User("lisostep", "lis@mail.com");

// console.log(andy);

// console.log(andy.login);

// andy.login = "stepolis";

// console.log(andy.login);

// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
// 	static Priority = {
// 		LOW: "low",
// 		NORMAL: "normal",
// 		HIGH: "high",
// 	};
// 	constructor(arr) {
// 		this.items = arr;
// 	}
// 	addNote(note) {
// 		this.items.push(note);
// 	}
// 	removeNote(text) {
// 		for (let i = 0; i < this.items.length; i++) {
// 			if (this.items[i].text === text) {
// 				this.items.splice(i, 1);
// 				return;
// 			}
// 		}
// 		console.log("no item");
// 	}

// 	updateNote(text, newPriority) {
// 		for (const item of this.items) {
// 			if (item.text === text) {
// 				item.priority = newPriority;
// 				return;
// 			}
// 		}
// 		console.log("no item");
// 	}
// }
// const myNotes = new Notes([]);
// console.log(myNotes);

// myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
// 	text: "Моя друга замітка",
// 	priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote("Моя перша замітка");
// console.log(myNotes.items);

// myNotes.updateNote("Моя друга замітка", Notes.Priority.HIGH);
// console.log(myNotes.items);

// Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// class Toggle {
// 	static ON = {
// 		isOpen: false,
// 	};
// 	constructor(obj = {}) {
// 		this.on = Toggle.ON;
// 		if (obj) {
// 			this.on = obj;
// 		}
// 		// this.on = obj;
// 	}
// 	toggle() {
// 		this.on.isOpen = !this.on.isOpen;
// 	}
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.log(firstToggle);
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");

//-----------------------------------------TASK 1------------------------------------------//
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//     griffindor: [{
//             name: "Harry",
//             points: 17
//         },
//         {
//             name: "Hermiona",
//             points: 19
//         },
//         {
//             name: "Ron",
//             points: 14
//         },
//     ],
//     sliserin: [{
//             name: "Draco",
//             points: 17
//         },
//         {
//             name: "Goyl",
//             points: 14
//         },
//         {
//             name: "Crabbe",
//             points: 5
//         },
//     ],
// }

// -----------------------------------------TASK 2------------------------------------------//
// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [{
//     name: `Lika`,
//     language: `html`

// }, {
//     name: `Anton`,
//     language: `css`

// }, {
//     name: `Andriy`,
//     language: `js`

// }, {
//     name: `Vova`,
//     language: `html`

// }, {
//     name: `Alina`,
//     language: `css`

// }, {
//     name: `Egor`,
//     language: `js`

// }, {
//     name: `Aleksandr`,
//     langunage: `html`

// }, {
//     name: `Taras`,
//     language: `css`

// }, {
//     name: `Ivan`,
//     language: `js`

// }, {
//     name: `Make`,
//     language: `html`

// }, ];

// -----------------------------------------TASK 3------------------------------------------//
// // Порахувати скільки ззаробив кожен  юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )

// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);

// // const workers = [{
// //         name: 'Alex',
// //         salary: 3500,
// //         month: 12,
// //     },
// //     {
// //         name: 'Dima',
// //         salary: 2500,
// //         month: 9,
// //     },
// //     {
// //         name: 'Oleg',
// //         salary: 1500,
// //         month: 36,
// //     },
// // ];

// -----------------------------------------TASK 4------------------------------------------//
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
//     { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"], age: 26},
// ]

// -----------------------------------------TASK 5------------------------------------------//
// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

// const bankSystem = {
//     privat : 1000,
//     mono : 1500,

// }

// -----------------------------------------TASK 6------------------------------------------//
// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

// const people1 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
//     {
//         name: 'Eva',
//         know: ['Alex','Jhon']
//     },
//     {
//         name: 'Jhon',
//         know: [Alex]
//     },
// ] //Not found

// const people2 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: []
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];// Not found

// const people3 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ]; // Jhon

// -----------------------------------------TASK 7------------------------------------------//
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
// }]
