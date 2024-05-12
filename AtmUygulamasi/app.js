/* ---ATM Uygulaması---

1-Bakiye görüntüleme
2-Para çekme
3-Para yatırma
4-Çıkış

*/

function atm() {
    let balance = 1000;
    let newLine = "\r\n";

    let text = "1-Bakiye Görüntüleme" + newLine
        + "2-Para Çekme" + newLine
        + "3-Para Yatırma" + newLine
        + "4-Çıkış" + newLine
        + "Lütfen bir seçim yapınız.";

    let choice = prompt(text);
    switch (choice) {
        case "1":
            alert("Bakiyeniz : " + balance);
            break;

        case "2":
            let withDrawalAmount = Number(prompt("Çekmek istediğiniz tutarı giriniz : "));
            if (balance > withDrawalAmount) {
                //başarılı
                balance = balance - withDrawalAmount;
                alert("Kalan bakiye : " + balance);
            } else {
                //başarısız
                alert("Bakiyeniz yetersiz" + newLine
                    + "Bakiyeniz : " + balance + " " + "Çekilecek Tutar : " + withDrawalAmount);
            }
            break;

        case "3":
            let depositAmount = Number(prompt("Yatırılacak tutarı giriniz : "));
            balance = balance + depositAmount;
            alert("Güncel bakiyeniz : " + balance);
            break;

        case "4":
            alert("Sistemden çıkış yapılmıştır.");
            break;

        default:
            alert("Lütfen 1-4 arası bir değer giriniz !");
            break;
    }
}
atm();