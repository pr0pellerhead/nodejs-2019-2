console.log('TEST');

var ime = 'Bojan'; // String
var godini = 36; // Number - Integer
var visina = 1.82; // Number - Float
var vikend = false; // Boolean

var condition = 
    true && 
    (true || false) || 
    false

if(condition){
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if(condition){
    // ...
}

if(condition){
    // ...
} else {
    // ...
}

if(condition){
    // ...
} else if(condition){
    // ...  
} else if(condition){
    // ...
} else {
    // ...
}

var bukva = 'A';

switch(bukva){
    case 'A':
        console.log('bukva A');
        break;
    case 'B':
        console.log('bukva B');
        break;
    case 'C':
        console.log('bukva C');
        break;
    default:
        console.log('nepoznata bukva');
        break;
}

function zdravo() {
    console.log('Helloz!');
}

var pozdrav = function() {
    console.log('Helloz!');
}

var hello = () => {
    console.log('Helloz!');
}

var calc = (a, b) => {
    return a + b;
}

var res = calc(2, 6);
console.log(res);




var call = (a, b, pero) => {
    var c = a + b;
    pero(c);
}

var inside = (r) => {
    console.log(r * 2);
}

call(4, 7, inside);

var broj = 10;
inside(broj);


var name = 'Pero';
var ime = name;
console.log(ime);



// calc( 2,7, 'div', fn);

// div res / 2
// mul res * 2
// sub res - 2
// add res + 2

var calc = (a, b, op, cb) => {
    cb(a + b, op); // 34, 'div'
}

var math = (r, o) => {
    switch(o){
        case 'div':
            console.log(r / 2);
            break;
        case 'mul':
            console.log(r * 2);
            break;
        case 'sub':
            console.log(r - 2);
            break;
        case 'add':
            console.log(r + 2);
            break;
    }
}

calc(23, 11, 'div', math);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => {
    
// })

var ime = 'Janko';

var vetuvanje = () => {
    return new Promise((succ, fail) => { // succ & fail are functions
        if(ime == 'Pero'){
            return succ(ime);
        }
        return fail(ime);
    });
}

vetuvanje()
    .then(
        i => {
            console.log('SUCCESS ', i);
        },
        i => {
            console.log('FAIL ', i);
        }
    );


















































































