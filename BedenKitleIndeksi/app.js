// ---Beden Kitle Indeksi---

/**
 * Vücut Kitle İndeksi Nasıl Hesaplanır?
 * 
 *Vücut kitle indeksi, vücut ağırlığının boy uzunluğunun karesine bölünmesiyle (kg/m²) hesaplanır.

 *18, 5 kg/m² ‘nin altındaki sonuçlar: İdeal kilonun altında
 *18, 5 kg/m² ile 24, 9 kg/m² arasındaki sonuçlar: İdeal kiloda
 *25 kg/m² ile 29, 9 kg/m² arasındaki sonuçlar: İdeal kilonun üstünde
 *30 kg/m² ile 39, 9 kg/m² arasındaki sonuçlar: İdeal kilonun çok üstünde (obez)
 *40 kg/m² üzerindeki sonuçlar: İdeal kilonun çok üstünde (morbid obez)
 */

function bodyMassIndexCalculate() {
    let weight = Number(prompt("Lütfen kilonuzu giriniz."));
    let height = Number(prompt("Lütfen boyunuzu metre cinsinden giriniz."));
    let result = weight / (height ** 2);

    if (result < 18.5) {
        console.log("İdeal kilonun altında. => " + result);
    } else if (result >= 18.5 && result <= 24.9) {
        console.log("İdeal kiloda => " + result)
    } else if (result >= 25 && result <= 29.9) {
        console.log("İdeal kilonun üstünde. => " + result)
    } else if (result >= 30 && result <= 39.9) {
        console.log("İdeal kilonun çok üstünde. (obez) => " + result)
    } else if (result >= 40) {
        console.log("İdeal kilonun çok üstünde. (morbid obez) => " + result)
    }
}
bodyMassIndexCalculate();


