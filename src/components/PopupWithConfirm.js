import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector(".popup__form");
  }

  setEventListeners() {
    this._formElement.addEventListener("submit", (evt) =>
      this._handlerSubmitForm(evt)
    );
    super.setEventListeners();
  }

  setHandlerSubmit(handler) {
    this._handlerSubmitForm = handler;
  }
}
