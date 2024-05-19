// ***** Test ***** //

// Döngüler
//--------------------------------
// 1 den 10'a kadar yazdır.
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }
//--------------------------------
// 1 den 10' kadar topla.
// var toplam = 0;
// for (let i = 1; i <= 10; i++) {
//     toplam += i;
//     console.log(i);
// }
// console.log("Toplam : ",toplam);
//--------------------------------
// 1 den 10' kadar sayıları yan yana topla.
var sumOfNumbers = 0;
var numbers ="";
for (let i = 1; i <= 10; i++) {
    sumOfNumbers += i;
    if(i<10)
        {
            numbers += i + "+";
        }else{
            numbers += i;
        }
}
console.log("Sayılar => ",numbers);
console.log("Toplam : ",sumOfNumbers);
//--------------------------------