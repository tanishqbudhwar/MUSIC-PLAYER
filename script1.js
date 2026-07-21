var previousSongs = [];
var songs = ["1.mp3","2.mp3","3.mp3","4.mp3","5.mp3","6.mp3","7.mp3","8.mp3","9.mp3","10.mp3","11.mp3","12.mp3","13.mp3","14.mp3","15.mp3","16.mp3","17.mp3","18.mp3","19.mp3","20.mp3","21.mp3","22.mp3","23.mp3","24.mp3","25.mp3","26.mp3","27.mp3","28.mp3","29.mp3","31.mp3","32.mp3","33.mp3","34.mp3"];
var i=0;
const playIcon = $("#play-button");
const pauseIcon = $("#pause-button");
var song = new Audio();
var next_song = new Audio();
var previousSong = new Audio();
pauseIcon.show();
$("#next").click(function(){
    song.pause();
    previousSong.pause();
    var n = Math.floor(Math.random()*songs.length);
    next_song.src = "./audio/" + songs[n];
    next_song.play();
    previousSongs.push(songs[n]);
    playIcon.show();
    pauseIcon.hide();
})
$("#previous").click(function(){
    next_song.pause();
    if(previousSongs.length > 0){
        previousSongs.pop();
    previousSong.src = "./audio/" + previousSongs[previousSongs.length-1];
    previousSong.play();
    }
})

$("#pause-play").click(function(){
    if(next_song.src !=="" && !previousSong.src){
        if(next_song.paused){
            next_song.play();
            playIcon.hide();
            pauseIcon.show();
        }
        else{
            next_song.pause();
            playIcon.show();
            pauseIcon.hide();
        }
    }
    else if(previousSong.src !==""){
        if(previousSong.paused){
            previousSong.play();
            playIcon.hide();
            pauseIcon.show();
        }
        else{
            previousSong.pause();
            playIcon.show();
            pauseIcon.hide();
        }
    }

})
