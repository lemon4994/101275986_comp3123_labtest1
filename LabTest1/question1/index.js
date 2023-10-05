function lowerCaseWords(array){
    let promise = new Promise((resolve, reject) => {
        if(!Array.isArray(array)){
            reject("Submit an array please")
        }else{
            const filteredArray = array.filter(item => typeof item === 'string')
            if(filteredArray.length === 0) {
                reject("This array has no strings")
            }else{
                const lowercase = filteredArray.map(item => item.toLowerCase())
                resolve(lowercase)
            }
        }
    })

    return promise
}

const test1 = [1, 2, 'Three', false, "FIVE"]
const test2 = 5
const test3 = [1, 2, 3, 4, 5]

console.log("Test 1: " + test1)
lowerCaseWords(test1).then(data => { 
    console.log(data)
}).catch( error => {
    console.log("Error: " + error)
})

console.log("Test 2: " + test2)
lowerCaseWords(test2).then(data => { 
    console.log(data)
}).catch(error=> {
    console.log("Error: " + error)
})

console.log("Test 3: " + test3)
lowerCaseWords(test3).then(data => { 
    console.log(data)
}).catch(error => {
    console.log("Error: " + error)
})