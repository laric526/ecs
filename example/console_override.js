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

console.log("test!");