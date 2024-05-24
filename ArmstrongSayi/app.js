// *** Armstrong Sayı ***

/*
 *  3 basamaklı Armstrong sayısı:
 ?  153: 1^3 + 5^3 + 3^3 = 1+125+27 = 153
    
 *  4 basamaklı Armstrong sayısı :   
 ?  1634: 1^4 + 6^4 + 3^4 + 4^4 = 4+1296+81+256 = 1634
 */

let number = prompt("Sayı giriniz:");
//let charArray = [...number];
let charArray = [];
let sum = 0;

for(let i=0; i < number.length; i++){ // 153

    charArray.push(number[i]);
}

var numberLenght = charArray.length;

for (let i=0; i<numberLenght; i++) {
    
    let digit = parseInt(charArray[i]);
    
    let power =1;
    for (let j=0; j < numberLenght; j++) {
        power *= digit;       
    }

    sum += power;
}

if(sum == parseInt(number)){
    console.log(number + " bir Armstrong sayıdır.");
}else{
    console.log(number + " bir Armstrong sayı DEĞİLDİR!");
}



