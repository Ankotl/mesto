export default class FormValidator {
  constructor(form, validateObj) {
    this._form = form;
    this._validateObj = validateObj;
    this._inputList = Array.from(
      this._form.querySelectorAll(`.${this._validateObj.inputSelector}`)
    );
    this._buttonElement = this._form.querySelector(
      `.${this._validateObj.submitButtonSelector}`
    );
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(`${this._validateObj.inputErrorClass}`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(`${this._validateObj.errorClass}`);
  }
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(`${this._validateObj.inputErrorClass}`);
    errorElement.textContent = "";
    errorElement.classList.remove(`${this._validateObj.errorClass}`);
  }

  toggleButtonState() {
    if (!this._form.checkValidity()) {
      this._buttonElement.classList.add(
        `${this._validateObj.inactiveButtonClass}`
      );
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(
        `${this._validateObj.inactiveButtonClass}`
      );
      this._buttonElement.disabled = false;
    }
  }
}
