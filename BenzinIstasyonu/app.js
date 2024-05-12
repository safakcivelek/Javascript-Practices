//Benzin İstasyonu 

/*
    1-Dizel  : 40.20
    2-Benzin : 42.67
    3-LPG    : 20.97

    Gelen müşteriden alacağımız bilgiler;
    1-Yakıt Tipi
    2-Yüklenecek yakıt litresi

*/

function petrolSatation() {

    let diesel = 40.20;
    let petrol = 42.67;
    let lpg = 20.97;
    const newLine = "\r\n";

    const userChoice = "1-Dizel" + newLine + "2-Benzin" + newLine + "3-LPG" + newLine +
        "Yakıt türünü seçiniz!"

    let fuelType = prompt(userChoice);
    if (fuelType == "1" || fuelType == "2" || fuelType == "3") {
        let fuelLitres = Number(prompt("Yakıt litresini giriniz."));
        let balance = Number(prompt("Bakiyenizi giriniz."));

        if (fuelType == "1") {
            //Dizel
            let paymentAmount = fuelLitres * diesel;
            if (paymentAmount <= balance) {
                //bakiyeniz yeterli
                balance = balance - paymentAmount;
                alert("Yakıt alma işlemi başarılı." + newLine
                    + "Kalan bakiye : " + balance);
            } else {
                //bakiyeniz yeterli değil
                alert("Bakiyeniz yeterli değil" + newLine
                    + "Ödenecek tutar : " + paymentAmount + newLine
                    + "Bakiye : " + balance + newLine
                    + "Eksik tutar : " + (paymentAmount - balance));
            }
        }else if(fuelType=="2"){
            //BENZİN
            let paymentAmount =  petrol*fuelLitres;
            if(paymentAmount<balance){
                //bakiyeniz yeterli
                balance = balance-paymentAmount;
                alert("Yakıt alma işlemi başarılı"+newLine
                +"Kalan bakiye : " + balance);
            }else{
                //bakiye yeterli değil
                alert("Bakiyeniz yeterli değildir"+newLine
                +"Ödenecek tutar : " + paymentAmount+newLine
                +"Bakiye : " + balance+newLine
                +"Eksik Tutar : " + (paymentAmount-balance));
            }
        }else if(fuelType=="3"){
            //LPG
            let paymentAmount =  lpg*fuelLitres;
            if(paymentAmount<balance){
                //bakiyeniz yeterli
                balance = balance-paymentAmount;
                alert("Yakıt alma işlemi başarılı"+newLine
                +"Kalan bakiye : " + balance);
            }else{
                //bakiye yeterli değil
                alert("Bakiyeniz yeterli değildir"+newLine
                +"Ödenecek tutar : " + paymentAmount+newLine
                +"Bakiye : " + balance+newLine
                +"Eksik Tutar : " + (paymentAmount-balance));
            }
        }
    }
    else{
        alert("Lütfen geçerli bir yakıt türü seçiniz!");
    }
}
petrolSatation();