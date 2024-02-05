function printMessage() {
    console.log("The future is now!");
}

setTimeout(printMessage, 5000);

// passing anonymous function as argument
setTimeout(function () {
    console.log("The future is now!");
}, 5000);