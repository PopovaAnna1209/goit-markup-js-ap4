// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, 
// почта которого (свойство email) совпадает со значением параметра email.

// Объявлена функция getUserWithEmail(users, email)

// Для перебора параметра users используется метод find()

// Если значение параметра email это "shereeanthony@kog.com", функция возвращает объект пользователя с именем Sheree Anthony

// Если значение параметра email это "elmahead@omatom.com", функция возвращает объект пользователя с именем Elma Head

// Если значение параметра email это "blackburndotson@furnigeer.com", функция возвращает объект пользователя с именем Blackburn Dotson

// Если в массиве users нет пользователя с почтой из параметра email, функция возвращает undefined

// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
const getUserWithEmail = (users, email) => users.find(user => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));
console.log(getUserWithEmail(users, ""));

  
  