// *** 10'Luk Sayıyı 2'Lik Sayıya Çevirme ***

// 10 => 1010

function convertDecimalToBinary(number){

    let binary = "";
    while (number>0) {

       binary+=(number%2).toString();
       number = Math.floor(number/2);     
    }

    let result= reverseConvert(binary);
    console.log("Sonuç:",result);
}

function reverseConvert(binary){
    let reverseBinary = "";
    for(let i=binary.length-1; i>=0; i--){
        reverseBinary += binary[i];
    }
    return reverseBinary;
}

convertDecimalToBinary(10);
convertDecimalToBinary(11);