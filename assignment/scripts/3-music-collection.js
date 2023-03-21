console.log('***** Music Collection *****')
let collection = [];

function addToCollection( title, artist, yearPublished, tracks) {
    let newObject = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks,
    }
    collection.push(newObject);
    return newObject;
}

let song1 = {
    trackName: 'Bush',
    duration: '2:00',
};
let song2 = {
    trackName: 'Apples',
    duration: '1:30',
};
let reusableTracksArray = [song1, song2];

//Testing addToCollection() function:
console.log("Testing addToCollection():", addToCollection( 'Green Trees', 'Magical Elves', '1990', reusableTracksArray));
console.log("Testing addToCollection():", addToCollection( 'Yellow Bells', 'Presents For You', '1996', reusableTracksArray));
console.log("Testing addToCollection():", addToCollection( 'Blue Clouds', 'Skyscrapers', '2010', reusableTracksArray));
console.log("Testing addToCollection():", addToCollection( 'Red Boots', 'Jaguars', '1989', reusableTracksArray));
console.log("Testing addToCollection():", addToCollection( 'Silver Night', 'Still In School', '1996', reusableTracksArray));
console.log("Testing addToCollection():", addToCollection( 'Brown Dirt', 'Magical Elves', '2011', reusableTracksArray));
console.log('Checking updated array:', collection);


function showCollection( collection ) {
    console.log('Total number of items in array:', collection.length);
    for (const album of collection) {
        console.log(album.title + " by " + album.artist + ", " + "published in " + album.yearPublished);
    }
}
showCollection(collection);


function findByArtist( artist ) {
    let array = [];
    for (const album of collection) {
        if (album.artist === artist) {
            array.push(album);
        }
    }
    return array;
}

//Passing artist that does not exist as argument.
console.log('findByArtist() Results:', findByArtist('Unknown')); 
//Passing artist that exists only once as argument.
console.log('findByArtist() Results:', findByArtist('Jaguars')); 
//Passing artist that exists twice as argument.
console.log('findByArtist() Results:', findByArtist('Magical Elves')); 

//Stretch Goal
function search( artist, yearPublished, trackName) {
    let array = [];
    if (artist == undefined || yearPublished == undefined || trackName == undefined) {
        return collection;
    }
    for (const album of collection) {
        if (album.artist === artist && album.yearPublished === yearPublished && album.trackName == trackName) {
            array.push(album);
        }
    }
    return array;
}

//Testing
console.log('search() - expect array with 1 object:', search('Magical Elves', '2011', ''));
console.log('search() - expect empty array:', search('Fantasy Gnomes', '2011'));
console.log('search() - no arguments given, should expect whole collection array:', search());

