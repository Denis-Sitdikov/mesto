export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._popupCloseButton = this._popup.querySelector('.popup__button-close');
    }
    _closeByEsc = (evt) => {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  
    _closeByOverlay= (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close()
      }
    }
  
    open() {
      this._popup.classList.add('popup_active');
      document.addEventListener('keydown',  this._closeByEsc)
    }
  
    close = () => {
      this._popup.classList.remove('popup_active');
      document.removeEventListener('keydown',  this._closeByEsc)
  
    }
  
    setEventListeners() {
      this._popup.addEventListener('click', this._closeByOverlay);
      this._popupCloseButton.addEventListener('click', this.close);
    }
  }