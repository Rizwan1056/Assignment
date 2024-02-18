function make_sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (let i = 0; i < items.length; i++) {
        console.log("- " + items[i]);
    }
}

// Call the function with different numbers of arguments
make_sandwich('Ham', 'Cheese', 'Lettuce');
make_sandwich('Turkey', 'Swiss Cheese');
make_sandwich('Peanut Butter', 'Jelly');
