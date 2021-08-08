enum PrintMedia {
    Newspaper,
    Newsletter = 11,
    Magazine = Newspaper * 5 + 800,
    Book = getMedia('Not Forbes'),
    Billboard = 0
}

function getMedia(mediaName: (string | number | boolean)): PrintMedia {
    if (mediaName == 'Forbes') return PrintMedia.Magazine;
}

const a = ['text', 3, '23'];
