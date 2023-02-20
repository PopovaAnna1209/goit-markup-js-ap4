// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. 
// Обязательно используй метод map().

// Объявлена переменная planets
// Значение переменной planets это массив ["Earth", "Mars", "Venus", "Jupiter"]
// Объявлена переменная planetsLengths
// Значение переменной planetsLengths это массив [5, 4, 5, 7]
// Для перебора массива планет использован метод map()

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet => planet.length);

  console.log(planetsLengths);
