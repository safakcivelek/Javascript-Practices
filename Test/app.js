// ***** Test ***** //

// Döngüler
//--------------------------------
// ---> For
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
// var sumOfNumbers = 0;
// var numbers ="";
// for (let i = 1; i <= 10; i++) {
//     sumOfNumbers += i;
//     if(i<10)
//         {
//             numbers += i + "+";
//         }else{
//             numbers += i;
//         }
// }
// console.log("Sayılar => ",numbers);
// console.log("Toplam : ",sumOfNumbers);
//--------------------------------

// ---> While
// 1 den 10'a kadar yazdır.
// let sayac = 1;
// while (10 >= sayac) {
//     console.log("While:",sayac);
//     sayac++;
// }

// 1 den 10 a kadar çift ve tekleri yazdır.
// let sayac = 1;
// while (sayac <= 10) {
//     if (sayac % 2 == 0) {
//         console.log("Çift:",sayac)
//     }
//     else{
//         console.log("Tek:",sayac)
//     }
//     sayac++;
// }
//
// let sayac =1;
// while (true) {
//     if (sayac == 7) {
//         break;
//     }
//     sayac++;
// }
//----------------------------------------

// *** DİZİLER ***

//? Dizinin Metotları

/*
push      : dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner.
unshift   : dizinin başına eleman ekler, eleman sayısını geriye döner.

pop       : dizinin sonundan eleman siler, eleman sayısını döner.
shift     : dizinin başından eleman siler, eleman sayısını döner.

splice(index,incdex): eleman eklemek ve silmek için kullanılır.

toString  : diziyi stringe çevirebiliriz.
join      : diziyi stringe çevirir. Farkı ise araya eleman ekleyebiliriz.

concat    : dizileri birleştirmek için kullanılır.
slice(dilim)       : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
length    : dizinin uzunluğunu verir.
reverse   : diziinin elemanlarını ters çevirir.
split(bölmek)      : belirli bir ifadeye göre bölüp diziye çevirir.
indexOf   : elemanın index numarasını verir.
includes  : verilen elemanı içeriyor mu ona bakar. 

*/

//let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
//let arabalar2 = ["hundai","tofaş"];

//? push:
// console.log(arabalar.length);
// arabalar.push("opel");
// console.log(arabalar);

//? unshift:
// arabalar.unshift("hundai");
// console.log(arabalar);

//? pop:
// let silinenEleman = arabalar.pop();
// console.log(silinenEleman);

//? shift:
// let silinenEleman2 = arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman2);

//? splice:
// console.log(arabalar);
// arabalar.splice(0,0,"hundai");
// console.log(arabalar);
//
// arabalar.splice(1,2);
// console.log(arabalar);
//
// arabalar.splice(2,2,"hundai");
// console.log(arabalar);

//? toString:
// let stringArabalar=arabalar.toString();
// console.log(stringArabalar);

//? join:
// let stringArabalar2 = arabalar.join("-");
// console.log(stringArabalar2);

//? concat:
// let birlesmisDiziler = arabalar.concat(arabalar2);
// console.log(birlesmisDiziler);

//? slice:
// console.log(arabalar);
// let bolumusDizi = arabalar.slice(2,5);
// console.log(bolumusDizi);

//? Length(özellik):
// console.log(arabalar.length);

//? reverse
// console.log(arabalar);
// arabalar.reverse();
// console.log(arabalar);

//? split:
// let isimler ="enes,ali,veli";
// let isimlerDizi=isimler.split(",");
// console.log(isimlerDizi);

//? indexOf:
// let index = arabalar.indexOf("mercedes");
// console.log(index); // 3

//? includes:
// let sonuc = arabalar.includes("mercedes1");
// console.log(sonuc);  // false

//----------------------------------------

// *** String Sınıfının Metotları ***

/*
chartAt()
concat()
indexOf()
lastindexof()
toUpperCase()
toLowerCase()
trim()
slice()
substring()
replace()
split()
valueOf()
startsWith()
endsWith()
 */

// let text = "Full Stack Developer";
// let currentDate = "2024"

//charAt() : (girilen index numarasının karakterini döner)
// let char = text.charAt(4);
// if (char == " ") {
//     console.log("Boşluk!");
// }
// console.log(char);

//concat() : (birleştirir)
// let combine=text.concat(" ",currentDate);
// console.log(combine);

//indexOf() : (girilen karakterin index numarsını döner)
//  let charIndexNo=text.indexOf("u");
//  console.log(charIndexNo);

//trim() : (boşlukları siler)
// let test2 = "   javascript   "
// let deleteSpaces = test2.trim();
// console.log(deleteSpaces)

//slice() : (başlangıç parametresini alır , bitiş parametresini dahil etmez.)
// console.log(text.slice(0,5))

//subString() :
// console.log(text.substring(0,5))

//replace() :
// console.log(text);
// console.log(text.replace("Fulll","Test"))

//split() : (belirli karakterler arasındakileri bir dizi elemanı yap)
// console.log(text.split(" "));

//valueOf() :
// console.log(text.valueOf());

//startWith() : (girilen karakter ile başlıyormu?)
// console.log(text.startsWith("M")); //true

//endsWith() : (girilen karakter ile bitiyormu?)
// console.log(text.endsWith("Developer")); //true

//----------------------------------------

// *** Math Sınıfının Metotları ***

/*
 1-Floor
 2-Ceil
 3-Round
 
 4-Max
 5-Min

 6-Random
 7-Abs
 8-Sqrt
 ------> PI Sayısı
 */

 /** 
 //Floor() : (Noktadan sonrasını atar.Aşağıdaki rakama yuvarlar.)
 let a = 3.99;
 let a2 = 3.15;
 console.log(Math.floor(a)); // 3
 console.log(Math.floor(a2)); // 3

 //Ceil() : (Noktadan sonrasını atar.Yukaridaki rakama yuvarlar.)
 let b = 6.99;
 let b2 = 6.15;
 console.log(Math.ceil(b)); // 7
 console.log(Math.ceil(b)); // 7

 //round() : (Noktadan sonrasını atar.Yakın olan rakama yuvarlar.)
 let c = 8.99;
 let c2 = 8.15;
 console.log(Math.round(c)); // 9
 console.log(Math.round(c2)); // 8

 //max-min () : (dizideki büyük veya küçük sayıyı döner.)
 console.log(Math.max(-4,5,10,50,23,1)) // 50
 console.log(Math.min(-4,5,10,50,23,1)) // -4

 //Abs() : (Mutlak değer almak için kullanılır.)
 let d = 12;
 let d2= -12;
 console.log(Math.abs(d));  // +12
 console.log(Math.abs(d2)); // +12

 //Sqrt() : (Girilen sayının karekökünü verir.)
 console.log(Math.sqrt(81)); // 9

 //Pow() : 
 let xNumber = 2;
 let yPower = 4;
 console.log(Math.pow(xNumber,yPower)); // 2^4= 16

 //PI() : (Metot değil, bir özelliktir.)
 console.log(Math.PI); //3,141592653589793

 //Random() : (resgele sayı üretir.)
 let rnd = Math.floor(Math.random()*1000);
console.log(rnd);
*/

//----------------------------------------

// *** Date Sınıfının Metotları ***
