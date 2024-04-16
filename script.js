document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("audio-player");
  let pauseBtn = document.getElementById("play-pause-btn");
  let seekBar = document.getElementById("seek-bar");
  let currentTime = document.getElementById("current-time");
  let duration = document.getElementById("duration");

  pauseBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      pauseBtn.innerHTML = "&#10074;&#10074;";
    } else {
      audio.pause();
      pauseBtn.innerHTML = "&#9658;";
    }
  });

  audio.addEventListener("timeupdate", function () {
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime % 60);
    currentTime.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    seekBar.value = (audio.currentTime / audio.duration) * 100;
  });

  seekBar.addEventListener("input", function () {
    let seekTime = (audio.duration / 100) * seekBar.value;
    audio.currentTime = seekTime;
  });

  audio.addEventListener("durationchange", function () {
    let minutes = Math.floor(audio.duration / 60);
    let seconds = Math.floor(audio.duration % 60);
    duration.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  });
});
