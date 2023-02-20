// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная 
// по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors 
// копия массива имён авторов authors отсортированная в по алфавиту.

// Объявлена переменная releaseDates
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Объявлена переменная authors
// Значение переменной authors это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Объявлена переменная ascendingReleaseDates
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Объявлена переменная alphabeticalAuthors
// Значение переменной alphabeticalAuthors это массив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// Использован метод sort()

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();


console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);