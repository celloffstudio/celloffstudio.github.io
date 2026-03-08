function PlayAudio(file) {
    var audio = new Audio(file);
    audio.play();
}
function PlayAudio(file, volume) {
    var audio = new Audio(file);
    audio.volume = volume;
    audio.play();
}
function RandomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}