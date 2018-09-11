var write = document.querySelector(".escape");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup-close");
var formModal = document.querySelector(".feedback");
var username = document.querySelector("[name=username]");
var email = document.querySelector("[name=e-mail]");
var message = document.querySelector("[name=letter]")
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}
write.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("popup-show");
if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("popup-show");
popup.classList.remove("popup-error");
});

forModal.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!username.value || !email.value || !letter.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("username", username.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
});
