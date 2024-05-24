// *** Faktoriyel Hesaplama ***

let number = Number(prompt("Sayı giriniz."));
let result = 1;

for (let i =1; i<=number; i++) {
   
    result *= i;
}
console.log("Sonuç : ",result);