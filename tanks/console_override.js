const consoleElement = document.createElement("ul");

if (window.console && console) {
    for (const c in console) {
        if (typeof console[c] === 'function') {
            alert("console_override.js: overriding console");
            const cx = console[c]
            console[c] = function () {
                alert(`console_override.js: console.x called`);
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

window.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(consoleElement);
});

console.log('a');
console.error("err");