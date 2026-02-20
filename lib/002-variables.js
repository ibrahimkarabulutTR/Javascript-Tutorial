// VARIABLES

/*
	BLOCKSCOPE: Bir değişken süslü parantezler {} (if, for, while, switch vb.) arasında tanımlandığında sadece o parantezlerin içinden erişilebilir.
	Not: BLOCKSCOPE değişken tanımlandığı yerdeki alt dizinler tarafından erişilebilir

	GLOBALSCOPE: Değişkenin bir yerde tanımlanması her yerde kullanabilmesi için yeter
	FUNCTIONALSCOPE: Değişken bir fonksiyonun içinde tanımlanırsa değişken sadece o fonksiyonda kullanılır fonksiyon bittiğinde değişkenin ömrü de biter.

	Not: Eğer aynı değişken lokalde ve globalde de tanımlanırsa öncelik lokaldekinindir. Buna Shadowing denir.

	HOISTED: değişken tanımlanmadan çağrılabilme özelliğidir çağrıldığında undefined hatası verir.
*/

// VAR --> GLOBALSCOPE, FUNCTIONALSCOPE, HOISTED
var project; // değiştirilebilir olduğu için değersiz de tanımlanabilir. 
var skills = 'HTML5, CSS3, JS';
skills = 'HTML5, CSS3, JS, TS, REACT, PHP'; 
var role = 'Front End Developer';
console.log(role);
console.log(window.role); // var değişkeni ile tanımladığın değişkenler window'a kaydedilir bu yüzden var yerine let kullanımı önerilir
function work() {
	console.log(skills);
	var role = 'FullStack Developer';
	console.log(role); // SHADOWING
	var employee = 'Mehmet Kahraman';
	console.log(employee);

}
work()
console.log(role); // FUNCTIONALSCOPE olduğundan içerideki değer dışarıdakini değiştirmedi 
// console.log(employee); // FUNCTIONALSCOPE olduğundan fonksiyon içinde tanımlanan değer dışarı çıkamaz hata verir
var framework = 'Laravel';
console.log(framework); // Laravel
if(true) {
	var framework = 'CodeIgniter';
	console.log(framework); // CodeIgniter
}
console.log(framework); // CodeIgniter



// LET --> BLOCKSCOPE, CHANGEABLE
let firstName = 'İbrahim';
let lastName; // değiştirilebilir olduğu için değersiz de tanımlanabilir. 
firstName = 'Halil İbrahim'; 
console.log(firstName, lastName) // lastName'e değer vermediğimiz için çağrıldığında undefined hatası verir

let appName = 'Xetr';
function app() {
	let version = 25;
	console.log(appName)
	if(true) {
		console.log('Blok içinden', appName);
		console.log('Versiyon:', version);
	}
}

app();
// console.log(version); // BlockScope olduğundan dışarı çıkamaz, çalışmaz hata verir



// CONST --> BLOCKSCOPE, UNCHANGEABLE
// const birthDay; // değiştirilemez olduğu için değersiz de tanımlanamaz. 
const birthDay = '01.01.2001';
// birthDay = '02.02.2002'; // sonrada değiştirmek istediğinde hata verir
console.log(birthDay)

const projectName = 'Astro';
function project() {
	const subject = 'Uzay';
	console.log(projectName)
	if(true) {
		console.log('Blok içinden', projectName)
		console.log('Konu:', subject);
	}
}

project();
// console.log(subject); // BlockScope olduğundan dışarı çıkamaz, çalışmaz hata verir

// dışarıdan dosya çağırdığımızda const ile tanımlarız ki değişmesin
const { version } = require("react");

// const değeri sonradan değişime kapalıdır ama değer dizi, obje vs ise kendi içinde değişebilir
const passwd = 'rg68ew9g4tr5g69rth';
let salt = ['!+&(+', '?&/()=&%'];

console.log(passwd.concat(...salt))

const points = [25, 56, 69]
points.pop()
points.push(85)
console.log(points)

const profile = {
	name: 'İbrahim Karabulut',
	lang: ['TR', 'EN']
}
profile.lang.push("DE")
console.log(profile)
/* objenin değiştirilmemesini istiyorsan kullan */
Object.freeze(profile)