function make_album(artist, title, tracks) {
    if (tracks === void 0) { tracks = null; }
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== null) {
        album.tracks = tracks;
    }
    return album;
}
// Create albums without specifying the number of tracks
var album1 = make_album("Geet Mala", "1989");
var album2 = make_album("Aadat", "Atif Aslam");
// Create an album with the number of tracks specified
var album3 = make_album("Noha", "Nadeem Sarwar", 10);
// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
