function toggleAudio() { 
    const audio = document.getElementById('background-audio'); 
    const icon = document.getElementById('volume-icon'); 
 
    if (audio.paused) { 
        audio.play(); 
        icon.src = 'audio.png'; 
    } else { 
        audio.pause(); 
        icon.src = 'audio.png'; 
    } 
}