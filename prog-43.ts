function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians) {
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push("the Great " + magicians[i]);
    }
    return great_magicians;
}

let magicians = ['Dani', 'Copper', 'Shan', 'Zahid'];

let great_magicians = make_great(magicians.slice()); // Pass a copy of the array

console.log("Original magicians:");
show_magicians(magicians);
console.log("\nGreat magicians:");
show_magicians(great_magicians);
