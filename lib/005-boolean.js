// BOOLEANS

// değişken değer olarak true yada false döndürür
let answer = true;
answer = false;
console.log(answer);


let email = "job.ibrahimkarabulut@gmail.com";

// includes metodu değişkende istenilen değerin varlığını sorar boolean cevap verir
let query = email.includes("@");
console.log(query);

let names = ["Ahmet", "Mehmet", "Mahmut"];
let query2 = names.includes("A");
console.log(query2);

// Koşullar
let age = 23;
console.log(age == 23); // değişken ile değer aynı mı
console.log(age === "25");  // değişkenin tipi de dahil değeri aynı mı
console.log(age != 23); // değişken ile değerin farklı olduğunu kontrol eder
console.log(age <  23); // değişken verilen değerden küçük mü
console.log(age <= 23); // değişken verilen değere eşit veya küçük mü
console.log(age >  23); // değişken verilen değerden büyük mü
console.log(age >= 23); // değişken verilen değere eşit veya büyük mü
// ya değer ile değişkenin tipi aynı içeriği farklı olacak yada değer ile değişkenin tipi farklı içeriği aynı olacak
console.log(age !== "25");
console.log(age !== 24); 


let noun = "Ahmet";
console.log(noun == "Ahmet");
console.log(noun == "ahmet");
console.log(noun <  "ahmet");
console.log(noun >  "Mahmut");

let boolean  = Boolean("");   // False çünkü değer yok
let boolean1 = Boolean("a"); // True çünkü içinde ne olursa olsun bir değer var
let boolean2 = Boolean(0);   // False çünkü değer 0 veya negatif sayı
let boolean3 = Boolean(1);   // True çünkü değer 0'dan büyük
console.log(boolean, boolean1, boolean2, boolean3);