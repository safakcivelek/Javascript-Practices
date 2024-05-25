// *** Kelime Bulma Uygulaması ***

let text = "Şuanda İstanbul'da Javascript çalışmaktayım."
let charArray = [...text].map(char => char.toLowerCase());

function findCharCount(character) {

    char = character.toLowerCase();
    let charCount = 0;

    for (let i = 0; i < charArray.length; i++) {

        if (charArray[i] == char) {

            charCount += 1;
        }
    }
    console.log(character, "harfinden ", charCount, " adet bulunmaktadır.");
}

findCharCount("a");
findCharCount("Ş");
findCharCount("ş");
findCharCount("s");

