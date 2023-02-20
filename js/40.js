// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. 
// Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, 
// а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

// Объявлена переменная authors
// Значение переменной authors это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// Объявлена переменная authorsInAlphabetOrder
// Значение переменной authorsInAlphabetOrder это массив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// Объявлена переменная authorsInReversedOrder
// Значение переменной authorsInReversedOrder это массив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
// Использован метод sort()

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);