export default class UserInfo {
  constructor(data) {
    this._nameSelector = data.nameSelector;
    this._descriptionSelector = data.descriptionSelector;
    this._currentName = document.querySelector(this._nameSelector);
    this._currentDescription = document.querySelector(this._descriptionSelector);
    this._avatar = document.querySelector('.profile__avatar');
  }

  getUserInfo() {
    this._infoObject = {name: this._currentName.textContent, description: this._currentDescription.textContent};
    return this._infoObject;
  }

  setUserInfo(name, description, photo, id) {
    this._currentName.textContent = name;
    this._currentDescription.textContent = description;
    this._id = id;
    this.setPhoto(photo);
  }

  setPhoto(photo) {
    this._avatar.src = photo;
  }

  getID() {
    return this._id;
  }
}

