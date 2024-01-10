let isNumberguessed = false;
let theNumber= Math.floor(Math.random()* 10) + 1;
while(isNumberguessed == false){
let numberGuessed = prompt("Raad het getal (1 tot en met 10)");
console.log(numberGuessed);
if(theNumber == numberGuessed ){
console.log("Gewonnen");
isNumberguessed = true;
}else{
   console.log("Fout");
   if(numberGuessed > theNumber){
    console.log("lager")
   }else{
    console.log("hoger")
   }
}
}