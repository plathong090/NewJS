const promise = new Promise ((resolve, reject) => {
    const res = true;

    //an asynchronus operation
    if (res) {
        resolve("Resolved!")
    } else {
        reject(Errorr("Fatal Error"));
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
)