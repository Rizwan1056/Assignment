function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

let magicians = ['Rizwan', 'Waleed', 'asim', 'Sadiq'];

make_great(magicians);
show_magicians(magicians);
