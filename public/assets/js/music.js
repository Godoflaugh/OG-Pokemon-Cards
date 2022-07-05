const lightBtn = document.querySelector('#light')
const darkBtn = document.querySelector('#dark')
const line = document.querySelector('#line')
const favoritesBox = document.querySelector('#favorites-box')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const ballClicker = document.querySelector('#catcher')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const welcomeBox = document.querySelector('#welcomeBox')
const mainBox = document.querySelector('#mainBox')
const filterBox = document.querySelector('#filterBox')
const musicTheme = document.querySelector('#musicBox')
const navbarColor = document.querySelector('#navbarColor')
const musicContainer = document.querySelector('.music-container')
const imgContainer = document.querySelector('.music-player')
const progresser = document.querySelector('.progresser')
const progressContainer = document.querySelector('.progress-container')
const slider = document.querySelector("input")
const cardContainer = document.querySelector('#pokemonRender')

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
    progresser.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

function lightMode() {
    welcomeBox.classList.remove('content-box-dark')
    welcomeBox.classList.add('content-box')
    filterBox.classList.remove('content-box-dark')
    filterBox.classList.add('content-box')
    

    musicContainer.classList.remove('music-container-dark')
    musicContainer.classList.add('music-container')

    playBtn.classList.remove('action-btn-dark')
    playBtn.classList.add('action-btn')
    prevBtn.classList.remove('action-btn-dark')
    prevBtn.classList.add('action-btn')
    nextBtn.classList.remove('action-btn-dark')
    nextBtn.classList.add('action-btn')

    document.body.classList.remove('dark-body')
    
    navbarColor.classList.remove('navbar-dark')
    navbarColor.classList.add('navbarColor')

    line.src = "./assets/img/vertical-line.png"

    cardContainer.classList.remove('content-box-dark')
    cardContainer.classList.add('content-box')
}

function darkMode() {
    welcomeBox.classList.remove('content-box')
    welcomeBox.classList.add('content-box-dark')
    filterBox.classList.remove('content-box')
    filterBox.classList.add('content-box-dark')

    musicTheme.classList.remove('music-container')
    musicTheme.classList.add('music-container-dark')

    playBtn.classList.remove('action-btn')
    playBtn.classList.add('action-btn-dark')
    prevBtn.classList.remove('action-btn')
    prevBtn.classList.add('action-btn-dark')
    nextBtn.classList.remove('action-btn')
    nextBtn.classList.add('action-btn-dark')

    document.body.classList.add('dark-body')
    
    navbarColor.classList.remove('navbarColor')
    navbarColor.classList.add('navbar-dark')

    line.src = "./assets/img/white-line.png"

    cardContainer.classList.add('content-box-dark')
    cardContainer.classList.remove('content-box')
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