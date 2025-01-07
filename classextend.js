//parent class
class Media {
    constructor(info) {
        this.publishDate = info.publishDate
        this.name = info.name
    }
}

//child class
class Song extends Media {
    constructor(sondData) {
        super(sondData)
        this.artist = sondData.artist
    }
}

const mySong = new Song({
    artist: "Wave to Earth",
    name: "Bad",
    publishDate: 2023
})

console.log(mySong)