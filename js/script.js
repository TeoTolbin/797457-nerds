"use strict";

(function () {
  var popupTrigger = document.querySelector(".js-btn-popup");
  var popup = document.querySelector(".popup");
  var popupClose = document.querySelector(".popup-close");
  var feedbackForm = document.querySelector(".feedback");
  var username = document.getElementById("feedback-name");
  var email = document.getElementById("feedback-email");
  var message = document.querySelector("[name=letter]");
  var storage = localStorage.getItem("username");

  if (popupTrigger) {
    popupTrigger.addEventListener("click", function (e) {
      e.preventDefault();
      if (storage) {
        username.value = storage;
        email.focus();
      } else {
        username.focus();
      }

      popup.removeAttribute('hidden');
    })
  }

  if (popupClose) {
    popupClose.addEventListener("click", function () {
      popup.hidden = true;
    popup.classList.remove("popup-error");
    });
  }

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (evt) {
      if (!feedbackForm.checkValidity()) {
        evt.preventDefault();
        popup.classList.remove("popup-error");
        popup.offsetWidth;
        popup.classList.add("popup-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("username", username.value);
        }
      }
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27 && !popup.hidden) {
      popup.hidden = true;
    }
  });

})();
