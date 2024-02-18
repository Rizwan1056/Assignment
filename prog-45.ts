function carInfo(manufacturer, modelName, ...otherInfo) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Process additional key-value pairs
    for (let i = 0; i < otherInfo.length; i += 2) {
        let key = otherInfo[i];
        let value = otherInfo[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional key-value pairs
let myCar = carInfo("Toyota", "Camry", "color", "blue", "year", 2022);

console.log(myCar);
