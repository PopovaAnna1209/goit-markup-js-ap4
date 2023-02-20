// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, 
// рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// Объявлена переменная books
// Значение переменной books это исходный массив объектов
// Объявлена переменная MIN_BOOK_RATING
// Значение переменной MIN_BOOK_RATING это число 8
// Объявлена переменная names
// Значение переменной names это массив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Нет объявленых переменных кроме books, MIN_BOOK_RATING и names
// Используется цепочка методов filter, map, sort

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
    {
      title: "The Dreams in the Witch House",
      author: "Howard Lovecraft",
      rating: 8.67,
    },
  ];
  const MIN_BOOK_RATING = 8;

  
  const names = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author)).filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author);

  console.log(names);