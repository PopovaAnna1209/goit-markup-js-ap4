// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, 
// и получить общую сумму этих времён. Рассчитать время для каждого из игроков, 
// можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

// Объявлена переменная players
// Значение переменной players это массив объектов игроков
// Объявлена переменная totalAveragePlaytimePerGame
// Значение переменной totalAveragePlaytimePerGame это число 1023
// Для перебора массива players используется метод reduce()

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.map(player => player.playtime / player.gamesPlayed).reduce((total, time) => {
  return total + time;
}, 0);

console.log(totalAveragePlaytimePerGame);


