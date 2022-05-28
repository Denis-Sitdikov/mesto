export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

// параметры валидации
export const currentParams = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__inputType-error',
    errorClass: 'popup__input-error_active'
  }
  
  
  // форма добавления
  export const formAddCard = document.querySelector('#addCardForm').querySelector('.popup__form');
  
  // кнопки
  export const editButton = document.querySelector('.profile__button-edit');
  export const addButton = document.querySelector('.profile__button-add');
  
  
  // поля формы редактирования профиля
  export const fieldName = document.querySelector('#profileName');
  export const fieldDescription = document.querySelector('#profileDescription');
  

  // элементы-карточки
  export const elementsContainerClass = '.elements'
  export const elementTemplateClass = '#element-template'

  // редактирование профиля
  export const formEditProfile = document.querySelector('#profilePopup').querySelector('.popup__form');
  export const popupEditClass = '#profilePopup'

  // получение текущих значений имени и описания профиля
  export const userInfoSelectors = {nameSelector:'.profile__name', descriptionSelector:'.profile__description'};

  // добавление элемента-карточки
  export const popupAddClass = '#addCardForm'

  // просмотр картинки
  export const popupImgViewClass = '#imgView'
  export const popupImgClass = '.popup__img'
  export const popupImgCaptionClass = '.popup__img-caption'