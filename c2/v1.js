// var c = 0;
// for(var i = 0; i < 100; i++){
//     if(i % 2 == 0 && i != 0){
//         c++;
//         if(c === 3) {
//             console.log(i);
//             c = 0;
//         }
//     }
// }

// for(var i = 0; i < 100; i++){
//     if(i % 2 == 0 && i % 3 == 0){
//         console.log(i);
//     }
// }


var niza = [];
niza[100] = 'Pero';
console.log(niza);
console.log(niza[0]);
console.log(niza.length);

var c = 0;
for(var i in niza){
    c++;
}
console.log(c);



niza[2] = () => {
    console.log('niza vo funkcija');
    return () => {
        console.log('vtora niza vo funkcija');
    }
}

niza[2]()();

niza['ime'] = 'Pero';
console.log(niza.ime);
console.log(niza);




var studenti = [
    {ime: 'Pero', prezime: 'Perovski', prosek: 7.2},
    {ime: 'Ivan', prezime: 'Ivanovski', prosek: 9.3},
    {ime: 'Aleksandar', prezime: 'Aleksandrov', prosek: 7.1},
    {ime: 'Ana', prezime: 'Aneva', prosek: 9.7}
];


var p = 0;
var pCount = 0;
var prezime = 0;
var ime = 0;

for(var i in studenti){
    // sreden prosek na studentite
    p += studenti[i].prosek;
    pCount++;
    // najdolgo prezime
    if(studenti[i].prezime.length > studenti[prezime].prezime.length){
        prezime = i;
    }
    // najkratko ime
    if(studenti[i].ime.length < studenti[ime].ime.length){
        ime = i;
    }
}

console.log('Prosek:', (p / pCount), 'Prezime:', studenti[prezime].prezime, 'Ime:', studenti[ime].ime);

// var n = [];
// n[0] = 'a';
// n[1] = 'b';
// n[2] = 'c';
// n[102] = 'c';

// console.log(n.length);

// for(var i = 0; i < 100; i++){
//     console.log('TEST');
// }

// for(var i in n){

// }


// var obj = {
//     ime: 'Pero',
//     prezime: 'Perovski',
//     grad: 'Skopje'
// };

// for(var i in obj){
//     console.log(i);
// }

// n.forEach((v, i) => {
//     console.log(v, i);
// });

// var niza = [
//     {ime: "P", prezime: 'Pp'},
//     {ime: "O", prezime: 'Oo'},
// ];

// for(var i in niza){
//     console.log(niza[i].prezime);
// }
