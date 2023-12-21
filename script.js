let currentAudio = null;

function showFlowers(flowerType) {
    const flowersDiv = document.getElementById('flowers');
    const flowerImages = {
        Roses: 'rose.jpg',
        Tulip: 'tulip.jpeg',
        Daisy: 'daisy.jpg'
    };
    const flowerAudio = {
        Roses: 'rose.mp3',
        Tulip: 'tulip.mp3',
        Daisy: 'daisy.mp3'
    };

    flowersDiv.innerHTML = `<p>${flowerType} for you:</p>`;
    flowersDiv.innerHTML += `<img src="${flowerImages[flowerType]}" alt="${flowerType}" style="width: 500px; height: 500px;">`;

    // Stop the current audio if it is playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Play the new audio for 10 seconds
    const audio = new Audio(flowerAudio[flowerType]);
    audio.play();
    currentAudio = audio;

    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, 10000);
}
