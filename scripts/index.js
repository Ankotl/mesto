const btnPopupEdit = document.querySelector(".profile__btn-edit");

const btnPopupAdd = document.querySelector(".profile__btn-add");

const popupEdit = document.querySelector(".popup_edit");
const inputName = popupEdit.querySelector("[name=inputName]");
const inputAbout = popupEdit.querySelector("[name=inputAbout]");
const inputNameError = popupEdit.querySelector(".input-name-error");
const inputAboutError = popupEdit.querySelector(".input-about-error");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const popupEditForm = document.querySelector("[name=editFormProfile]");

const popupAdd = document.querySelector(".popup_add");

const popupAddForm = popupAdd.querySelector("[name=addFormElement]");
const inputTitle = popupAdd.querySelector("[name=inputTitle]");
const inputLink = popupAdd.querySelector("[name=inputLink]");
const inputTitleError = popupAdd.querySelector(".input-title-error");
const inputLinkError = popupAdd.querySelector(".input-link-error");
const elementList = document.querySelector(".elements__list");

const popupPicture = document.querySelector(".popup_picture");
const popupImage = popupPicture.querySelector(".popup__image");
const popupCaption = popupPicture.querySelector(".popup__caption");

const elementTemplate = document.querySelector("#element").content;

const popupList = Array.from(document.querySelectorAll(".popup"));

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
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;
}

function popupClose(elem) {
  elem.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
  resetForm();
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
  blockButtonState(validateObj.inactiveButtonClass);
}

function blockButtonState(inactiveButtonClass) {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
}

function handlerLike(evt) {
  evt.target.classList.toggle("element__btn-like_active");
}

function handlerTrash(evt) {
  evt.target.closest(".element").remove();
}

function createElement(elem) {
  const element = elementTemplate.querySelector(".element").cloneNode(true);

  element
    .querySelector(".element__btn-like")
    .addEventListener("click", handlerLike);

  element
    .querySelector(".element__btn-delete")
    .addEventListener("click", handlerTrash);

  const elementImage = element.querySelector(".element__image");

  elementImage.addEventListener("click", popupPictureOpen);

  elementImage.src = elem.link;
  elementImage.alt = elem.name;
  element.querySelector(".element__caption").textContent = elem.name;

  return element;
}

function resetForm() {
  const errorInputList = Array.from(document.querySelectorAll(".popup__input"));
  const errorList = Array.from(document.querySelectorAll(".popup__error"));
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

btnPopupAdd.addEventListener("click", () => popupOpen(popupAdd));
btnPopupEdit.addEventListener("click", popupEditOpen);
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
