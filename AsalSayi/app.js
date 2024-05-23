// *** Asal Sayi (1) ***

// let number = parseInt(prompt("Sayi giriniz"));
// let counter = 0;

// for (let i = 2; i <= number; i++) {
//    if (number % i == 0) {
//       counter++;        
//    }  
// }
// if (counter == 1) {
//    console.log("Bu Sayı Asaldır :", number)
// }else{
//    console.log("Bu Sayı Asal DEĞİLDİR! :", number)
// }
//------------------------------------------------------
// *** Asal Sayi (2) ***
let number = parseInt(prompt("Sayi giriniz"));
let isPrime = true;
for (let i = 2; i <= Math.sqrt(number); i++) {
   if (number % i == 0) {
      isPrime = false
      break;
   }
}
isPrime
   ? console.log("Bu Sayı Asaldır :", number)
   : console.log("Bu Sayı Asal DEĞİLDİR! :", number)