/* ---TYT Puan Hesaplama---

? Sorular
1-Türkçe 40
2-Matematik 40
3-Sosyal Bilimler 20
4-Fen Bilimler 20

----->Her soru 4 puan.
----->100 puanı ÖSYM veriyor.
----->Okul puanı max 60 veriyor.
----->4 yanlış 1 doğru götürür.
*/

function tytScore() {
    let turkishCorrect, turkishWrong = 0;
    let mathCorrect, mathWrong = 0;
    let socialCorrect, socialWrong = 0;
    let scienceCorrect, scienceWrong = 0;
    let grade = 0;
    let schoolGrade = 0;
    const osym = 100;

    let newLine = "\r\n";
    let message = "TYT Puan Hesaplama Uygulamasına hoşgeldiniz!" + newLine
        + "1-Puan Hesapla" + newLine
        + "2-Çıkış Yap";

    let choice = prompt(message);
    switch (choice) {
        case "1":

            schoolGrade = Number(prompt("Okul puanınızı giriniz."));

            turkishCorrect = Number(prompt("Türkçe doğru sayısı"));
            turkishWrong = Number(prompt("Türkçe yanlış sayısı"));

            mathCorrect = Number(prompt("Matematik doğru sayısı"));
            mathWrong = Number(prompt("Matematik yanlış sayısı"));

            socialCorrect = Number(prompt("Sosyal Bilgiler doğru sayısı"));
            socialWrong = Number(prompt("Sosyal Bilgiler yanlış sayısı"));

            scienceCorrect = Number(prompt("Fen doğru sayısı"));
            scienceWrong = Number(prompt("Fen yanlış sayısı"));

            //Net
            let correctCount = turkishCorrect + mathCorrect + socialCorrect + scienceCorrect;
            let wrongCount = turkishWrong + mathWrong + socialWrong + scienceWrong;
            let netCount = correctCount - (wrongCount / 4);
            grade = (netCount * 4) + osym + schoolGrade;
            alert("TYT Puanınız : " + grade);
            break;

        case "2":
            alert("Uygulamadan çıkış yapıldı.")
            break;

        default:
            alert("Lütfen geçerli aralıkta bir değer giriniz!");
            break;
    }
}
tytScore();