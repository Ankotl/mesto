export const initialCards = [
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

export const validateObj = {
  formSelector: "popup__form",
  inputSelector: "popup__input",
  submitButtonSelector: "popup__btn-save",
  inactiveButtonClass: "popup__btn-save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const profileName = ".profile__name";
export const profileAbout = ".profile__about";
export const profileAvatar = ".profile__avatar";
export const popupPictureSelector = ".popup_picture";
export const popupProfileSelector = ".popup_edit";
export const popupAddSelector = ".popup_add";
export const btnPopupEdit = document.querySelector(".profile__btn-edit");
export const btnPopupAdd = document.querySelector(".profile__btn-add");
export const popupEditForm = document.querySelector("[name=editFormProfile]");
export const popupAddForm = document.querySelector("[name=addFormElement]");
export const elementList = document.querySelector(".elements__list");
export const elementTemplate = "#element";
