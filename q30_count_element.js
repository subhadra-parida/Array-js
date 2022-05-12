// Count of the elements that is repeated in a list.
char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
uniques=[]
for(var i of char_list){
   if(!uniques.includes(i)){
       uniques.push(i)
   }
}
console.log(uniques);
 
for(var j of uniques){
   count=0
   for(var k of char_list){
       if (j === k){
           count+=1
       }
   }
   console.log(j,count," times");
}

// OUTPUT:-
// ['a','n','t','x','u','g']
// a 6 times 
// n 3 times
// t 2 times
// x 2 times
// u 1 times
// g 1 times