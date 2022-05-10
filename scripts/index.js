import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
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

export function popupPictureOpen(name, link) {
  popupOpen(popupPicture);
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
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
  cardList.addItem(createElement(element));
  validateAddForm.toggleButtonState();
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (elem) => {
      const cardElement = createElement(elem);
      cardList.addItem(cardElement);
    },
  },
  elementList
);

function createElement(elem) {
  const card = new Card(elem, elementTemplate, popupPictureOpen);
  return card.generateCard();
}

btnPopupAdd.addEventListener("click", () => {
  popupAddForm.reset();
  validateAddForm.resetValidation();
  popupOpen(popupAdd);
});
btnPopupEdit.addEventListener("click", () => {
  validateEditForm.resetValidation();
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

cardList.renderItems();
