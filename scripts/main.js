function PlayAudio(file) {
    var audio = new Audio(file);
    audio.play();
}
function PlayAudio(file, volume) {
    var audio = new Audio(file);
    audio.volume = volume;
    audio.play();
}