// normal sum function
let bonus = 20;
 function sum(first, seceond){
     const result = first + seceond +bonus;
     if(result > 9){
         const mood = 'happy';
         console.log(mood);
     }
     return result;
 }

 const output = sum(7, 5);
 console.log(output);