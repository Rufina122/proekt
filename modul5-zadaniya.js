/*
  MODUL-5. Итоговые задания по темам:
  1. Введение в JavaScript
  2. Типы данных и арифметические операторы
  3. Методы Math и условные операторы
  4. String методы
  5. Object

  Инструкция: прочитай задание в комментарии и напиши решение
  сразу под ним (в этом же блоке, под словом "// Решение:").
  Просто использовать console.log() для проверки результата.
*/


/* ЗАДАНИЕ 1
   Объяви 4 переменные разных типов: string, number, boolean, undefined.
   Выведи в консоль тип каждой переменной с помощью typeof.
*/
// Решение:
let string ="hello";
let number =123;
let boolean =true;
let undefield
console.log(typeof string ,
   typeof number,
   typeof boolean,
   typeof undefield
)
/* ЗАДАНИЕ 2
   Дано два числа: a = 17, b = 5.
   Выведи в консоль результат сложения, вычитания, умножения,
   деления и остатка от деления (%) этих чисел.
*/
// Решение:
let addition= 17+5
let subtraction= 17-5
let multiplication= 17*5
let division = 17/5
let remainder= 17%5
console.log(addition, subtraction,multiplication,division, remainder )
/* ЗАДАНИЕ 3
   Переменная price хранится как строка: let price = "1200".
   Преврати её в число и прибавь к ней 300.
   Выведи результат и его тип (typeof).
*/
// Решение:
let price = "1200";


let num = Number(price); 
console.log(num+300 , typeof num )



/* ЗАДАНИЕ 4
   Дано число x = -87.6543.
   С помощью методов Math выведи в консоль:
   - его модуль (без минуса)
   - округлённое вверх значение
   - округлённое вниз значение
   - округлённое по правилам математики значение
*/
// Решение:
let x = -87.6543
console.log(Math.abs(x), Math.ceil(x) ,Math.floor(x),Math.round(x))

/* ЗАДАНИЕ 5
   С помощью Math.random() и Math.floor() сгенерируй
   случайное целое число от 1 до 100 (включительно).
*/
// Решение:
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);



/* ЗАДАНИЕ 6
   Дано число n = 9.
   С помощью Math.pow найди n в квадрате (n^2).
   С помощью Math.sqrt найди квадратный корень из n.
   Выведи оба результата в консоль.
*/
// Решение:
const n = 9;
const squared = Math.pow(n, 2);
const sqrt = Math.sqrt(n);
console.log( squared , sqrt);




/* ЗАДАНИЕ 7
   Дано число age = 16.
   Напиши условие if...else, которое выводит:
   - "Ребёнок" если возраст меньше 12
   - "Подросток" если от 12 до 17
   - "Взрослый" если 18 и больше
*/
// Решение:
let age = 16;

if (age < 12) {
    console.log("Ребёнок");
} else if (age >= 12 && age <= 17) {
    console.log("Подросток");
} else {
    console.log("Взрослый");
}



/* ЗАДАНИЕ 8
   Дано число num = 23.
   Проверь с помощью оператора % и if...else, чётное это число или нечётное.
   Выведи "Чётное" или "Нечётное".
*/
// Решение:
let numb = 23;

if (numb % 2 === 0) {
    console.log("Чётное");
} else {
    console.log("Нечётное");
}



/* ЗАДАНИЕ 9
   Дано число day = 3 (день недели, где 1 - понедельник).
   С помощью цепочки if...else if выведи название дня недели.
   Если число не от 1 до 7 — выведи "Некорректный день".
*/
// Решение:
let day = 3;

if (day === 1) {
    console.log("Понедельник");
} else if (day === 2) {
    console.log("Вторник");
} else if (day === 3) {
    console.log("Среда");
} else if (day === 4) {
    console.log("Четверг");
} else if (day === 5) {
    console.log("Пятница");
} else if (day === 6) {
    console.log("Суббота");
} else if (day === 7) {
    console.log("Воскресенье");
} else {
    console.log("Некорректный день");
}




/* ЗАДАНИЕ 10
   Дана строка let city = "tashkent".
   Выведи:
   - длину строки
   - строку с заглавной первой буквой ("Tashkent")
   - строку полностью в верхнем регистре
*/
// Решение:
let city = "tashkent";
console.log(city.length , city[0].toUpperCase() + city.slice(1) , city.toUpperCase());
 

/* ЗАДАНИЕ 11
   Дана строка let email = "  student@mars.uz  ".
   Убери лишние пробелы по краям, проверь содержит ли строка "@",
   и раздели её на две части: имя пользователя и домен (по символу "@").
*/
// Решение:
let email = " student@mars.uz ";
let trimmedEmail = email.trim();
let hasAtSymbol = trimmedEmail.includes('@');
let [username, domain] = trimmedEmail.split('@');
console.log(trimmedEmail ,hasAtSymbol, username,domain);


/* ЗАДАНИЕ 12
   Даны переменные let name = "Aziz", age = 15.
   С помощью шаблонной строки (template literals) выведи:
   "Меня зовут Aziz, мне 15 лет."
*/
// Решение:
let name = 'Aziz';
let Age = 15;
console.log(`Меня зовут ${name}, мне ${Age} лет.`);

/* ЗАДАНИЕ 13
   Создай объект student с полями: name, age, course (например "JavaScript").
   Выведи все три значения через точку и через квадратные скобки.
   Добавь в объект новое поле grade со значением "A".
*/
// Решение:
const student = {
    name: "Алексей",
    age: 21,
    course: "JavaScript"
};
console.log(`Доступ через точку: ${student.name}, ${student.age}, ${student.course}
Доступ через квадратные скобки: ${student['name']}, ${student['age']}, ${student['course']}`);
student.grade = "A";
console.log("Обновленный объект student:", student);


/* ЗАДАНИЕ 14
   Создай объект product с полями name, price, inStock (true/false).
   Напиши условие: если inStock === true, вывести
   "Товар <name> доступен, цена: <price>",
   иначе вывести "Товара <name> нет в наличии".
*/
// Решение:
const product = {
  name: "Ноутбук",
  price: 45000,
  inStock: true
};
if (product.inStock === true) {
  console.log(`Товар ${product.name} доступен, цена: ${product.price}`);
} else {
  console.log(`Товара ${product.name} нет в наличии`);
}



/* ЗАДАНИЕ 15 (со звёздочкой)
   Создай объект user с вложенным объектом address:
   {
     name: "Malika",
     balance: 45000,
     address: { city: "Tashkent", street: "Amir Temur" }
   }
   Выведи город из адреса. Затем с помощью Math округли balance
   до ближайшей сотни и выведи фразу:
   "Malika живёт в Tashkent, баланс: <округлённое число>"
*/
// Решение:
const user = {
  name: "Malika",
  balance: 45000,
  address: {
    city: "Tashkent",
    street: "Amir Temur"
  }
};

const City = user.address.city;
console.log(City);

const roundedBalance = Math.round(user.balance / 100) * 100;

console.log(`${user.name} живёт в ${City}, баланс: ${roundedBalance}`);
