import Popup from "./Popup.js";

export default class PicturePopup extends Popup {
  constructor(popupSelector, photoSelector, photoCaption) {
    super(popupSelector);
    this._popupPhoto = this._popup.querySelector(photoSelector);
    this._popupPhotoCapture = this._popup.querySelector(photoCaption);
  }
  open(name, link, ) {
    this._popupPhotoCapture.textContent = name;
    this._popupPhoto.src = link;
    this._popupPhoto.alt = name;
    super.open();
  }
}