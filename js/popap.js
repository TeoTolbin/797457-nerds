var escape = document.querySelector(".escape");
var popap = document.querySelector(".popap");
var close = document.querySelector(".popap-close");
var formPopap = document.querySelector(".feedback");
var username = document.querySelector("[name=username]");
var email = document.querySelector("[name=e-mail]");
var letter = document.querySelector("[name=letter]")
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}
escape.addEventListener("click", function (evt) {
evt.preventDefault();
popap.classList.add("popap-show");
if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popap.classList.remove("popap-show");
popap.classList.remove("popap-error");
});

forPopap.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!username.value || !email.value || !letter.value) {
    evt.preventDefault();
    popap.classList.remove("popap-error");
    popap.offsetWidth = popap.offsetWidth;
    popap.classList.add("popap-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("username", username.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popap.classList.contains("popap-show")) {
      popap.classList.remove("popap-show");
      popap.classList.remove("popap-error");
    }
  }
});
