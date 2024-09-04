//Subtask-1: Display sum of all the odd numbers from 81 to 131.

let sum = 0;

for( i = 81; i <= 131; i++){
    if( i % 2 !== 0){
        console.log(i);
        sum = sum + i;
    }
}  
console.log(' Sum of all the odd numbers:', sum);

 
// Subtask-2:Display sum of all the even numbers from 206 to 311.

let sum = 0;

for( i = 206; i < 311; i++){

    if( i % 2 ===0 ){
        // console.log(i); it displays all even numbers
        sum = sum + i;
    }

} console.log(' Sum of all the Even numbers:', sum);
