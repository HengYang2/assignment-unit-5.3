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

console.log("testing addToCollection():", addToCollection( 'Best-Song', 'Unknown', '1987'));
console.log('checking updated array:', collection);