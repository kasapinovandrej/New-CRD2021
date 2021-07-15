const myPromise = new Promise((res, rej) => {
    if (true) {
        setTimeout(() => {
            res('Success')
        }, 1000)
    } else {
        rej('Faled')
    }
})

myPromise
    .then(value => value + '!!!!').then(newValue => console.log(newValue))
    .catch(err => console.log(err))