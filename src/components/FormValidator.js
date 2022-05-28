export default class FormValidator {
  constructor(formElement, validParams) {
    this._validParams = validParams;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validParams.inputSelector));
    this._submitButton = this._formElement.querySelector(this._validParams.submitButtonSelector);
  }

// функция проверки валидации и вызова отображения/скрытия ошибки
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

// функция отображения ошибки валидации
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._validParams.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validParams.errorClass);
  };

// функция скрытия ошибки валидации
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._validParams.inputErrorClass);
    errorElement.classList.remove(this._validParams.errorClass);
    errorElement.textContent = '';
  };

// функция добавления слушателей и вызова функции проверки полей
  _setEventListeners() {
    // const buttonElement = this._formElement.querySelector(this._validParams.submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(this._inputList, this._submitButton, this._validParams.inactiveButtonClass);
      });
    });
  };

// проверка валидности массива полей
  _hasInvalidInput(inputList) {
    return inputList.some(input => !input.validity.valid)
  };

// функция изменения состояни активности кнопки сохранения формы
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._validParams.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._validParams.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };

  // функция валидации открываемого попапа
  validateOpenPopup() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    })
    this._toggleButtonState(this._inputList,this._submitButton);
  }

// функция включения валидации
  enableValidation() {
    this._setEventListeners();
  };
}