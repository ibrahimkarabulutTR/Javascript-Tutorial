// ARRAY

// Dizi tanımlama yolları
let cars = [];
let cars2 = new Array();

// Değer tanımlı dizi tanımlama
let androidOS = ['Honor', 'Xiaami', 'LG'];
let otherOS = new Array('Apple', 'Huawei');

// Değer bastırma
console.log(androidOS[0], androidOS[1], androidOS[2]);
// Sondaki değeri bastırma
console.log(otherOS[otherOS.length - 1]);

// Dizide istenilen bölümü değiştirmek için
androidOS[1] = 'Xiaomi';

// Dizi içinde içerik kontrolü yapmak için
console.log(otherOS.includes('Honor'));
console.log(otherOS.search('Honor'));
console.log(otherOS.indexOf('Honor'));
console.log(otherOS.lastIndexOf('Honor'));

// Dizi uzunluğunu öğrenmek için
console.log(otherOS.length);

// toSorted() yeni dizi oluşturur değişiklikleri orada yapar orjinal diziyi korur
// sort() orjinal dizi üzerinde değişiklik yapar
console.log(androidOS.toSorted()); // kopya dizide sıralama değişir
console.log(androidOS); // orjinal dizi aynı
console.log(androidOS.sort()); // orjinal dizide sıralama değişir
console.log(androidOS); // orjinal dizi her yerde değişir

// büyükten küçüğe sıralama metodu
androidOS.sort((a,b) => b - a);

// toReversed() ve reverse() ise sort metodunun tam tersini yapar
console.log(androidOS.reverse());

// Dizinin sonuna eleman ekleme
androidOS.push('OPPO');
androidOS = androidOS.concat('General Mobile');
androidOS[androidOS.length] = 'Casper';

// Dizinin sonundaki elemanı siler
androidOS.pop();

// Dizinin başına eleman ekler
androidOS.unshift('Google Pixel');

// Dizinin başındakini siler
androidOS.shift();

// Dizi elemanlarının arasına , ekleyerek birleştirip string hal getirir
let phoneCatalog = androidOS.join(', ');
console.log(phoneCatalog);

// Aradığın dizi elemanın yerini öğrenmek için
console.log(androidOS.indexOf('Casper'));

// ... Spread operator ile dizinin tüm içeriğini çekme
let phoneList = [...androidOS, ...otherOS];
console.log(phoneList);