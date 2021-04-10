function songs(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let n = input.shift();
    let filter = input.pop();

    for (let song of input) {
        let [type, name, time] = song.split("_");
        song = new Song(type, name, time);
        songs.push(song);
    }

    if (filter == 'all') {
        songs.forEach(x => console.log(x.name));
    } else {
        let filtered = songs.filter(x => x.type == filter);
        filtered.forEach(x => console.log(x.name));
    }
}

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);