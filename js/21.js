// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых 
// (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с 
// именем (свойство author) которое совпадает со значением в переменной AUTHOR.
// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная MIN_RATING
// Значение переменной MIN_RATING это число 8
// Объявлена переменная AUTHOR
// Значение переменной AUTHOR это строка "Bernard Cornwell"
// Объявлена переменная topRatedBooks
// Значение переменной topRatedBooks это массив книг с рейтингов выше 8
// Объявлена переменная booksByAuthor
// Значение переменной booksByAuthor это массив книг автор которых "Bernard Cornwell"
// Для перебора массива books использован метод filter()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

  console.log(topRatedBooks);
  console.log(booksByAuthor);
 