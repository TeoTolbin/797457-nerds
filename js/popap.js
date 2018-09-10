var write = document.querySelector(".btn-popap");
var modal = document.querySelector(".popap");
var close = document.querySelector(".popap-close");
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
modal.classList.add("popap-show");
if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
modal.classList.remove("popap-show");
modal.classList.remove("popap-error");
});

formModal.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!username.value || !email.value || !message.value) {
    evt.preventDefault();
    modal.classList.remove("popap-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("popap-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("username", username.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("popap-show")) {
      modal.classList.remove("popap-show");
      modal.classList.remove("popap-error");
    }
  }
});
