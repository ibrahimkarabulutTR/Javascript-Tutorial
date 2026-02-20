// OBJECTS

const person = {
	name: "Abdullah",
	surname: "Ökmen",
	age: 25,
	"speaking-lang": ["KU", "TR", "EN"],
	fullName: function() {
		return `${this.name} ${this.surname}`;
	},
	profile: () => {
		console.log(`name: ${person.name} surname:${person.surname} age:${person.age}`);
	},
	address: {
		country: "Türkiye",
		city: "Adana",
		district: "Seyhan"
	}
}

console.log(person); // property --> object ile ilişkili fonksiyon
// OBJECT --> name + surname + age + fullName + ... --> person
// builder prototype --> object inheritance

const myObj = {}
console.log(myObj)
console.log(myObj.toString())
// OBJECT --> myObj
// myObj prototype --> object inheritance

console.log(person.name);
console.log(person["age"]);
console.log(person["sur"+"name"]);
console.log(person["fullName"]());
console.log(person.fullName());
console.log(person["speaking-lang"][2]);
console.log(person.toString());
console.log(person.hasOwnProperty("name"));

person.job = "Carpenter";
console.log(person.job);

person.graduate = {};
person.graduate.college = true;


// CONSTRUCTOR
// 1.Metod
function createObjectPerson(name, surname, age){
	const obj = {};
	obj.name = name;
	obj.surname = surname;
	obj.age = age;
	obj.fullName = function() {
		return obj.name+" "+obj.surname;
	}
	return obj;
}
const carpenterPerson = new createObjectPerson("Abdullah", "Ökmen", 25);
console.log(carpenterPerson);


// 2.Metod
function createThisPerson(name, surname, age){
	console.log(this)
	this.name = name;
	this.surname = surname;
	this.age = age;
	this.fullName = function() {
		return this.name+" "+this.surname;
	}
	console.log(this)
}

const doctorPerson = new createThisPerson('Serhat', 'Tekik', 25)
console.log(doctorPerson)

// 3.Metod object constructor
const objectPerson = new Object();
objectPerson.name = "Ramazan";
objectPerson.surname = "Kalkan";
objectPerson.age = 25;
objectPerson.fullName = function() {
	return this.name+" "+this.surname;
}
console.log(objectPerson)


// 4.Metod object.create() ile
const objectCreatePerson = {
	name: null,
	surname: null,
	age: null,
	fullName: function() {
		return this.name+" "+this.surname;
	}
};
const armyPerson = Object.create(objectCreatePerson);
armyPerson.name = "Mete";
armyPerson.surname = "Yarar";
armyPerson.age = 45;
console.log(armyPerson);
console.log(armyPerson.fullName());


// 5.Metod prototype ile
function personConstructor(name, surname, age) {
	this.name = name;
	this.surname = surname;
	this.age = age;
	/*
		this.fullName = function() {
			return this.name+" "+this.surname;
		}
	*/
}
// bu yöntem  constructor fonksiyonun içinden kullanımına göre daha hızlı
personConstructor.prototype.fullName = function fullName() {
	return this.name+" "+this.surname;
}

const gurcan = new personConstructor('Gürcan', 'ÇEKİÇ', 40);
console.log(gurcan);
console.log(Object.getPrototypeOf(gurcan)); // gurcan'ın prototype'larını görmek için
// OBJECT --> name + surname + age + fullName --> Person Constructor --> gurcan
// gurcan prototype --> Person Constructor prototype --> object inheritance


const arinPerson = {
	name: 'Arin',
	surname: 'Soft',
	age: 40,
}

const selda = Object.create(arinPerson);
console.log(selda);
console.log(selda.name);
console.log(selda.hasOwnProperty('name')); // false
console.log('name' in selda); // true



// Object Syntax Type
// 1- Shorthand Properties
let name = "Arin", age = 25;

/*
	const arinProp = {
		name: name,
		age: age
	}
*/
const arinProp = {
	name, 
	age
}
console.log(arinProp.name);
console.log(arinProp.age);


// 2- Computed Propterties
let comProp = 'name'
let myObj1 = {
	[comProp]: 'Arin'
}
console.log(myObj1);


// 3- Short Method Syntax
const shortPerson = {
	name: 'Abdulcelil',
	surname: 'ÇİÇEK',
	age: 40,
	fullName() {
		return this.name + ' ' + this.surname
	}
}
console.log(shortPerson.fullName())


// 4- Object Destructing
const destructPersons = {
	names: 'John',
	surnames: 'Doe',
	ages: 40,
	fullName() {
		return this.name + ' ' + this.surname
	}
}

let {name: myVar1, ages: myVar2} = destructPersons;
console.log(myVar1, myVar2);

let {names, ages} = destructPersons;
console.log(names, ages);


const books = [
  {
    title: "1984",
    author: "George Orwell",
    pageNumber: 328
  },
  {
    title: "Hayvan Çiftliği",
    author: "George Orwell",
    pageNumber: 152
  },
  {
    title: "Cesur Yeni Dünya",
    author: "Aldous Huxley",
    pageNumber: 311
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    pageNumber: 192
  }
];
for(const {title, author, pageNumber} of books){
	console.log(`${title} --> ${author} [${pageNumber}]`)
}


// 5- Spread Operator In Object Literals (...)
const mainPerson = {
	name: 'Ahmet',
	surname: 'DEMİR',
	age: 40,
	fullName() {
		return this.name + ' ' + this.surname
	}
}
const personCopy = {...mainPerson}
console.log(personCopy)


const data1 = {
	name: 'Arin',
	age: 40
}
const data2 = {
	job: 'Student',
	graduate: 'College'
}
const personData = {...data1, school: 'Fatih Sultan Mehmet College', ...data2}
console.log(personData)


// 6- REST Operator In Object Literals
const person = {
	Name: 'John',
	Surname: 'Doe',
	Age: 40,
	fullName() {
		return this.Name + ' ' + this.Surname
	}
}
const {Name, ...rest} = person
console.log(Name)
console.log(rest)


// 7- Object Values - Object Entries
const personKeys = {
	name: 'John',
	surname: 'Doe',
	age: 40,
	fullName() {
		return this.name + ' ' + this.surname
	}
}
console.log(Object.keys(personKeys))
console.log(Object.values(personKeys))
console.log(Object.entries(personKeys))