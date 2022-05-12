var Name=['m','a','l','a','y','a','l','a','m'];
var new_array=[];
for (var i=Name.length-1; i>=0;i--){
   new_array.push(Name[i]);
}
var count=0;
// for (var j=0; j   if (new_array[j]===Name[j]){
//        count++;
//    }
// }
if(count===Name.length){
   console.log("This is palindrome");
}else{
   console.log("This is not a palindrome");
}




