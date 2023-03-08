console.log("welcome to spotify");
//initialize the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songsItem= Array.from (document.getElementsByClassName('songItem'));

let songs =[
    { songName:"Apna Bana Le ",filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    { songName:"mujhe peene do",filePath:"songs/6.mp3",coverPath:"cover/.jpg"},
    { songName:"piya aye na",filePath:"songs/5.mp3",coverPath:"cover/5.jpg"},
    { songName:"Kesariya ",filePath:"songs/6.mp3",coverPath:"cover/4.jpg"},
    { songName:"DEVA DEVA ",filePath:"songs/5.mp3",coverPath:"cover/5.jpg"},
    { songName:"Tujhe Kitna Chahne Lage",filePath:"songs/6.mp3",coverPath:"cover/6.jpg"},

]
songsItem.forEach((element,i)=>{
   
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songname")[0].innerText =songs[i].songName;
})
//handel play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
console.log(progress);
})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
        Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
            element.classList.add('fa-circle-play');
            element.classList.remove('fa-circle-pause');
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
makeAllPlays();
songIndex=parseInt(e.target.id);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
audioElement.src=`songs/${songIndex}.mp3`;
mastersongname.innerText= songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity=1;
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
    })
});


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }else{
        songIndex +=1;
    }
audioElement.src=`songs/${songIndex}.mp3`;
mastersongname.innerText= songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex -=1;
    }
audioElement.src=`songs/${songIndex}.mp3`;
mastersongname.innerText= songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
})