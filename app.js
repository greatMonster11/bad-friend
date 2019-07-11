const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = [
  "Im good you little peace of love",
  "Doing good homeboy",
  "Leave me alone"
];
const weather = ["Weather is fine", "You need a tan"];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log("voice is acctivated, you can to microphoneeee ");
};

recognition.onresult = function(event) {
  // console.log(event);
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

//add the listener to the button
btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  // for default value
  speech.text = "i don't know what you said";

  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(random() * greetings.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
