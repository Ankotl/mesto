import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

import {
  initialCards,
  validateObj,
  profileName,
  profileAbout,
  popupPictureSelector,
  popupProfileSelector,
  popupAddSelector,
  btnPopupEdit,
  btnPopupAdd,
  popupEditForm,
  popupAddForm,
  elementList,
  elementTemplate,
} from "../utils/constants.js";

const userInfo = new UserInfo(profileName, profileAbout);

const createElement = (elem) => {
  const card = new Card(elem, elementTemplate, () => {
    popupPicture.open(elem.name, elem.link);
  });
  return card.generateCard();
};

const popupPicture = new PopupWithImage(popupPictureSelector);
popupPicture.setEventListeners();

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
cardList.renderItems();

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  const formData = popupProfile.getInputValues();
  userInfo.setUserInfo({
    userName: formData.userName,
    userAbout: formData.userAbout,
  });
  popupProfile.close();
});

popupProfile.setEventListeners();

const validateEditForm = new FormValidator(popupEditForm, validateObj);
validateEditForm.enableValidation();

const popupAddCard = new PopupWithForm(popupAddSelector, (evt) => {
  evt.preventDefault();
  const formData = popupAddCard.getInputValues();
  const element = { name: formData.inputTitle, link: formData.inputLink };
  cardList.addItem(createElement(element));
  popupAddCard.close();
});
popupAddCard.setEventListeners();
const validateAddForm = new FormValidator(popupAddForm, validateObj);
validateAddForm.enableValidation();

btnPopupAdd.addEventListener("click", () => {
  validateAddForm.resetValidation();
  popupAddCard.open();
});

btnPopupEdit.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  popupProfile.setInputValues(userData);
  validateEditForm.resetValidation();
  popupProfile.open();
});
