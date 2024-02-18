function carInfo(manufacturer, modelName) {
    var otherInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Process additional key-value pairs
    for (var i = 0; i < otherInfo.length; i += 2) {
        var key = otherInfo[i];
        var value = otherInfo[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional key-value pairs
var myCar = carInfo("Toyota", "Camry", "color", "blue", "year", 2022);
console.log(myCar);
