function s2t() {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = e => {
        alert(e.results[0][0].transcript);
    };
    recognition.onerror = e => {
        console.error(e);
    };
    recognition.start();
}

