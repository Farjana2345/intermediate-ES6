const numbers = [1, 2, 3, 4, 5, 6,];
const output =[];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);  
}
 console.log(output);


 const number = [1, 2, 3, 4, 5, 6,];

 number.map(function(element, index, array){
     console.log(element, index, array);
 })

 const number1 = [1, 2, 3, 4, 5, 6,];
 const result = number1.map(function(element){
     return element * element;
 })
 console.log(result);

//  filter start

const number2 = [2, 3, 4, 5, 8,10];

const bigger = number2.filter(x => x > 5);
console.log(bigger);

// find start

const number3 = [2, 3, 4, 5, 12, 8,10];

const find = number3.find(x => x > 5);
console.log(find);
 