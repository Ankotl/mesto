let btnPopupEdit = document.querySelector(".profile__btn-edit");
let btnPopupClose = document.querySelectorAll(".popup__btn-close");
let btnPopupAdd = document.querySelector(".profile__btn-add");
let popup = document.querySelectorAll(".popup");
let popupEdit = document.querySelector(".popup_edit");
let popupAdd = document.querySelector(".popup_add");
let popupInput = document.querySelectorAll(".popup__input");
let inputName = document.querySelector("[name=inputName]");
let inputAbout = document.querySelector("[name=inputAbout]");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
let popupForm = document.querySelector("[name=editFormProfile]");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function popupEditOpen() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popupEdit.classList.add("popup_opened");
}

function popupAddOpen() {
  popupAdd.classList.add("popup_opened");
}

function popupClose() {
  popup.forEach((item) => item.classList.remove("popup_opened"));
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popupClose();
}

btnPopupAdd.addEventListener("click", popupAddOpen);
btnPopupEdit.addEventListener("click", popupEditOpen);
btnPopupClose.forEach((item) => item.addEventListener("click", popupClose));
popupForm.addEventListener("submit", formSubmitHandler);
