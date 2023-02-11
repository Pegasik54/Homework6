// Задание 1

const number = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < number.length; i++ ) {
    console.log(number[i]);
    if (number[i] == 10) break;
    
}

// ЗАДАНИЕ 2

const numb = [1, 5, 4, 10, 0, 3];
console.log(numb.indexOf(4));



// Задание 3 

const numbe = [1, 3, 5, 10, 20];
console.log(numbe.join(' '));


// Задание 4

const arr = [];
const arrEven = [];
const rangeMax = 10;

for (let i = 0; i < 10; i++) {
arr.push(Math.round(Math.random() * rangeMax));
if (arr[i] % 2 === 0) arrEven.push(arr[i]);
}
console.log(arr);
console.log(arrEven);



// Задание 5


let exer = [];
for (let i = 0; i < 3; i++) {
exer[i] = [];
for (let k = 0; k < 3; k++) {
exer[i][k] = Math.round(Math.random() * 10);
}
}
console.log(exer)

// Задание 6


let ex = [1, 1, 1];
ex.push(2, 2, 2);
console.log(ex);


// Задание 7

let array = [9, 8, 7, 'a', 6, 5];
array.sort(). pop();
console.log(array);


// Задание 8 

const massive = [9, 8, 7, 6, 5];
const userNum = prompt('Введите число');
if (userNum === null) {
} else if (massive.includes(+userNum)) {
console.log(`Число ${userNum} содержится в массиве ${massive}`);
} else {
console.log(`Вы ввели ${userNum} - это значение не содержится в массиве ${massive}`);
}


// Задание 9


let rev = 'abcdef';
rev = rev.split('').reverse().join('');
console.log(rev);


// Задание 10

const generation = [];
const generationLength = 6;
const ranMin = 1;
const ranMax = 10;
let sum = 0;
for (let i = 0; i < generationLength; i++) {
generation.push(Math.round(Math.random() * (ranMax - ranMin )))
}
console.log(generation);
for (element of generation) {
sum += element;
}
console.log(`Сумма элементов массива:[ ${generation} ] равна: ${sum}`);
console.log(`Cреднее арифметическое равно: ${sum / generationLength}`);


// Задание 11

const meaning = [[1, 2, 3,],[4, 5, 6]];
const newMeaning = meaning.flat();
console.log(newMeaning);


// Задание 12


    const ar = [];
    const arLength = 6;
    const rangMin = 1;
    const rangMax = 10;
    let sums = 0;

    for (let i = 0; i < arLength; i++) {
        ar.push(Math.round(Math.random() * (rangMax - rangMin )))
    }
    console.log(ar);
    for (let i = 0; i < ar.length; i++) {
        sums = ar[i] + ar[i + 1] || ar[i];
        console.log(sums);
    }
