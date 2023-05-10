console.log("Merhaba");
console.log("Hello World");

// Array ve dizilerle calışmak 

// Array olusturmak 

let domain = "licinaFamily";
let isActive = false;
let items = [1, 2, 3, isActive, domain];

console.log(items);

items = [1, 2, 3]; 
console.log(items);

let emptyArray = []  // bos liste

// Array icerisinde eleman /öge sayisini ogrenme 

console.log(items.length);

document.querySelector('#info').innerHTML = items.length;  // Bu browser'da gösterme yöntemi

// Array icindeki ilk elemanin cagırılması

console.log(items[0]);

// Array icindeki son elemanın cagırılması

console.log(items[items.length-1]);

// degisken icindeki bilginin Array olup olmadığınının kontrol edilmesi

console.log(typeof(items)) // object olarak cıktı veriyor

console.log(Array.isArray(items));

let eleman = [10, 20, 30, 40]
console.log()


