// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
// Объявлена переменная firstArray
// Значение переменной firstArray это массив [26, 94, 36, 18]
// Объявлена переменная secondArray
// Значение переменной secondArray это массив [17, 61, 23]
// Объявлена переменная thirdArray
// Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18]
// Объявлена переменная eachElementInFirstIsEven
// Значение переменной eachElementInFirstIsEven это буль true
// Объявлена переменная eachElementInFirstIsOdd
// Значение переменной eachElementInFirstIsOdd это буль false
// Объявлена переменная eachElementInSecondIsEven
// Значение переменной eachElementInSecondIsEven это буль false
// Объявлена переменная eachElementInSecondIsOdd
// Значение переменной eachElementInSecondIsOdd это буль true
// Объявлена переменная eachElementInThirdIsEven
// Значение переменной eachElementInThirdIsEven это буль false
// Объявлена переменная eachElementInThirdIsOdd
// Значение переменной eachElementInThirdIsOdd это буль false
// Для перебора массивов использован метод every()

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);
console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);
console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd);



