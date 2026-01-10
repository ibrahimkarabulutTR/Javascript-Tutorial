// CONDITIONALS

let note = 85;

// IF - ELSE IF - ELSE
if(note >= 75){
	console.log('Good');
}else if(note >= 50){
	console.log('Not Bad');
}else{
	console.log('Bad');
}

// 2.yazım yöntemi
note >= 75 ? console.log('Good') : note >= 50 ? console.log('Not Bad') : console.log('Bad');

// && 2 sorgu da doğru olmalı
// || 2 sorgudan biri doğru olmalı
let x=0;
let y=1;
if(x==0 && y==1){
	console.log('Her iki koşulda doğru');
}else if(x==1 || y==1){
	console.log('Koşulardan biri doğru');
}

// Sadece 18 ila 28 sayı aralığını bastır
for(let a=0; a<30; a++){
	if(18<a<28){
		console.log(a);
	}else{
		continue;
	}
}


// SWITCH CASE
let resultGraduate = 'AA';
switch(resultGraduate){
	case 'AA':
		console.log('Ders notun iyi');
		break;
	case 'BB':
		console.log('Ders notun orta');
		break;
	case 'CC':
		console.log('Ders notun kötü');
		break;
	default:
		console.log('Ders notu anlaşılamadı');
		break;
}


// OPTIONAL CHAINING
const user = {
	name: 'Ali',
	address: {
		city: 'Adana',
		street: 'Güzelyalı Mahallesi'
	}
};

// const city = user.location.city; location olmadığı için hata verir
// güvenli sorgu için aşağıdaki yöntem kullanılır
const city = user.location?.city; // hata vermez undefined cevabını verir
console.log(city); // undefined



// Conditionals tricks
let i=5;
let div = document.createElement('div');
document.body.appendChild(div)
div.classList.toggle('visible', i<10);

let isAdmin = true;
let userId = 10;
function deleteUser(e) {
	e=0;
}
isAdmin && deleteUser(userId); // eğer isAdmin true ise deleteUser fonksiyonun çalıştır

const userName = user.name || 'Misafir'; // userName değişkenine ya user objesinin name'ini yoksa Misafir ismini gönder