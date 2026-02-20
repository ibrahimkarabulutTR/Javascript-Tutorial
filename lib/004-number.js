// NUMBERS

/*
	+ Toplama
	- Çıkarma
	* Çarpma
	** Üssü Alma
	/ Bölme
	% Bölmeden kalan
*/

// MATHEMATICAL EXPRESSIONS (Matematiksel ifadeler)
console.log("6 + 12 = ", 6 + 12);
console.log("12 - 7 = ", 12 - 7);
console.log("8 * 3  = ", 8 * 3);
console.log("3 ** 3 = ", 3 ** 3);
console.log("81 / 9 = ", 81 / 9);
console.log("89 % 9 = ", 89 % 9);

// LOGICAL EXPRESSIONS (Mantıksal ifadeler)
let numberValue = 25;
numberValue = numberValue+1; // +1 ekle
numberValue += 1; // +1 ekle
numberValue++; // +1 ekle
numberValue = numberValue-1; // +1 çıkar
numberValue -= 1; // +1 çıkar
numberValue--; // +1 çıkar
console.log(numberValue);

let remainderNumber = 37;
remainderNumber%=3;
console.log(remainderNumber);

let powerOfNumber = 3;
powerOfNumber**=3;
console.log(powerOfNumber);

// MATH METHODS (MATH metodları)
console.log(MATH); // MATH metodunu bastırır
console.log(MATH.PI); // Pi sayısını yazdırır
console.log(Math.round(5.2)) // sayıyı yakın tam sayıya yuvarlar
console.log(Math.round(5.8)) 
console.log(Math.floor(5.8)) // sayı ne olursa olsun alt sayıya yuvarlar
console.log(Math.ceil(5.2)) // sayı ne olursa olsun üst sayıya yuvarlar
console.log(Math.trunc(5.5)) // sayı ne olursa olsun küsüratı siler (floor gibi)
console.log(Math.random()) // rastgele sayı üretir 1 ile 0 arasında
console.log(Math.random()*10) // üretilen rastgele sayıyı 10 ile çarp
