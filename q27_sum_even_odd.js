// Write a program to console the sum of odd numbers and sum of 
// even numbers from a given list.

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var sum_even_number=0;
var sum_odd_number=0;
for (var i of elements){
    if (i%2===0){
        sum_even_number+=i;
    }
    else{
        sum_odd_number+=i;
    }
}
console.log(sum_even_number);
console.log(sum_odd_number);

// OUTPUT:=
// EVEN=165
// ODD= 124