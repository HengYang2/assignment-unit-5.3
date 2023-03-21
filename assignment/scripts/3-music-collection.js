console.log('***** Music Collection *****')
let collection = [];

function addToCollection( title, artist, yearPublished) {
    let newObject = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(newObject);
    return newObject;
}

//Testing addToCollection() function:
console.log("Testing addToCollection():", addToCollection( 'Green Trees', 'Magical Elves', '1990'));
console.log("Testing addToCollection():", addToCollection( 'Yellow Bells', 'Presents For You', '1996'));
console.log("Testing addToCollection():", addToCollection( 'Blue Clouds', 'Skyscrapers', '2010'));
console.log("Testing addToCollection():", addToCollection( 'Red Boots', 'Jaguars', '1989'));
console.log("Testing addToCollection():", addToCollection( 'Silver Night', 'Still In School', '1996'));
console.log("Testing addToCollection():", addToCollection( 'Brown Dirt', 'Magical Eleves', '2011'));
console.log('Checking updated array:', collection);

