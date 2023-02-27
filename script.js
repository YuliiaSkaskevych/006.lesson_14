//task 1
let numbers = [];
for (let i=20; i<=30; i+=0.5){
    numbers.push(i);
}
let task1Numbers = numbers.join(' ');
alert(task1Numbers);

//task 2
const oneDollar = 27;
let task2Numbers = [];
for (let i=10; i<=100; i+=10){
    task2Numbers.push(i*oneDollar);
}
let dollars = task2Numbers.join('$ ');
alert(dollars);

//task 3
let task3Number = parseInt(prompt('Task 3. Please enter number:', '5'));
let task3Numbers = [];
for (let i = 1; i <= 100; i++) {
    if (i ** 2 > task3Number) {
        break;
    }
    task3Numbers.push(i);
}
alert(task3Numbers);

// task 4
let task4Number = parseInt(prompt('Task4. Please enter number:', '5'));
let number = 2;
while (number < task4Number) {
    if (task4Number % number === 0) {
        alert(` Number ${task4Number} is not a primary number`);
        break;
    } else if (
        task4Number % number > 0 &&
        number === task4Number - 1
    ) {
        alert(` Number ${task4Number} is a primary number`);
    }
    number++
}

//task 5
let task5Number = parseFloat(prompt('Task 5. Please enter number:', '5'));
let num = 3;
let toPower = 0;
let result = num ** toPower;

while (result <= task5Number) {
    if (task5Number === result) {
        alert(`Number ${task5Number} is ${num} in the power of ${toPower}`);
        break;
    }
    toPower++;
    result = num ** toPower;
    if (result > task5Number) {
        alert(`Number ${task5Number} is not ${num} in any power`);
    }
}