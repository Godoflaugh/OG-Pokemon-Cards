const musicContainer = document.querySelector('.music-container')
const imgContainer = document.querySelector('.music-player')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const ballClicker = document.querySelector('#catcher')
const slider = document.querySelector("input")
const lightBtn = document.querySelector('#light')
const darkBtn = document.querySelector('#dark')

//Song Titles
const songs = ['Azalea Town', 'Lavender Town', 'Friendly Shop', 'Littleroot Town']
//Song Tracker
let songIndex = 3

//Intial Song Load DOM
loadSong(songs[songIndex])

//Song function
function loadSong(song) {
    title.innerText = song
    audio.src = `./assets/music/${song}.mp3`
    cover.src = `./assets/img/${song}.gif`
}

function playSong() {
    musicContainer.classList.add('play')
    imgContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    imgContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()
}

function prevSong() {
    songIndex--

    if(songIndex < 0) {
        songIndex = songs.length -1
    }

    loadSong(songs[songIndex])
    
    playSong()
}

function nextSong() {
    songIndex++

    if(songIndex > songs.length -1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])
    
    playSong()
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

function lightMode(e) {
}

//VOLUME SLIDER
slider.oninput = function () {
    progressBar = document.querySelector("progress")
    progressBar.value = slider.value
    sliderValue = document.querySelector(".sliderValue")
    sliderValue.innerHTML = slider.value
    audio.volume = slider.value / 100
}

//Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)
audio.addEventListener('ended', nextSong)
lightBtn.addEventListener('click', lightMode)
darkBtn.addEventListener('click', darkMode)