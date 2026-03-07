function PlayAudio(file) {
    var audio = new Audio(file + "?raw=true");
    audio.play();
}
function PlayAudio(file, volume) {
    var audio = new Audio(file + "?raw=true");
    audio.volume = volume;
    audio.play();
}