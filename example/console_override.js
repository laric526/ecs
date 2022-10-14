const consoleElement = document.getElementById("console");

if (window.console && console) {
    for (const c in console) {
        if (typeof console[c] === 'function') {
            const cx = console[c]
            console[c] = function () {
                const li = document.createElement("li");
                li.innerHTML = JSON.stringify(arguments);
                consoleElement.appendChild(li);
                cx.apply(this, arguments);
            }
        }
    }
}

window.onerror = function(error, url, line) {
    const li = document.createElement("li");
    li.innerHTML = `Error: ${error} on line ${line} of file ${url}.`;
    consoleElement.appendChild(li);
};

console.log("test!");