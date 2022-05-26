export default class Card {
  constructor({
    data,
    userId,
    template,
    handlerCardClick,
    handlerLikeClick,
    handlerTrashClick,
  }) {
    this._name = data.name;
    this._link = data.link;
    this._userId = userId;
    this._isCurrentUserCard = userId === data.owner._id;
    this._likes = data.likes;
    this._cardId = data._id;
    this._template = template;
    this._handlerCardClick = handlerCardClick;
    this._handlerLikeClick = handlerLikeClick;
    this._handlerTrashClick = handlerTrashClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._template)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _setEventListener() {
    this._cardLike = this._cardElement.querySelector(".element__btn-like");

    this._cardLike.addEventListener("click", (evt) => this._handlerLikeClick());

    if (this._isCurrentUserCard) {
      this._cardElement
        .querySelector(".element__btn-delete")
        .addEventListener("click", (evt) => this._handlerTrashClick(evt));
    }

    this._cardImage.addEventListener("click", this._handlerCardClick);
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector(".element__image");
    this._countLike = this._cardElement.querySelector(".element__like-count");

    if (!this._isCurrentUserCard) {
      this._cardElement.querySelector(".element__btn-delete").remove();
    }

    this._cardElement.querySelector(".element__caption").textContent =
      this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._countLike.textContent = this._likes.length;
    this._setEventListener();
    this._toggleLikeState();

    return this._cardElement;
  }

  _toggleLikeState() {
    if (this._checkUserLike()) {
      this.setLike();
    } else {
      this.unsetLike();
    }
  }

  setLike() {
    this._cardLike.classList.add("element__btn-like_active");
    this.isLiked = true;
  }

  unsetLike() {
    this._cardLike.classList.remove("element__btn-like_active");
    this.isLiked = false;
  }

  likesCountUpdate(data) {
    this._countLike.textContent = data.length;
  }

  _checkUserLike() {
    return this._likes.some((item) => item._id === this._userId);
  }

  getCardId() {
    return this._cardId;
  }
}
