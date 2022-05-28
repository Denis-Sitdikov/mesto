import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({validator, handleFormSubmit}, popupSelector) {
    super(popupSelector);
    this._validator = validator;
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    const inputList = Array.from(this._validator._formElement.querySelectorAll(this._validator._validParams.inputSelector));
    this._element = {};
    inputList.forEach((input) => {
      this._element[input.name] = input.value;
    });
    return this._element;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._form.reset();
      this.close();
    });
    super.setEventListeners();
  }
  close() {
    super.close();
  }
  open() {
    this._form.reset();
    this._validator.validateOpenPopup()
    super.open();
  }
}