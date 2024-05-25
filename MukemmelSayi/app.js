// *** Mükemmel Sayı Bulma ***

// mükemmel sayılar => 6  -  28 - 496 ...

// 6'nın bölenleri => 1,2,3,6 
// 6'nın bölenleri'nin toplamı 6'nin 2 katına eşitse, 6 'Mükemmel Sayıdır.',
// 6 => 1+2+3+6 = 12. // 6'nın iki katı, yani 6 Mükemmel sayıdır.


function perfectNumber(number){ //6

    let sum=0;
    for(let i=1; i<=number; i++){

        if(number % i == 0){
            sum +=i;
        }
    }
    if(sum == (number*2)){
        console.log(number," sayısı mükemmel bir sayıdır.")
    }else{
        console.log(number," sayısı mükemmel bir sayı DEĞİLDİR!")
    }
}

perfectNumber(6);
perfectNumber(24);
perfectNumber(28);
