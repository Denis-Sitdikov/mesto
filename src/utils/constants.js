// параметры валидации
export const currentParams = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__inputType-error',
  errorClass: 'popup__input-error_active'
}

// получение текущих значений имени и описания профиля
export const userInfoSelectors = {nameSelector: '.profile__name', descriptionSelector: '.profile__description'};

// селекторы
export const elementsContainerSelector = '.elements';
export const elementTemplateSelector = '#element-template';
export const popupImageViewSelector = '#viewPhoto';
export const popupImageSelector = '.popup__img';
export const popupImageCaptionSelector = '.popup__img-caption';
export const popupEditFormSelector = '#profileForm';
export const popupPhotoProfileSelector = '#profileImageForm';
export const popupAddCardFormSelector = '#addCardForm';
export const popupDeleteCardSelector = '#deleteImagePopup';

// параметры для Api
export const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-42';
export const token = '03a4523e-62a7-4ee4-ae37-dcf3604823ce';

// параметры авторизации
export const autorizationParams = {
  baseRoute: baseUrl,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
}
