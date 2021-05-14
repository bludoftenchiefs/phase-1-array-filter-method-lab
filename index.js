const { useFakeXMLHttpRequest } = require("sinon");

// Code your solution here
function findMatching(drivers, name) {
    let array = drivers.filter(function (driver){
        return driver.toLowerCase() === name.toLowerCase();
     })
     console.log(array);
     return array;
}

function fuzzyMatch (drivers, letter) {
    let arrays = drivers.filter(function (driver){
        return driver.startsWith(letter);
    })
    console.log(arrays);
    return arrays;
}

function matchName (drivers, title) {
    let arrays = drivers.filter(function (driver){
        return driver.name === title;
    })
    console.log(arrays);
    return arrays;
}

