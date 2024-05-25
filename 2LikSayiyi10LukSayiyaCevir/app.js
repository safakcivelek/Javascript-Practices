// *** 2'Lik Sayıyı 10'Luk Sayıya Çevirme ***

//  1010 = 10
//? (2^3)*(1) +   // 4. basamak
//? (2^2)*(0) +   // 3. basamak
//? (2^1)*(1) +   // 2. basamak
//? (2^0)*(0) +   // 1. basamak
// Toplam => (8*1) + (4*0) + (2*1) + (0*0) = 10

let binary = "10110010101";
function convertBinaryToDecimal(binary) { // 1010

    let sum = 0;
    let power = 0;
    for (let i = binary.length - 1; i >= 0; i--) {

        sum += (binary[i] * Math.pow(2, power));
        power++;
    }
    console.log("Sonuç: ", sum);
}
convertBinaryToDecimal(binary);