// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом 
// инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

// Объявлена функция makePizza
// Функция makePizza принимает два параметра
// Вторым аргументом при вызове makePizza("Ultracheese") передана функция eatPizza с единственным параметром pizzaName

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});


makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}.`);
});




