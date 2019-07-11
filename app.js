const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log("voice is acctivated, you can to microphoneeee ");
};

recognition.onresult = function(event) {
  console.log(event);
};

//add the listener to the button
btn.addEventListener("click", () => {
  recognition.start();
});
