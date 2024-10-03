function lowerCaseWords(array) {
    let promise = new Promise((resolve, reject) => {
        if(!Array.isArray(array)) {
            reject("This is not an array!")
        } else {
            const filter = array.filter(item => typeof item === 'string')
            if(filter.length === 0) {
                reject("This has no strings!")
            } else {
                resolve(filter.map(item => item.toLowerCase()))
            }
        }
    })
    return promise
}

const tests = [1, [1, true, 'Three', 4, 'FIVE'], [1,2,3,4,5]]
for (let i in tests) {
    lowerCaseWords(tests[i]).then(data => {
        console.log("Test " + (parseInt(i) + 1) + ": \"" + tests[i] + "\"");
        console.log(data);
    }).catch( error => {
        console.log("Test " + (parseInt(i) + 1) + ": \"" + tests[i] + "\"");
        console.log("Error: " + error);
    });
}