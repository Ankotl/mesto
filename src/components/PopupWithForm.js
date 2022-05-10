import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handlerSubmitForm) {
    super(popupSelector);
    this._formElement = this._popup.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".popup__input");
    this._handlerSubmitForm = handlerSubmitForm;
  }

  getInputValues() {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    this._formElement.addEventListener("submit", (evt) =>
      this._handlerSubmitForm(evt)
    );
    super.setEventListeners();
  }

  close() {
    this._formElement.reset();
    super.close();
  }
}
