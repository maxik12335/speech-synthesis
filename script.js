// захватим UI-элементы для работы с ними
const textEl = document.getElementById('text');
const speakEl = document.getElementById('speak');

// get voice
let voice = null;
window.speechSynthesis.onvoiceschanged = () => {
    voice = window.speechSynthesis.getVoices()
    console.log(voice)
}

// перехватим клик по кнопке
speakEl.addEventListener('click', () => {
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance()
    utterance.voice = voice[4]
    utterance.rate = 1
    utterance.text = textEl.value
    utterance.pitch = 0
    window.speechSynthesis.speak(utterance)
});
