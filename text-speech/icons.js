function fn1()
{
    var msg = document.getElementById("text").value;

    var speech = new SpeechSynthesisUtterance();
    speech.lang = "en-uk";

    speech.text = msg;
    speech.volume = 2;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}