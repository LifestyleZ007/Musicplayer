var audio, playBtn, title, poster, artists, seekslider,
    seeking = false, seekto, currentTimeText, durationTimeText,
    playlistStatus, dir, playlist, ext, agent, playlistArtist,
    repeat, randomSong, listSongs;


let currentSongI = 0;
let myArray = [
    {
        title: 'Cartoon - On & On',
        artist: 'Daniel Levi',
        poster: '1.jpg',
        song: 'Cartoon - On & On.mp3'
    },

    {
        title: 'Diviners-X-Riell-Slow',
        artist: 'Diviners-X-Riell',
        poster: '2.jpg',
        song: 'Diviners-X-Riell-Slow.mp3'
    },

    {
        title: 'King-Promise-Odo-ft-Raye',
        artist: 'King Promise ft Raye',
        poster: 'odo.png',
        song: 'King-Promise-Odo-ft-Raye.mp3'
    },

    {
        title: 'FEM',
        artist: 'Davido',
        poster: 'fem.jpg',
        song: 'FEM.mp3'
    },

    {
        title: 'So Fine',
        artist: 'Crayon',
        poster: 'Crayon-So-Fine-image.jpg',
        song: 'So Fine.mp3'
    },

    {
        title: 'Betty Butter',
        artist: 'Mayorkun ft Davido',
        poster: 'Mayorkun-Betty-Butter-Artwork.jpg',
        song: 'Betty Butter.mp3'

    },

    {
        title: 'Risky',
        artist: 'Davido ft Popcan',
        poster: 'risky-poster.jpg',
        song: 'Risky.mp3'
    },

    {
        title: 'OmahLay-Damn',
        artist: 'Omahlay',
        poster: 'OmahLay.jpg',
        song: 'Damn.mp3'
    }

]

let autoplay = 0;
playlistIndex = 0;


playBtn = document.querySelector('#playpausebtn');
nextBtn = document.querySelector('#nextbtn');
prevBtn = document.querySelector('#prevbtn');
listbtn = document.querySelector('#listbtn');
seekslider = document.querySelector('#seekslider');
currentTimeText = document.querySelector('#currentTimeText');
durationTimeText = document.querySelector('#durationTimeText');
playlistStatus = document.querySelector('#playlistStatus');
playlistArtist = document.querySelector('#playlistArtist');
repeat = document.querySelector('#repeatbtn');
randomSong = document.querySelector('#random');
listSong = document.querySelector('#listSong')


audio = new Audio();

audio.src = myArray[playlistIndex].song
audio.loop = false;

playlistStatus.innerHTML = myArray[playlistIndex].title;
playlistArtist.innerHTML = myArray[playlistIndex].artist;

playBtn.addEventListener('click', playPause);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
listbtn.addEventListener('click', listBtn);
seekslider.addEventListener('mousedown', (e) => {
    seeking = true;
    seek(e);
});
seekslider.addEventListener('mousemove', (e) => {
    seek(e);
});

seekslider.addEventListener('mouseup', () => {
    seeking = false;
})

audio.addEventListener('timeupdate', () => {
    seektimeupdate()
})
audio.addEventListener('ended', () => {
    switchTracks();
})
repeat.addEventListener('click', loop);
randomSong.addEventListener('click', random);



// **FUNCTIONS**


//GET MUCSIC DETAILS

function getMusicDetails(myimage, mycaption, myartist, mypath) {
    document.getElementById('image').setAttribute('src', myimage);
    playlistStatus.innerHTML = mycaption;
    playlistArtist.innerHTML = myartist;
    audio.src = mypath;
    // console.log(caption);
    audio.play();
}

function findEle(targ) {
    // console.log(targ);
    myArray.map((key, songI) => {
        if (key.title == targ) {
            currentSongI = songI;
            myimage = key.poster;
            mycaption = key.title;
            myartist = key.artist;
            mypath = key.song;
            console.log(currentSongI);
            getMusicDetails(myimage, mycaption, myartist, mypath);
            body.classList.add('gradient');
            fixedBottomBg.style.display = "none";
        }
    })
    document.querySelector('.playpause').classList.add('active');
    // console.log(document.getElementById('listSong').innerHTML);
    // document.querySelector('#toggle').classList.remove('fa-chevron-left');
    // document.querySelector('#toggle').classList.add('fa-chevron-down');
    displayImage.classList.remove('hide');
    listId.style.display = 'none';
    listSong.innerHTML = '<i class="far fa-chevron-down"></i>';
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.classList.contains('songT')) {
        let dname = e.target.innerText;
        findEle(dname);
    }
})


//PLAY SONG IF SONG IS PAUSED OR PAUSE SONG IF SONG IS PLAYING

function playPause() {
    if (audio.paused) {
        audio.play()
        body.classList.add('gradient')
        document.querySelector('.playpause').classList.add('active')
    } else {
        audio.pause();
        body.classList.remove('gradient')
        document.querySelector('.playpause').classList.remove('active')
    }
    // fixedBottom.classList.add('gradient')
    // fixedBottomBg.classList.add('gradient')
    // fixedBottomBg.style.background ="red";
    // container.style.borderRadius == "20px"


}



//PLAY NEXT SONG

function nextSong() {
    currentSongI++;
    myArray.forEach((element, index) => {
        if (currentSongI == myArray.length) {
            currentSongI = 0;
        }
        if (index == currentSongI) {
            myimage = element.poster;
            mycaption = element.title;
            myartist = element.artist;
            mypath = element.song;
            getMusicDetails(myimage, mycaption, myartist, mypath);
        }
    })
    document.querySelector('.playpause').classList.add('active')
}




//PLAY PREVIOUS SONG

function prevSong() {
    currentSongI--;
    myArray.forEach((element, index) => {
        if (currentSongI == -1) {
            currentSongI = 0;
        }
        if (index == currentSongI) {
            myimage = element.poster;
            mycaption = element.title;
            myartist = element.artist;
            mypath = element.song;
            getMusicDetails(myimage, mycaption, myartist, mypath);
        }
    })
    document.querySelector('.playpause').classList.add('active')
}

//SWICTH TRACKS WHEN A TRACK IS ENDED

function switchTracks() {
    currentSongI++;
    myArray.forEach((element, index) => {
        if (currentSongI == myArray.length) {
            currentSongI = 0;
        }
        if (index == currentSongI) {
            myimage = element.poster;
            mycaption = element.title;
            myartist = element.artist;
            mypath = element.song;
            getMusicDetails(myimage, mycaption, myartist, mypath);
        }
    })
}



//RANDOM SONG GENERATOR

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function random() {
    let randomIndex = getRandomNumber(0, myArray.length - 1);
    currentSongI = randomIndex;
    getMusicDetails();
    nextSong(currentSongI)
    document.querySelector(".playpause").classList.add("active");
}


//LOOPING THROUGH THE SONG LIST

function loop() {
    if (audio.loop) {
        audio.loop = false;
        document.querySelector(".repeat").classList.remove("active");
    } else {
        audio.loop = true;
        document.querySelector(".repeat").classList.add("active");
    }
}


function seek(event) {
    if (audio.duration == 0) {
        null
    } else {
        if (seeking) {
            seekslider.value = event.clientX - seekslider.offsetLeft;
            seekto = audio.duration * (seekslider.value / 100);
            audio.currentTime = seekto;
        }
    }
}

function seektimeupdate() {
    if (audio.duration) {
        var nt = audio.currentTime * (100 / audio.duration);
        seekslider.value = nt;
        var curmins = Math.floor(audio.currentTime / 60);
        var cursecs = Math.floor(audio.currentTime - curmins * 60);
        var durmins = Math.floor(audio.duration / 60);
        var dursecs = Math.floor(audio.duration - durmins * 60);
        if (cursecs < 10) { cursecs = "0" + cursecs; }
        if (dursecs < 10) { dursecs = "0" + dursecs; }
        if (curmins < 10) { curmins = "0" + curmins; }
        if (durmins < 10) { durmins = "0" + durmins; }
        currentTimeText.innerHTML = curmins + ":" + cursecs;
        durationTimeText.innerHTML = durmins + ":" + dursecs;
    } else {
        currentTimeText.innerHTML = "00" + ":" + "00";
        durationTimeText.innerHTML = "00" + ":" + "00";
    }
}

// VOLUME

function setVolume() {
    var rangge = document.querySelector('#volumeSlider').value;
    audio.volume = rangge / 100;
    let volumee = audio.volume * 100
}
// toggleVolume.addEventListener('click', (e) => {
//     volum.classList.add('show2');
// })
toggleVolume.addEventListener('click', openVolume)

function openVolume(){
    if(volum.style.display == "none"){
        volum.style.display = "block";
        // console.log("yes");
    } else{volum.style.display = "none"}
    // console.log("no");
}
    


document.querySelector('body').addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('volume-bar')) {
        myTimeOut = setTimeout(function () {
            volum.classList.remove('show2');
        }, 4000)
    }
})

// TOGGLE OPEN THE MUSICLIST PAGE AND BACK TO THE PLAYLIST

function openPlaylist() {
    document.querySelector('body').addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-chevron-down')) {
            listSong.innerHTML = '<i class="far fa-chevron-left"></i>';
            displayImage.classList.add('hide');
            listId.style.display = 'block';
            fixedBottomBg.style.background = "linear-gradient(50deg, #ee9032, #f16d52, #ec4a77, #a063aa,#7963aa, #4b6eb5, #109aaf,#07b89f, #6bb97f)";
            fixedBottomBg.style.display = "block"
            fixedBottomBg.style.opacity = "0.9";
        } else if (e.target.classList.contains('fa-chevron-left')) {
            e.target.classList.remove('fa-chevron-left');
            e.target.classList.add('fa-chevron-down');
            displayImage.classList.remove('hide');
            listId.style.display = 'none';
            fixedBottomBg.style.display = "none"
        }

    })
}
openPlaylist()

// OPEN PLAYLIST OF PLAYING A SONG FROM MUSICLST

function listBtn() {
    document.querySelector('body').addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-list')) {
            listSong.innerHTML = '<i class="far fa-chevron-left"></i>';
            displayImage.classList.add('hide');
            listId.style.display = 'block';
            fixedBottomBg.style.background = "linear-gradient(50deg, #ee9032, #f16d52, #ec4a77, #a063aa,#7963aa, #4b6eb5, #109aaf,#07b89f, #6bb97f)";
            fixedBottomBg.style.display = "block";
            fixedBottomBg.style.opacity = "0.9";
        } else if (e.target.classList.contains('fa-chevron-left')) {
            e.target.classList.remove('fa-chevron-left');
            e.target.classList.add('fa-chevron-down');
            displayImage.classList.remove('hide');
            listId.style.display = 'none';
        }

    })
}


// LIST MUSIC ON THE MUSICLIST PAGE FROM ARRAY

function playSongFrmList() {
    myArray.forEach(function (element, index) {

        tbody.innerHTML += `<tr><td><img src="${element.poster}" id="listImg" class="image listSong"></td><td class="songTitle listSong" id="playIt"><strong class ="songT" style="font-family: 'Ubuntu';">${element.title}</strong><span>${element.artist}</span</td><td><i id="listToggle" class="fas fa-ellipsis-v"></i></td></tr>`

    });
}
playSongFrmList()


// ONSCROLLING BACKGROUND DESIGN FOR HEADER

window.onscroll = function () {

    var scrollBg = document.querySelector('#scrollBg');

    if (window.scrollY >= 40) {

        scrollBg.style.display = "block";
        scrollBg.style.background = "linear-gradient(50deg, #ee9032, #f16d52, #ec4a77, #a063aa,#7963aa, #4b6eb5, #109aaf,#07b89f, #6bb97f)";
        scrollBg.style.opacity = "0.9";
        volum.style.position = "fixed";
        options.style.position = "fixed";


    }else if(window.scrollY <= 1){
        scrollBg.style.display = "none";
    } else if(window.scrollY >= 1 || window.scrollY <= 1){
        fixedBottomBg.style.background = "linear-gradient(50deg, #ee9032, #f16d52, #ec4a77, #a063aa,#7963aa, #4b6eb5, #109aaf,#07b89f, #6bb97f)";
        fixedBottomBg.style.display = "block";
        fixedBottomBg.style.opacity = "0.9";
    } else {
        scrollBg.style.display = "none";
        scrollBg.style.background = "transparent";
        fixedBottomBg.style.background = "transparent";
        fixedBottomBg.style.display = "none"
    }

}

function opensearch(){

    document.getElementById("sbar").style.right = "0";
    
    scrollTo(0, 145);
     
}


function closesearch(){

    document.getElementById("sbar").style.right = "-100%";
    
    document.getElementById("inp").value = "";
    
   var cardc = document.getElementsByClassName("card");
   
   for(var i = 0; i<=cardc.length-1; i++){
       
       cardc[i].style.display = "";
       
   }
     
 }









toggleOption.addEventListener('click', () => {
    options.classList.add('show')
})

listToggle = document.querySelector('#listToggle');
listToggle.addEventListener('click', () => {
    // alert("I dey work o")
    options.classList.add('show')
})

document.querySelector('body').addEventListener('click', (e) => {
    if (!e.target.classList.contains('clickOut')) {
        options.classList.remove('show');
    }
})
