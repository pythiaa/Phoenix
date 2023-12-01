
function toggleLayout() {
    var newLayout = document.getElementById('newLayout');
    newLayout.classList.toggle('hidden');
    
    var imageWrapper = document.querySelector('.image-wrapper');
    imageWrapper.classList.toggle('shifted');
}
document.getElementById('speakButton').addEventListener('click', function() {
    var npcSpeech = "Rise like a phoenix. Begin by clicking download";
    speakText(npcSpeech);
    animateImage();
});

function speakText(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
} 

function animateImage() {
    var npcImage = document.getElementById('npcImage');

   
    npcImage.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(50px)' },
        { transform: 'translateX(0)' }
    ], {
        duration: 1000, 
        easing: 'ease-in-out',
    });
}


function animateImage() {
    var npcImage = document.getElementById('npcImage');

    npcImage.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(50px)' },
        { transform: 'translateX(0)' }
    ], {
        duration: 1000,
        easing: 'ease-in-out',
    });
}