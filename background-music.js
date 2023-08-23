document.addEventListener('DOMContentLoaded', function () {
    var logo = document.getElementById('logo');
    var audio = document.getElementById('music');

    logo.addEventListener('click', function () {
        toggleAudio();
    });

    function toggleAudio() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
});
