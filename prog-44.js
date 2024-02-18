function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var i = 0; i < items.length; i++) {
        console.log("- " + items[i]);
    }
}
// Call the function with different numbers of arguments
make_sandwich('Ham', 'Cheese', 'Lettuce');
make_sandwich('Turkey', 'Swiss Cheese');
make_sandwich('Peanut Butter', 'Jelly');
