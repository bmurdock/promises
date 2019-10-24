function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

function loadStyle(src) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', src);
    document.head.append(link);
}