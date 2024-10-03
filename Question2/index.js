function resolvedPromise(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Delayed success!")
        }, 500)
    })
    return promise
}

function rejectedPromise(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Delayed rejection!")
        })
    })
    return promise
}

let message = ""
resolvedPromise().then(data => {
    message = data
}).catch( error => {
    message = error
}).finally(() =>{
  console.log(message)
})

rejectedPromise().then(data => {
    message = data
}).catch( error => {
    message = error
}).finally(() => {
    console.log(message)
})