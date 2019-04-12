var promiseFunction = () => {
    return new Promise((pero1, pero2) => {
        if(2 + 2 == 4){
            return pero1({ime: 'Pero'});
        }
        return pero2();
    });
}

promiseFunction()
    .then((data) => {
        console.log(data);
        console.log('SUCCESS!');
    })
    .catch(err => {
        console.log('FAIL!');
    });






var pf = () => {
    return new Promise((success, fail) => {
        return fail();
    });
}

pf()
.then(() => {
    console.log('SSSSSSS');
})
.catch(err => {
    console.log('FFFFFFFFFF');
})
















