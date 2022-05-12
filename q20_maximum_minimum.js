// HOW TO PRINT MAXIMUM AND MINIMUM NUMBER IN ARRAY ..........

var numbers=[30,49,76,22,25,96,54,32]
var max=0
var max2=0
for (var i=0; i<numbers.length; i++){
    if (numbers[i]>max){
        max=numbers[i];
    }
    if (max2<numbers[i]<max){
        max2=numbers[i];
    }
}
console.log(max)
console.log(max2)


