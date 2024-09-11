const songs = [
    {
        title: "Star Boi",
        src: "Starboy(PagalWorld).mp3"
    },
    {
        title: "Popular Song",
        src: "Popular-(320Kbps.Com.In).mp3"
    },
    {
        title: "Devara Title Song",
        src: "[iSongs.info] 01 - All Hail The Tiger.mp3"
    },
    {
        title: " Mandu Baabulam Song",
        src: "[iSongs.info] 03 - Mandu Baabulam.mp3"
    },
    {
        title: "Nattu Nattu Song",
        src: "[iSongs.info] 05 - Naatu Naatu.mp3"
    },
    {
        title: "Pilla Gabbar Singh Song",
        src: "[iSongs.info] 04 - Pillaa.mp3"
    },
    {
        title: "Kevvu kekka Gabbar Singh Song",
        src: "[iSongs.info] 07 - Kevvu Keka (Remix).mp3"
    },
];

let songIndex = 0;
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');

function loadSong(song) {
    title.innerText = song.title;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    playBtn.innerText = '⏸ Pause';
}

function pauseSong() {
    audio.pause();
    playBtn.innerText = '▶ Play';
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Load the first song initially
loadSong(songs[songIndex]);
