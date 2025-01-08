class Song {
    constructor(title , artist) {
        this.title = title;
        this.artist = artist;
    }
}

const mySong = new Song("Bad" , "Sunset");
console.log(mySong.title);
console.log(mySong.artist);