// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. 
// Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// Объявлена переменная players
// Значение переменной players это объект игроков с игровым временем каждого
// Объявлена переменная playtimes
// Значение переменной playtimes это массив [1270, 468, 710, 244]
// Объявлена переменная totalPlayTime
// Значение переменной totalPlayTime это число 2692
// Для перебора массива playtimes используется метод reduce()
// Объявлена переменная averagePlayTime
// Значение переменной averagePlayTime это число 673

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((total, time) => {
  return total + time;
}, 0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime);
console.log(averagePlayTime);