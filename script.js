var range = document.getElementById('range');
var button = document.getElementById('button');
var song = document.getElementById('song');

song.onloadedmetadata = function(){
    // song.pause();
    range.max = song.duration;
    range.value = song.currentTime;
}

function playPause(){
    if (button.classList.contains('fa-pause')) {
        song.pause();
        button.classList.remove('fa-pause');
        button.classList.add('fa-play');
    }
    else{
        song.play();
        button.classList.remove('fa-play');
        button.classList.add('fa-pause');
    }
}

if (song.play()) {
    setInterval(()=>{
        range.value = song.currentTime;
    }, 500)
}

range.onchange = function(){
    song.currentTime = range.value;
    song.play();
    button.classList.remove('fa-play');
    button.classList.add('fa-pause');
}

let list = document.getElementById('list');

let musicList = [
    {
        id:1,
        songname:"Hoor - Hindi Medium",
        posterImage:"./images/Hoor-Hindi-Medium-500-500.jpg",
        songUrl:"./music/Hoor Hindi Medium 320 Kbps.mp3",
        singer:"Atif Aslam",
        category: "Hindi"
    },
    {
        id:2,
        songname:"Ik Naya Khuwab - Atif Aslam",
        posterImage:"./images/Ik-Naya-Khuwab-Atif-Aslam-500-500.jpg",
        songUrl:"./music/Ik Naya Khuwab Atif Aslam 320 Kbps.mp3",
        singer:"Atif Aslam",
        category: "Hindi"
    },
    {
        id:3,
        songname:"Main Agar - Tubelight",
        posterImage:"./images/Main-Agar-Tubelight-500-500.jpg",
        songUrl:"./music/Main Agar Tubelight 320 Kbps.mp3",
        singer:"Atif Aslam",
        category: "Hindi"
    },
    {
        id:4,
        songname:"Sajan Das Na - Coke Studio Season 14",
        posterImage:"./images/Sajan-Das-Na-Atif-Aslam-500-500.jpg",
        songUrl:"./music/Sajan Das Na Atif Aslam 320 Kbps.mp3",
        singer:"Atif Aslam",
        category: "Hindi"
    },
    {
        id:5,
        songname:"Habs OST - ARY Digital",
        posterImage:"./images/30 - Habs - OST - ARY - Digital.webp",
        songUrl:"./music/30 - Habs - OST - ARY (ApniISP.Com).mp3",
        singer:"Azad Azim & Shehroze Butt",
        category: "Pakistani OST"
    },
    {
        id:6,
        songname:"Mein OST - ARY Digital",
        posterImage:"./images/Mein-Asim-Azhar-ARY-Digital.jpg",
        songUrl:"./music/Mein_320(PaglaSongs).mp3",
        singer:"Asim Azhar",
        category: "Pakistani OST"
    }
]

for (let i = 0; i < musicList.length; i++) {
    list.innerHTML +=
    `
        <div class="musicImage" onclick="playSong(${i})">
            <div class="col-9 bg-white mx-auto mt-3">
                <img src="${musicList[i].posterImage}" alt="${musicList[i].songname}" class="img-fluid">
            </div>
            <h5 class="songtitle">${musicList[i].songname}</h5>
        </div>
    `;
}

function playSong(index){
    // // Remove existing visual feedback
    // var currentPlaying = document.querySelector('.playing');
    // if (currentPlaying) {
    //     currentPlaying.classList.remove('playing');
    // }
    
    // // Add visual feedback to the selected song
    // var selectedSong = document.querySelector(`#list .musicImage:nth-child(${index + 1})`);
    // selectedSong.classList.add('playing');

    song.src = musicList[index].songUrl;
    song.play();
    button.classList.remove('fa-play');
    button.classList.add('fa-pause');

    var songImage = document.getElementById('songImage');
    var songTitle = document.getElementById('songTitle');
    var songSinger = document.getElementById('songSinger');

    songImage.src = musicList[index].posterImage;
    songTitle.textContent = musicList[index].songname;
    songSinger.textContent = musicList[index].singer;
}
