var songs = ["1.mp3","2.mp3","3.mp3","4.mp3","5.mp3","6.mp3","7.mp3","8.mp3","9.mp3","10.mp3","11.mp3","12.mp3","13.mp3","14.mp3","15.mp3","16.mp3","17.mp3","18.mp3","19.mp3","20.mp3","21.mp3","22.mp3","23.mp3","24.mp3","25.mp3","26.mp3","27.mp3","28.mp3","29.mp3","31.mp3","32.mp3"];
var playedSong = [];
var player = new Audio();
const playIcon = $("#play-button");
const pauseIcon = $("#pause-button");
const volume = $("#volume-slider");
const slider = $("#slider");

//next-button
$("#next").click(function(){
    player.pause();
    playIcon.hide();
    pauseIcon.show();
    var song_no = Math.floor(Math.random() * songs.length);
    console.log(song_no);
    player.src = "./audio/" + songs[song_no];
    songInfo();
    player.play();
    playedSong.push(songs[song_no]);
    console.log(playedSong);
    pauseIcon.hide();
    playIcon.show();
})

//previous-button
$("#previous").click(function(){
    player.pause();
    playedSong.pop();
    player.src = "./audio/" + playedSong[playedSong.length-1];
    if(playedSong.length>0){
        player.play();
        songInfo();
        pauseIcon.show();
        playIcon.hide();
    }
    else{
        player.pause();
        songInfo();
        pauseIcon.hide();
        playIcon.show();
    }
})


//song-name
function songInfo(){
    if(player.src.includes("1.mp3")){
    $("h1").text("Moosedrilla-Sidhu Moosewala")
    $("#upper").removeClass();
    $("#upper").addClass("gradient-background1")
    }
    if(player.src.includes("2.mp3")){
        $("h1").text("Moosetape(Intro)-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background2")
    }
    if(player.src.includes("3.mp3")){
        $("h1").text("Pind Hood Damn Good-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background3")
    }
    if(player.src.includes("4.mp3")){
        $("h1").text("Racks and Rounds-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background4")
    }
    if(player.src.includes("5.mp3")){
        $("h1").text("Real One(Skit)-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background5")
    }
    if(player.src.includes("6.mp3")){
        $("h1").text("Regret-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background6")
    }
    if(player.src.includes("7.mp3")){
        $("h1").text("Sidhu Son-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background1")
    }
    if(player.src.includes("8.mp3")){
        $("h1").text("Signed to God-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background2")
    }
    if(player.src.includes("9.mp3")){
        $("h1").text("These Days-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background3")
    }
    if(player.src.includes("10.mp3")){
        $("h1").text("Trial Day(Skit)-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background4")
    }
    if(player.src.includes("11.mp3")){
        $("h1").text("Ultimatum(Skit)-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background5")
    }
    if(player.src.includes("12.mp3")){
        $("h1").text("Unfuckwithable-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background6")
    }
    if(player.src.includes("13.mp3")){
        $("h1").text("US-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background1")
    }
    if(player.src.includes("14.mp3")){
        $("h1").text("Burberry-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background2")
    }
    if(player.src.includes("15.mp3")){
        $("h1").text("Calaboose-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background3")
    }
    if(player.src.includes("16.mp3")){
        $("h1").text("Celebrity Killer-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background4")
    }
    if(player.src.includes("17.mp3")){
        $("h1").text("Chacha huu(Skit)-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background5")
    }
    if(player.src.includes("18.mp3")){
        $("h1").text("Facts(Skit)-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background6")
    }
    if(player.src.includes("19.mp3")){
        $("h1").text("GOAT-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background1")
    }
    if(player.src.includes("20.mp3")){
        $("h1").text("G-Shit-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background2")
    }
    if(player.src.includes("21.mp3")){
        $("h1").text("IDGAF-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background3")
    }
    if(player.src.includes("22.mp3")){
        $("h1").text("Invincible-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background4")
    }
    if(player.src.includes("23.mp3")){
        $("h1").text("Malwa Block-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background5")
    }
    if(player.src.includes("24.mp3")){
        $("h1").text("Me and MY Girlfriend-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background6")
    }
    if(player.src.includes("25.mp3")){
        $("h1").text("295-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background1")
    }
    if(player.src.includes("26.mp3")){
        $("h1").text("Amli Talk(Skit)-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background2")
    }
    if(player.src.includes("27.mp3")){
        $("h1").text("Aroma-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background3")
    }
    if(player.src.includes("28.mp3")){
        $("h1").text("B & W-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background4")
    }
    if(player.src.includes("29.mp3")){
        $("h1").text("Bitch I'm Back-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background5")
    }
    if(player.src.includes("30.mp3")){
        $("h1").text("Boo Call(Skit)-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background6")
    }
    if(player.src.includes("31.mp3")){
        $("h1").text("Brown Shortie-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background1")
    }
    if(player.src.includes("32.mp3")){
        $("h1").text("Neal-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background2")
    }
    if(player.src.includes("33.mp3")){
        $("h1").text("Moosedrilla-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background3")
    }
    if(player.src.includes("34.mp3")){
        $("h1").text("Moosedrilla-Sidhu Moosewala")
        $("#upper").removeClass();
        $("#upper").addClass("gradient-background4")
    }

}

//pause-play button
$("#pause-play").click(function(){
    if(player.paused){
        player.play();
        pauseIcon.show();
        playIcon.hide();
    }
    else{
        player.pause();
        pauseIcon.hide();
        playIcon.show();
    }
})

//volume-slider
volume.on("input", function(){
    player.volume = this.value / 100;
})

//slider
player.ontimeupdate = function(){
    slider.val((player.currentTime / player.duration) * 100);
}
slider.on("input",function(){
    player.currentTime = (this.value / 100) * player.duration;
    if(this.value == 100){
        $("#next").click();
    }
})