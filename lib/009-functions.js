// FUNCTIONS

// Function declaration / Statements / Hoisted
// bastir(deger) --> deger parametredir

function bastir(deger){
	return deger*deger;
}
bastir(5); // 5 argümandır
console.log(bastir(3));

console.log(bastir); // () yazmadığımız için invoke(çağırmak, çalıştırmak) etmediğimiz için fonksiyon içeriğini bastırır.

// varsayılan parametre
function person(name="name", surname="surname"){
	console.log(name, surname);
}
person('İbrahim');

// geriye değer döndürme (return işleminde çıktı vermez sonuç döndürür)
function katla(num){
	return num*2;
}

// Function Expression
/* fonksiyon bir değişkene atanırsa ve bu değişken First Class Functions ise fonksiyon adı opsiyoneldir.
fonksiyon içinde o ismi kullanabilirsin, hata ayıklamada isimsiz fonksiyonda hata yerine hatanı tam hangi fonksiyonda olduğunu söyler */

const square = function(num) {
	return num*num;
}
console.log(square(5));


const faktoriyel = function hesapla(n) {
	if(n<=1) return 1;
	return n * hesapla(n - 1);
}

// IIFE immediately invocable function expression
console.log(20 + function(){return 10}());

const addFive = function(num, func){
	console.log(console.log(num+func()));
}
addFive(10, function(){return 5});
console.log(addFive.length); // addFive'ın kaç tane parametresi olduğunu söyler