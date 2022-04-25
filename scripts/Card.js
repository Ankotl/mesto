import { popupPictureOpen } from "./index.js";

export default class Card {
  constructor(date, template) {
    this._name = date.name;
    this._link = date.link;
    this._template = template;
  }

  _getTemplate() {
    return document
      .querySelector(this._template)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _setEventListener() {
    this._cardLike = this._cardElement.querySelector(".element__btn-like");

    this._cardLike.addEventListener("click", () => this._handlerLike());

    this._cardElement
      .querySelector(".element__btn-delete")
      .addEventListener("click", () => this._handlerTrash());

    this._cardImage.addEventListener("click", () =>
      popupPictureOpen(this._name, this._link)
    );
  }

  _handlerLike() {
    this._cardLike.classList.toggle("element__btn-like_active");
  }

  _handlerTrash() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector(".element__image");
    this._setEventListener();

    this._cardElement.querySelector(".element__caption").textContent =
      this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._cardElement;
  }
}
