// Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
// Объявлена переменная books
// Значение переменной books это массив
// Объявлена переменная BOOK_TITLE
// Значение переменной BOOK_TITLE это строка "The Dream of a Ridiculous Man"
// Объявлена переменная AUTHOR
// Значение переменной AUTHOR это строка "Robert Sheckley"
// Объявлена переменная bookWithTitle
// Значение переменной bookWithTitle это объект книги с названием выше "The Dream of a Ridiculous Man"
// Объявлена переменная bookByAuthor
// Значение переменной bookByAuthor это объект книги автора "Robert Sheckley"
// Для перебора массива books использован метод find()

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

  console.log(bookWithTitle);
  console.log(bookByAuthor);


