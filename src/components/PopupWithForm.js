import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({validator, handleFormSubmit, currentParams}, popupSelector) {
    super(popupSelector);
    this._validator = validator;
    this._currentParams = currentParams;
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this.submitButton  = this._form.querySelector('.popup__button-save');
    this._inputList = this._form.querySelectorAll(this._currentParams.inputSelector)
  }

  _getInputValues() {
    const inputList = Array.from(this._inputList);
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
    });
    super.setEventListeners();
  }

  open() {
    this._form.reset();
    super.open();
  }
}
