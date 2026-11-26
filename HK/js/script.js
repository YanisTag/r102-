var MY_EMAIL = "projethk.r102@gmail.com";

var themeLink = document.getElementById("theme-link");
var styleButton = document.getElementById("style-link");

var savedStyle = localStorage.getItem("style");
if (savedStyle) {
  themeLink.href = savedStyle;
}

styleButton.onclick = function (event) {
  event.preventDefault();
  if (themeLink.getAttribute("href") == "css/style.css") {
    themeLink.href = "css/style-light.css";
  } else { 
    themeLink.href = "css/style.css";
  }
  localStorage.setItem("style", themeLink.getAttribute("href"));
};

var form = document.getElementById("feedback-form");

if (form) {
  form.onsubmit = function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var note = document.getElementById("note").value;
    var message = document.getElementById("message").value;

    var subject = "Avis de " + name;
    var body = "Nom : " + name + "\nE-mail : " + email + "\nNote : " + note + "/5\n\n" + message;

    window.location.href = "mailto:" + MY_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  };
}
