class media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class song extends media {
    constructor(songdata) {
        super(songdata);
        this.artist = songdata.artist;
    }
}

const mySong = new song({
    artist: 'Adele',
    name: 'Hello',
    publishDate: '1975'
});

console.log(mySong);