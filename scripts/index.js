const btnPopupEdit = document.querySelector(".profile__btn-edit");

const btnPopupAdd = document.querySelector(".profile__btn-add");
const popup = document.querySelector(".popup");

const popupEdit = document.querySelector(".popup_edit");
const inputName = document.querySelector("[name=inputName]");
const inputAbout = document.querySelector("[name=inputAbout]");
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

const popupList = Array.from(document.querySelectorAll(".popup"));

const inputList = Array.from(
  popupAddForm.querySelectorAll(`.${validateObj.inputSelector}`)
);
const buttonElement = popupAddForm.querySelector(
  `.${validateObj.submitButtonSelector}`
);

function popupOpen(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

function popupEditOpen() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popupOpen(popupEdit);
}

function popupPictureOpen(evt) {
  popupOpen(popupPicture);
  popupImage.src = evt.target.src;
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
  let element = {
    name: inputTitle.value,
    link: inputLink.value,
  };
  popupClose(popupAdd);
  elementList.prepend(createElement(element));
  toggleButtonState(
    elementList,
    buttonElement,
    validateObj.inactiveButtonClass
  );
  popupAddForm.reset();
}

function handlerLike(evt) {
  evt.target.classList.toggle("element__btn-like_active");
}

function handlerTrash(evt) {
  evt.target.closest(".element").remove();
}

function createElement(elem) {
  const elementTemplate = document.querySelector("#element").content;
  const element = elementTemplate.querySelector(".element").cloneNode(true);

  element
    .querySelector(".element__btn-like")
    .addEventListener("click", handlerLike);

  element
    .querySelector(".element__btn-delete")
    .addEventListener("click", handlerTrash);

  element
    .querySelector(".element__image")
    .addEventListener("click", popupPictureOpen);

  element.querySelector(".element__image").src = elem.link;
  element.querySelector(".element__image").alt = elem.name;
  element.querySelector(".element__caption").textContent = elem.name;

  return element;
}

initialCards.forEach((elem) => elementList.prepend(createElement(elem)));

btnPopupAdd.addEventListener("click", () => popupOpen(popupAdd));
btnPopupEdit.addEventListener("click", popupEditOpen);
popupEditForm.addEventListener("submit", formSubmitHandler);
popupAddForm.addEventListener("submit", formAddElementHandler);

popupList.forEach((element) => {
  element.addEventListener("mousedown", function (evt) {
    if (evt.target.classList.contains("popup_opened")) {
      popupClose(element);
    }
    if (evt.target.classList.contains("popup__btn-close")) {
      popupClose(element);
    }
  });
});
