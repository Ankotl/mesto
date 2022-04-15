const validateObj = {
  formSelector: "popup__form",
  inputSelector: "popup__input",
  submitButtonSelector: "popup__btn-save",
  inactiveButtonClass: "popup__btn-save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const enableValidation = (obj) => {
  const formList = Array.from(document.forms);
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, obj);
  });
};

const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(
    formElement.querySelectorAll(`.${obj.inputSelector}`)
  );
  const buttonElement = formElement.querySelector(
    `.${obj.submitButtonSelector}`
  );
  toggleButtonState(formElement, buttonElement, obj.inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(
        formElement,
        inputElement,
        obj.errorClass,
        obj.inputErrorClass
      );
      toggleButtonState(formElement, buttonElement, obj.inactiveButtonClass);
    });
  });
};

const checkInputValidity = (
  formElement,
  inputElement,
  errorClass,
  inputErrorClass
) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      errorClass,
      inputErrorClass
    );
  } else {
    hideInputError(formElement, inputElement, errorClass, inputErrorClass);
  }
};

const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  errorClass,
  inputErrorClass
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(`${inputErrorClass}`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(`${errorClass}`);
};

const hideInputError = (
  formElement,
  inputElement,
  errorClass,
  inputErrorClass
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(`${inputErrorClass}`);
  errorElement.classList.remove(`${errorClass}`);
  errorElement.textContent = "";
};

const toggleButtonState = (formElement, buttonElement, inactiveButtonClass) => {
  if (!formElement.checkValidity()) {
    buttonElement.classList.add(`${inactiveButtonClass}`);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(`${inactiveButtonClass}`);
    buttonElement.disabled = false;
  }
};

enableValidation(validateObj);
