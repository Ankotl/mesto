let btnPopupEdit = document.querySelector(".profile__btn-edit");
let btnPopupClose = document.querySelector(".popup__btn-close");
let popup = document.querySelector(".popup");
let popupInput = document.querySelectorAll(".popup__input");
let inputName = document.querySelector("[name=inputName]");
let inputAbout = document.querySelector("[name=inputAbout]");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
let popupForm = document.querySelector("[name=editFormProfile]");

function popupOpen() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add("popup_opened");
}

function popupClose() {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popupClose();
}

function popupCloseBackground(evt) {
  evt.stopPropagation();
}

btnPopupEdit.addEventListener("click", popupOpen);
btnPopupClose.addEventListener("click", popupClose);
popupForm.addEventListener("click", popupCloseBackground);
popupForm.addEventListener("submit", formSubmitHandler);
popup.addEventListener("click", popupClose);
