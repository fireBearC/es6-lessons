{
    let ajax = function () {
        console.log('running 1')
        return new Promise(function (resolve, reject) {
            setTimeout ( function () {
                resolve()
            }, 1000)
        })
    }

    ajax().then(function () {
        console.log('promise: timeout')
    })
}
