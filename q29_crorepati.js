var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var count_of_crorepati=0;
var count_of_lakhpati=0;
var count_of_dilwale=0;
for( var  i of kitna_paisa_hai){
   if(i>= 10000000){
       count_of_crorepati+=1
   }
   else if(i>=100000){
       count_of_lakhpati+=1
   }
   else{
       count_of_dilwale+=1
   }
}
 
console.log(count_of_crorepati,"Crorepati");
console.log(count_of_lakhpati,"Lakhpati");
console.log(count_of_dilwale,"Dilwale");



// OUTPUT:-
// 4- Crorepati
// 3- Lakhpati
// 4- Dilwale
