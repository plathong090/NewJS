function who() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("<3")
        } , 200 )
    })
}

function what() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("love")
        } , 300)
    })
}

function where() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("in the shadows")
        } , 500)
    })
}

async function msg() {
    const a =  who()
    const b = await what()
    const c =  where()
    console.log(`${a} ${b} ${c}`)
}

console.log("we are looking for : ")
msg();
console.log("Hello")