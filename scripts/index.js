import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards, validateObj } from "./initialData.js";

const btnPopupEdit = document.querySelector(".profile__btn-edit");
const btnPopupAdd = document.querySelector(".profile__btn-add");

const popupEdit = document.querySelector(".popup_edit");
const inputName = popupEdit.querySelector("[name=inputName]");
const inputAbout = popupEdit.querySelector("[name=inputAbout]");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const popupEditForm = document.querySelector("[name=editFormProfile]");

const popupAdd = document.querySelector(".popup_add");

const popupAddForm = popupAdd.querySelector("[name=addFormElement]");
const inputTitle = popupAdd.querySelector("[name=inputTitle]");
const inputLink = popupAdd.querySelector("[name=inputLink]");
const elementList = document.querySelector(".elements__list");

const popupPicture = document.querySelector(".popup_picture");
const popupImage = popupPicture.querySelector(".popup__image");
const popupCaption = popupPicture.querySelector(".popup__caption");

const elementTemplate = "#element";

const popupList = Array.from(document.querySelectorAll(".popup"));

const validateEditForm = new FormValidator(popupEditForm, validateObj);
validateEditForm.enableValidation();

const validateAddForm = new FormValidator(popupAddForm, validateObj);
validateAddForm.enableValidation();

function popupOpen(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

function popupEditOpen() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popupOpen(popupEdit);
}

export function popupPictureOpen(evt) {
  popupOpen(popupPicture);
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;
}

function popupClose(elem) {
  elem.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    popupClose(popupOpened);
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;

  popupClose(popupEdit);
}

function formAddElementHandler(evt) {
  evt.preventDefault();
  const element = {
    name: inputTitle.value,
    link: inputLink.value,
  };
  popupClose(popupAdd);
  elementList.prepend(createElement(element));
  popupAddForm.reset();
  validateAddForm.toggleButtonState();
}

function createElement(elem) {
  const card = new Card(elem, elementTemplate);
  return card.generateCard();
}

function resetForm(popup) {
  const errorInputList = Array.from(popup.querySelectorAll(".popup__input"));
  const errorList = Array.from(popup.querySelectorAll(".popup__error"));
  errorList.forEach((error) => {
    error.textContent = "";
    error.classList.remove("popup__error_visible");
  });
  errorInputList.forEach((element) => {
    element.classList.remove("popup__input_type_error");
    element.value = "";
  });
}

initialCards.forEach((elem) => elementList.prepend(createElement(elem)));

btnPopupAdd.addEventListener("click", () => {
  resetForm(popupAdd);
  popupOpen(popupAdd);
});
btnPopupEdit.addEventListener("click", () => {
  resetForm(popupEdit);
  popupEditOpen();
});
popupEditForm.addEventListener("submit", formSubmitHandler);
popupAddForm.addEventListener("submit", formAddElementHandler);

popupList.forEach((element) => {
  element.addEventListener("mousedown", function (evt) {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__btn-close")
    ) {
      popupClose(element);
    }
  });
});
