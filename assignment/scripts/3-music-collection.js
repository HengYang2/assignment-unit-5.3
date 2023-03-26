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
    trackName: 'Pears',
    duration: '2:00',
};
let song2 = {
    trackName: 'Apples',
    duration: '1:30',
};
let reusableTracksArray = [song1, song2];
let rayCharlesTracksArray = [{trackName: 'Best Song Ever', duration: '1:00',}];


//Testing addToCollection() function:
console.log("Testing addToCollection():", addToCollection( 'Green Trees', 'Magical Elves', '1990', reusableTracksArray));
console.log("Testing addToCollection():", addToCollection( 'Yellow Bells', 'Presents For You', '1996', reusableTracksArray));
console.log("Testing addToCollection():", addToCollection( 'Blue Clouds', 'Skyscrapers', '2010', reusableTracksArray));
console.log("Testing addToCollection():", addToCollection( 'Red Boots', 'Jaguars', '1989', reusableTracksArray));
console.log("Testing addToCollection():", addToCollection( 'Silver Night', 'Still In School', '1996', reusableTracksArray));
console.log("Testing addToCollection():", addToCollection( 'Brown Dirt', 'Magical Elves', '2011', reusableTracksArray));
console.log('Checking updated array:', collection);
addToCollection( 'Ray Charles Album', 'Ray Charles', '1957', rayCharlesTracksArray);


function showCollection( collection ) {
    console.log('Total number of items in array:', collection.length);
    for (const album of collection) {
        console.log(album.title + " by " + album.artist + ", " + "published in " + album.yearPublished + ":");
        for (let i=0; i<album.tracks.length; i++) {
            console.log( i+1 + '. ' + album.tracks[i].trackName + ': ' + album.tracks[i].duration);
        }
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
console.log('findByArtist() - Should expect empty array:', findByArtist('Unknown')); 
//Passing artist that exists only once as argument.
console.log('findByArtist() - Should expect 1 album by Jaguars:', findByArtist('Jaguars')); 
//Passing artist that exists twice as argument.
console.log('findByArtist() - Should expect 2 albims by Magical Elves', findByArtist('Magical Elves')); 


//Stretch Goals
function search( criteria ) {

    let array = [];
    if (criteria == undefined) {
        console.log('No argument passed.');
        return collection;
    } else if ( criteria.track != undefined ) {
        for (const album of collection) {
            for (const track of album.tracks) {
                if (track.trackName == criteria.track) {
                    array.push(album);
                }
            }
        }
        console.log('album found using track name.');
        return array;
    } else {
        for (const album of collection) {
            if (criteria.artist == album.artist && criteria.yearPublished == album.yearPublished) {
                array.push(album);
            }
        }
        console.log('album found using arist and year pubished criteria.');
        return array;
    }
}

let criteria0 = {
    artist: 'Unknown Artist', //Artist and track doesn't exist in collection array so search()
    yearPublished: '1957',    // - should return empty array.
    track: 'Unknown Song', 
}
let criteria1 = {
    artist: 'Ray Charles',
    yearPublished: '1957',
    track: 'Best Song Ever' //Track property exists so the search() should find an album based on track name.
}
let criteria2 = {           
    artist: 'Ray Charles',
    yearPublished: '1957', //No 'Track' propery was given, so the search() should return album based on arist
}                          // - and year published criteria.

//Testing
console.log('Search(0 - Should return whole collections array:', search());
console.log('Search() - Should expect empty array:', search(criteria0));
console.log('Search() - Should expect Ray Charles Album found by trackname:', search(criteria1));
console.log('Search() - Should expect Ray Charles Album found by artist and year published criteria:', search(criteria2));