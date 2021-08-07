enum PrintMedia {
    Newspaper,
    Newsletter = 11,
    Magazine = Newspaper * 5 + 800,
    Book = getMedia('Not Forbes'),
    Billboard
}

function getMedia(mediaName: string): PrintMedia {
    if (mediaName == 'Forbes') return PrintMedia.Magazine;
}