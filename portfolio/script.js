var text = document.getElementById("contact");
var back = document.getElementById("contact-background");
var text1 = document.getElementById("FAQ");
var back1 = document.getElementById("FAQ-background");
var music = document.querySelector("audio");
var fre = document.querySelector(".answer1")
var quest = document.querySelector(".question1")
var fre = document.querySelector(".answer1")
var btn = document.querySelector("#btn1")




// music.play()

text.onclick = function () {
  text.classList.toggle("active");
  back.classList.toggle("active");
};

document.onclick = function (e) {
  if (e.target.id !== "contact-background" && e.target.id !== "contact") {
    // text.classList.add("move")
    text.classList.remove("active");
    back.classList.remove("active");
  }
};

text.onclick = function () {
  text.classList.toggle("active");
  back.classList.toggle("active");
};

text1.onclick = () => {
  back1.classList.toggle("mode");
};

window.onclick = (event) => {
  if(event.target.closest("back1"))
  return false
  if (!event.target.matches("#FAQ")) {
    if (back1.classList.contains("mode")) {
      back1.classList.remove("mode");
    }
          }
};
