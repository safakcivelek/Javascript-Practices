// *** Ürün Arama Uygulaması ***
let product1 = {
    name: "ASUS X-1",
    category: "Tekonoloji",
    price: 35.999
}
let product2 = {
    name: "ASUS X-2",
    category: "Tekonoloji",
    price: 40.999
}
let product3 = {
    name: "HP Z-1",
    category: "Tekonoloji",
    price: 48.999
}
let product4 = {
    name: "HP Z-2",
    category: "Tekonoloji",
    price: 52.999
}
let product5 = {
    name: "HP Z-3",
    category: "Tekonoloji",
    price: 61.999
}

let allProducts = [product1, product2, product3, product4, product5];
let selectedProductName = prompt("Bir ürün ismi giriniz");
let filteredProducts = [];

filteredProductsList(allProducts);
getFilteredProducts(filteredProducts);

function filteredProductsList(allProducts) {
    allProducts.forEach(function (product) {
        if (product.name.toUpperCase().includes(selectedProductName.toUpperCase(),0)) {
            filteredProducts.push(product);
        }
    });
}

function getFilteredProducts(filteredProducts){
     console.log(">> Filtrelenmiş Ürünler <<");
    filteredProducts.forEach(function (product){
       
        console.log("|" + product.name + "|" + product.price + "|" + product.category);
        console.log("-----------------------------");
    });
}



