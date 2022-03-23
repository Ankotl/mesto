const btnPopupEdit = document.querySelector(".profile__btn-edit");

const btnPopupAdd = document.querySelector(".profile__btn-add");
const popup = document.querySelector(".popup");

const popupEdit = document.querySelector(".popup_edit");
const btnPopupEditClose = popupEdit.querySelector(".popup__btn-close");
const inputName = document.querySelector("[name=inputName]");
const inputAbout = document.querySelector("[name=inputAbout]");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const popupEditForm = document.querySelector("[name=editFormProfile]");

const popupAdd = document.querySelector(".popup_add");
const btnPopupAddClose = popupAdd.querySelector(".popup__btn-close");
const popupAddForm = popupAdd.querySelector("[name=addFormElement]");
const inputTitle = popupAdd.querySelector("[name=inputTitle]");
const inputLink = popupAdd.querySelector("[name=inputLink]");

const elementList = document.querySelector(".elements__list");

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

function popupClose(elem) {
  elem.classList.remove("popup_opened");
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
  addElement(element);
  inputLink.value = "";
  inputTitle.value = "";
}

function handlerLike(evt) {
  evt.target.classList.toggle("element__btn-like_active");
}

function handlerTrash(evt) {
  evt.target.closest(".element").remove();
}

function addElement(elem) {
  const elementTemplate = document.querySelector("#element").content;
  const element = elementTemplate.querySelector(".element").cloneNode(true);

  element
    .querySelector(".element__btn-like")
    .addEventListener("click", handlerLike);

  element
    .querySelector(".element__btn-delete")
    .addEventListener("click", handlerTrash);

  element.querySelector(".element__image").src = elem.link;
  element.querySelector(".element__caption").textContent = elem.name;

  elementList.prepend(element);
}

initialCards.forEach((elem) => addElement(elem));

btnPopupAdd.addEventListener("click", popupAddOpen);
btnPopupEdit.addEventListener("click", popupEditOpen);
btnPopupEditClose.addEventListener("click", () => popupClose(popupEdit));
btnPopupAddClose.addEventListener("click", () => popupClose(popupAdd));
popupEditForm.addEventListener("submit", formSubmitHandler);
popupAddForm.addEventListener("submit", formAddElementHandler);
