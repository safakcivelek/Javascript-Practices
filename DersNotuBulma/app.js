// ---Ders Ortalaması Bulma---

// vize1 %30, vize2 %30, final %40
// Geçme Notu: 70

function calculateAverage() {
    let vize1 = Number(prompt("Vize 1 notunuzu giriniz :"));
    let vize2 = Number(prompt("Vize 2 notunuzu giriniz :"));
    let final = Number(prompt("Final notunuzu giriniz :"));

    let average = (vize1 * 30 / 100) + (vize2 * 30 / 100) + (final * 40 / 100);

    let passed = "Tebrikler geçtiniz. :) | ortalama: " + average;
    let notPassed = "Kaldınız :( | ortalama: " + average;

    if (average >= 70) {
        alert(passed);
        console.log(passed);
    }
    else {
        alert(notPassed);
        console.log(notPassed);
    }
}
//calculateAverage();



