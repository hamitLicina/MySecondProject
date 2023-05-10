const name = "hamit licina";
const department = "Web Development";
const salary = 2000;

const a = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary + "\n"; 

// "\n" anlamı alt satıra geç demektir //

console.log(a);

const b = `İsim: ${name}\nDepartman:${department}\nMaaş:${salary}`;

console.log(b);

let value; 

const numbers = [43, 56, 33, 23, 44, 35, 5];

const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7);

const langs = ["Python", "JavaScript", "C++", "Java"]; 

const h = ["Merhaba", 22, null, undefined, 3,14, "Hamit"];

value = numbers.length;
value = numbers[0];
value = numbers[numbers.length -2];

numbers.push(88);  //Arrayin Sonuna Değer Ekleme - Push

numbers.unshift(4);   //Arrayin Başına Değer Ekleme - Unshift

numbers.pop();  //Arrayin Sonuna Değer Silme - Pop

numbers.shift();  //Arrayin Başından Değer Silme - Shift

numbers.splice(0,3); //Belli bir kısmını atma

numbers.reverse(); // Reverse arrayin tersine çevirme

numbers.sort(); // Sıralama yapıyor ancak dikkat edilmesi gereken konu ilk karaktere göre diziyor arrayin içini

 value = numbers.sort(function(x,y){ //küçükten büyüğe
    return x-y;
 });

 value = numbers.sort(function(x,y){  //büyükten küçüğe
    return y - x;
 });


value = numbers;

console.log(value);



const programmer = {
   name : "Hamit Licina",
   age : 35, 
   email: "hamitlicina@gmail.com",
   langs: ["HTML", "CSS", "JavaScript"],
   address : {
      city : "Eskisehir", 
      street : "Odunpazari"
   },
   vork : function(){
      console.log("Programcı Çalışıyor...");
   }


}

value = programmer;

value = programmer.email; // Genel olarak bu kullanılır 
value = programmer["email"];  // Bununda kullanıldığı görülmektedir.

value = programmer.langs; 

value = programmer.address.city;

programmer.work();


const programmers = [
   {name: "Kemal", age: 5},
   {name: "Kerim", age: 8}
];

value = programmers[0].name;


console.log(value);


let tarih;

const now = new Date(); // Şu anki zamanı alır.

console.log(now);



console.log(tarih);