// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел 
// из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

// Объявлена переменная numbers
// Значение переменной numbers это массив [17, 24, 82, 61, 36, 18, 47, 52, 73]
// Объявлена переменная evenNumbers
// Значение переменной evenNumbers это массив [24, 82, 36, 18, 52]
// Объявлена переменная oddNumbers
// Значение переменной oddNumbers это массив [17, 61, 47, 73]
// Для перебора массива numbers использован метод filter()

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);
 

