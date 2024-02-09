function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums
var album1 = make_album("Queen", "A Night at the Opera");
var album2 = make_album("The Beatles", "Abbey Road");
var album3 = make_album("Metallica", "Master of Puppets", 8); // Including tracks
// Print the albums
console.log(album1);
console.log(album2);
console.log(album3);
