// FOREACH

const returner = function callBack(usefn){
	let age = 25;
	usefn(age);
}

returner(function(value) {
	console.log(value);
});


let student = ["Ahmet", "Mehmet", "Mahmut"];
// öğrenci sayısı kadar hediye yazdır.
student.forEach(function(){
	console.log("Hediye");
})

// arrow yöntemi ile 
student.forEach(() => {console.log('Hi')});


// öğrenci adı ve sıra numarasını bastır
// n.forEach(x,y){...} kodunda sadece x parametresini yazarsan dizideki değerleri alırsın ama 2.parametreyi (y) de yazarsan sıra numarasını alırsın
student.forEach(function(item, no){
	console.log(`${no}: ${item}`);
});

// tanımlanmış fonksyion çağırarak kullanma
const contentWrite = function writer(item, no){
	console.log(`${no}: ${item}`);
}
student.forEach(contentWrite);


// foreach kullanımı
let menu = ["Home", "About", "Gallery", "Contact"];
const ul = document.createElement("ul");
document.body.appendChild(ul);
const list = document.querySelector("ul");
menu.forEach(function(value){
	let menu = ["Home", "About", "Gallery", "Contact"];
	const ul = document.createElement("ul");
	document.body.appendChild(ul);
	const list = document.querySelector("ul");
	menu.forEach(function(value){
		const li = document.createElement("li");
		li.innerText=value;
		list.append(li);
	});
});