// ---Haftanın Günleri---

function days() {
    let newLine = "\r\n";
    let text = "1-Pazartesi" + newLine
        + "2-Salı" + newLine
        + "3-Çarşamba" + newLine
        + "4-Perşembe" + newLine
        + "5-Cuma" + newLine
        + "6-Cumartesi" + newLine
        + "7-Pazar" + newLine
        + "Lütfen bir seçim yapınız!";

    let value = prompt(text);

    switch (value) {
        case "1":
            console.log("Pazartesi Günü");
            break;
        case "2":
            console.log("Salı Günü");
            break;
        case "3":
            console.log("Çarşamba Günü");
            break;
        case "4":
            console.log("Perşembde Günü");
            break;
        case "5":
            console.log("Cuma Günü");
            break;
        case "6":
            console.log("Cumartesi Günü");
            break;
        case "7":
            console.log("Pazar Günü");
            break;
        default:
            console.log("Geçersiz bir değer girdiniz!");
    }
}
days();