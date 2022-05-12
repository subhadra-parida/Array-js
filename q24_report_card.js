var marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49]
 ];
 var sum=0;
 for(var i of marks){
    for(var j of i){
        sum+=j
    }
 }
 console.log(sum);
 