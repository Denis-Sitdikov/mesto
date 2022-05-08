  export default class Card {
    constructor(data, cardSelector) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
    }
    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
      return cardElement;
    }
    _openImgPopup(){
      openPopup(popupImgView)
      popupImgCaption.textContent = this._name;
      popupImg.src = this._link;
      popupImg.alt = this._name;
    }
    _deleteCard() {
      this._element.remove();
    }
    _toggleLike() {
     this._likeButton.classList.toggle('element__button-like_active');
    }
    _setEventListeners() {
      this._photo.addEventListener('click', () => {
        this._openImgPopup();
      });
      this._deleteButton.addEventListener('click', () => {
        this._deleteCard();
      });
      this._likeButton.addEventListener('click', () => {
        this._toggleLike();
      });
    }
    generateCard () {
      this._element = this._getTemplate();
      this._photo = this._element.querySelector('.element__photo');
      this._deleteButton = this._element.querySelector('.element__button-delete');
      this._likeButton = this._element.querySelector('.element__button-like');
      this._setEventListeners();
      this._element.querySelector('.element__title').textContent = this._name;
      this._photo.src = this._link;
      this._photo.alt = this._name;
      return this._element;
    }
  }
