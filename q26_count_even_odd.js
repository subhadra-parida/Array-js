// Write a program to count how many odd numbers are there and 
// how many even numbers are there in a given list.
var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var even_number=0;
var odd_number=0;
for(var i of elements){
    if (i%2==0){
        even_number=even_number+1
    }
    else{
        odd_number=odd_number+1
    }
} 
console.log(even_number)
console.log(odd_number)

// OUTPUT:-
// EVEN-4
// ODD-7