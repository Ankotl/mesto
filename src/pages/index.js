import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api";
import PopupWithConfirm from "../components/PopupWithConfirm";

import {
  validateObj,
  profileName,
  profileAbout,
  profileAvatar,
  popupPictureSelector,
  popupProfileSelector,
  popupAddSelector,
  popupUpdateAvatarSelector,
  popupConfirmSelector,
  btnPopupEdit,
  btnPopupAdd,
  btnPopupAvatar,
  popupEditForm,
  popupAddForm,
  popupUpdateAvatarForm,
  elementList,
  elementTemplate,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-42",
  token: "ef2a8db2-3c2c-4f24-b837-032ea2a5c911",
});

const userInfo = new UserInfo(profileName, profileAbout, profileAvatar);

api
  .getInitialData()
  .then((res) => {
    const [userData, cardData] = res;
    userInfo.setUserInfo({
      userName: userData.name,
      userAbout: userData.about,
    });
    userInfo.setUserAvatar(userData.avatar);
    userInfo.setUserId(userData._id);
    cardList.renderItems(cardData);
  })
  .catch((err) => {
    console.log(err);
  });

const createElement = (elem) => {
  const card = new Card({
    data: elem,
    userId: userInfo.getUserId(),
    template: elementTemplate,
    handlerCardClick: () => {
      popupPicture.open(elem.name, elem.link);
    },
    handlerLikeClick: () => {
      if (card.isLiked) {
        api
          .deleteLikeCard(card.getCardId())
          .then((data) => {
            card.unsetLike();
            card.likesCountUpdate(data.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .addLikeCard(card.getCardId())
          .then((data) => {
            card.setLike();
            card.likesCountUpdate(data.likes);
          })
          .catch((err) => {
            console.log(`ошибка ${err}`);
          });
      }
    },
    handlerTrashClick: (evt) => {
      const cardElement = evt.target.closest(".element");
      popupConfirm.setHandlerSubmit((evt) => {
        evt.preventDefault();
        api
          .deleteCard(card.getCardId())
          .then(() => {
            cardElement.remove();
            popupConfirm.close();
          })
          .catch((err) => {
            console.log(err);
          });
      });
      popupConfirm.open();
    },
  });

  return card.generateCard();
};

const popupPicture = new PopupWithImage(popupPictureSelector);
popupPicture.setEventListeners();

const cardList = new Section(
  {
    renderer: (elem) => {
      const cardElement = createElement(elem);
      cardList.addItemAppend(cardElement);
    },
  },
  elementList
);

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  const formData = popupProfile.getInputValues();
  const body = { name: formData.userName, about: formData.userAbout };
  popupProfile.isLoading(true);
  api
    .updateUserInfo(body)
    .then((data) => {
      userInfo.setUserInfo({ userName: data.name, userAbout: data.about });
      popupProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfile.isLoading(false);
    });
});

popupProfile.setEventListeners();

const validateEditForm = new FormValidator(popupEditForm, validateObj);
validateEditForm.enableValidation();

const popupAddCard = new PopupWithForm(popupAddSelector, (evt) => {
  evt.preventDefault();
  const formData = popupAddCard.getInputValues();
  const element = { name: formData.inputTitle, link: formData.inputLink };
  popupAddCard.isLoading(true);
  api
    .addNewCard(element)
    .then((card) => {
      const cardElement = createElement(card);
      cardList.addItemPrepend(cardElement);
      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard.isLoading(false);
    });
});
popupAddCard.setEventListeners();
const validateAddForm = new FormValidator(popupAddForm, validateObj);
validateAddForm.enableValidation();

const popupUpdateAvatar = new PopupWithForm(
  popupUpdateAvatarSelector,
  (evt) => {
    evt.preventDefault();
    const link = popupUpdateAvatar.getInputValues().inputLink;
    popupUpdateAvatar.isLoading(true);
    api
      .updateAvatar({ avatar: link })
      .then((data) => {
        userInfo.setUserAvatar(data.avatar);
        popupUpdateAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupUpdateAvatar.isLoading(false);
      });
  }
);
popupUpdateAvatar.setEventListeners();

const validateUpdateForm = new FormValidator(
  popupUpdateAvatarForm,
  validateObj
);
validateUpdateForm.enableValidation();

const popupConfirm = new PopupWithConfirm(popupConfirmSelector);
popupConfirm.setEventListeners();

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

btnPopupAvatar.addEventListener("click", () => {
  validateUpdateForm.resetValidation();
  popupUpdateAvatar.open();
});
