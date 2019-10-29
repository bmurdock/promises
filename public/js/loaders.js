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

function loadStyle(src, callback) {
    // Main code for the load style function.
    // This gets executed no matter what
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', src);
    document.head.append(link);
    // If callback is passed as an argument, then execute the rest
    if (typeof callback === 'function') {
        // The file loads succesfully
        link.addEventListener('load', (event) => {
            // In a promise, this would be the resolve
            // The first argument is null to indicate that there is no error
            callback(null, link);
        });
        // The file does not load
        // the error event is only valid for
        // <img>, <input type="image">, <object>, <link>, and <script>
        // We can add it because our link is <link>
        link.addEventListener('error', (event) => {
            // In a promise, this would be the reject
            const err = new Error('Stylesheet failed to load.');
            callback(err);
        });
    }
}
function promiseStyle(src) {
    return new Promise(function (resolve, reject) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', src);
        document.head.append(link);
        link.addEventListener('load', (event) => {
            // In a promise, this would be the resolve
            // The first argument is null to indicate that there is no error
            resolve(link);
        });
        // The file does not load
        // the error event is only valid for
        // <img>, <input type="image">, <object>, <link>, and <script>
        // We can add it because our link is <link>
        link.addEventListener('error', (event) => {
            // In a promise, this would be the reject
            const err = new Error('Stylesheet failed to load.');
            reject(err);
        });
    })
}