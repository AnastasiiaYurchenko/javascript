// ## Example 1 - Деструктуризація

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// ```js
function calcBMI({weight, height}) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

const user = {
  weight: '88,3',
  height: '1.75',
}

// // Було
// console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );
// ```
// ## Example 3 - Глибока деструктуризація

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// ```js
// function getBotReport(companyName, repairBots, defenceBots) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// console.log(getBotReport(boatCompany)); // "Cyberdyne Systems has 200 bots in stock"
// ```
// function getBotReport(boatCompany) {
//   const {
//     companyName,
//     bots: {
//       repair: repairBots = 0,
//       defence: defenceBots = 0,
//     }
//   } = boatCompany;
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// aбо

// function getBotReport({companyName, bots: {repair: repairBots = 0,
//       defence: defenceBots = 0,}}) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// const boatCompany = {
//   companyName: 'Cyberdyne Systems',
//   bots: {
//     repair: 250,
//     defence: 50,
//   },
// }

// console.log(getBotReport(boatCompany));

// ## Example 4 - Деструктуризація

// Напиши функцію, що приймає об'єкт параметрів із властивостями
// `companyName` та `stock` та виводить звіт про кількість товарів на складі будь-якої
// компанії.

// function getStockReport({ companyName, stock }) {
//   let stockAmount = 0;
//   console.log(companyName);
//   console.log(stock);

//   const stockValues = Object.values(stock);
//   console.log(stockValues);

//   for (const value of stockValues) {
//     stockAmount += value;
//   }
//   return ` ${companyName} has ${stockAmount} bots`
// }

// const company1 = {
//   companyName: 'Cyberdyne Systems',
//   stock: {
//     repairBots: 150,
//     defenceBots: 50,
//     defenceBots2: 50,
//     defenceBots1: 50,
//   },
// };

// const report = getStockReport(company1);
// console.log(report)

// ## Example 5 - Операція spread

// Доповни функцію `createContact(partialContact)` так, щоб вона повертала новий
// об'єкт контакту з доданими властивостями `id` та `createdAt`, а також `list` зі
// значенням "default" якщо в `partialContact` немає такої властивості
// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   }
// }

// або деструктуризація

// function createContact({name, email, list = 'default'}) {
//   return {
//     name,
//     email,
//     list,
//     id: generateId(),
//     createdAt: Date.now(),
//   }
// }

// const contact1 = {
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// }

// const newContact = createContact(contact1);
// console.log(newContact)

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// ## Example 6 - Операція rest

// Напиши функцію `transformUsername(user)` так, щоб вона повертала новий об'єкт із властивістю
// `fullName`, замість `firstName` та `lastName`.

// function transformUserName({ firstName, lastName, ...otherProps }) {
//   return {
//     ...otherProps,
//     fullName: `${firstName} ${lastName}`,
//   }
// }

// const user1 = {
//   id: 1,
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   email: 'j.mercer@mail.com',
//   friendCount: 40,
//   friends: {
//     Anton: 'best',
//     Ivan: 'so so'
//   }
// }

// const newUser = transformUserName(user1);
// console.log(newUser)

