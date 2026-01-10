// FOR Döngüsü

for(let i=0; i<10; i++) {
	console.log(10)
}

// FOR ile dizi elemanlarını bastırma
let names = ['Hamza', 'Ali', 'Ebu Ubeyde', 'Halid Bin Velid'];

// 1.yöntem
for(let n=0; n<names.length; n++) {
	console.log(names[n]);
}

// 2.yöntem
for(let name of names) {
	console.log(name);
}


// WHILE Döngüsü
let y=0;
while(y>10) {
	console.log(y);
	y++;
}

// WHILE ile dizi elemanlarını bastırma
let z=0;
while(z<names.length) {
	console.log(names[z]);
	z++;
}


// DO-WHILE Döngüsü
let a=0;
do {
	console.log(names[a]);
	a++;
} while (a<names.length);