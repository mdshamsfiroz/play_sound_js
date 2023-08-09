const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const stopButton = document.getElementById('stopButton');

playButton.addEventListener('click', () => {
    audioPlayer.play(); // Play the audio
});

pauseButton.addEventListener('click', () => {
    audioPlayer.pause(); // Pause the audio
});

stopButton.addEventListener('click', () => {
    audioPlayer.pause(); // Pause the audio
    audioPlayer.currentTime = 0; // Reset the audio to the beginning
});
