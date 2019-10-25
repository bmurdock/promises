function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
    if (typeof callback === 'function') {
        script.addEventListener('load', function (event) {
            callback(script);
        });
    }
}

function promiseScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);
        script.addEventListener('load', function (event) {
            resolve(script);
        });
    });
}

function loadStyle(src) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', src);
    document.head.append(link);
}