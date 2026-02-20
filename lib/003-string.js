// STRING

let text = "   Merhaba, benim adım İbrahim Karabulut ve doğum tarihim 01.01.2001  ";

// aranılan değer değişken içinde varmı (cevap Boolean)
console.log(text.includes('name'));

// değişken değer uzunluğu (cevap Number)
console.log(text.length);

// değişken verilen değer ile mi başlıyor (cevap Boolean)
console.log(text.startsWith('Hi'));

// değişken verilen değer ile mi bitiyor (cevap Boolean)
console.log(text.endsWith('.'))

// değerin ilk nerede kullanıldığını söyler
console.log(text.indexOf('is'));
console.log(text.search('is'));

// değerin en son nerede kullanıldığını söyler
console.log(text.lastIndexOf('is'));

// verilen konumda ne var
console.log(text.charAt(8));

// yazıyı büyük veya küçük hale çevirir
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// yazıyı istenilen lokaldeki alfabeye göre büyütüp küçültür
console.log(text.toLocaleUpperCase('tr'));
console.log(text.toLocaleLowerCase('tr'));

// değişkendeki değerin belli bir kısmını istemek için kullanılır (başlangıç konumu, bitiş konumu)
console.log(text.substring(5,25));
console.log(text.slice(5,25));

// değişkendeki değerin belli bir kısmını istemek için kullanılır (başlangıç konumu, kaç adım ilerleyeceği)
console.log(text.substr(5,5));

// değişkeni düzenlemek için
console.log(text.replace('name is', 'names'));

// değişkenin baş veya sonundaki boşlukları siler
console.log(text.trim());

// değişkenin kaç kez tekrarlanacağını belirler
console.log(text.repeat(2));

// değişken tipini string yapar
console.log(text.toString());

const araba = {
	marka: Togg,
	toString(){
		return `Bu araba bir ${this.marka}'dır`;
	}
}
// Metinsel bir işlem varsa: Önce toString() kontrol edilir
console.log(String(araba));
console.log('Mesaj: '+araba);

// değişken tipini istediğin tipe çevirmek için
console.log(Number(text));
console.log(String(text));
console.log(Boolean(text));
// ... istediğin tipe bu şekilde değiştirebilirsin

// değişken tip kontrolü için
console.log(typeof text);

// değişkenin değerini bastırır
console.log(text.valueOf(),"de");

const cuzdan = {
	bakiye: 500,
	toValue(){
		return this.bakiye;
	}
}
// Matematiksel bir işlem varsa: Önce toValue() kontrol edilir.
console.log('Mesaj: '+cuzdan);

// değeri bölünceği durumu bildirir parçaları da diziye aktarır
const textArr = text.split(' ');
// dizinin değerlerini sırasıyla yazdırır
for(let textItem of textArr){
	console.log(textItem);
}

// dizinin değerlerinin arasına ekleneceği durumu belirtip diziyi string hale çevirir
const textStr = textArr.join(' ');
console.log(textStr);