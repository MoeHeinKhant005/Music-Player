const backArrow = document.querySelector('.leftArrow');

backArrow.addEventListener('click', e => {
    location.href = "artists.html";
})

const heart = document.querySelector('.heart');
let isHearted = false;

heart.addEventListener('click', e => {
    if(isHearted == false){
        heart.setAttribute('src', '../Sources/heartFull.png')
        isHearted = true;
    }else if(isHearted == true){
        heart.setAttribute('src', '../Sources/heartEmpty.png');
        isHearted = false;
    }
})

const Songs = [
    {
        song1Name: "Shawn Mendes - There's Nothing Holding Me Back",
        url : "../Sources/Songs/Shawn Mendes - There's nothing holding me back.mp3"
    },
    {
        song2Name: "Shawn Mendes - Imagination",
        url : "../Sources/Songs/Shawn Mendes - Imagination.mp3"
    },
    {
        song3Name: "Shawn Mendes - Treat You Better",
        url : "../Sources/Songs/Shawn Mendes - Treat you better.mp3"
    }
]

/* Playing Audio*/
const audio = document.querySelector('audio');
const audioSrc = document.querySelector('source');

const musicSec = document.querySelector('.MusicSection')
const song1 = document.querySelector('.song1');
const song2 = document.querySelector('.song2');
const song3 = document.querySelector('.song3');

const currentSongName = document.querySelector('.currentSongName');
const musicControlBar = document.querySelector('.musicControl');
const playPauseBtn = document.querySelector('.playPause');
let isPlaying = false;

musicSec.addEventListener('click', e => {
    if(e.target == song1){
        musicControlBar.style.display = "flex";
        currentSongName.innerText = Songs[0].song1Name;
        audioSrc.src = Songs[0].url;
        audio.load();
        audio.play();
        isPlaying = true;
    }else if(e.target == song2){
        musicControlBar.style.display = "flex";
        currentSongName.innerText = Songs[1].song2Name;
        audioSrc.src = Songs[1].url;
        audio.load();
        audio.play();
        isPlaying = true;
    }
    else if(e.target == song3){
        musicControlBar.style.display = "flex";
        currentSongName.innerText = Songs[2].song3Name;
        audioSrc.src = Songs[2].url;
        audio.load();
        audio.play();
        isPlaying = true;
    }
})

/* For music control bar*/

playPauseBtn.addEventListener('click', e => {
    if(isPlaying == true){
        playPauseBtn.setAttribute('src', '../Sources/playIcon.png');
        audio.pause(); 
        isPlaying = false;
    }else if(isPlaying == false){
        playPauseBtn.setAttribute('src', '../Sources/pauseIcon.png');
        audio.play();
        isPlaying = true;
    }
})
