import Card from './Card.js';

import FormValidator from './FormValidator.js';



const initialCards = [
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


  // контейнер с карточками
const elementsContainer = document.querySelector('.elements');
// шаблон элемента-карточки
const elementTemplate = document.querySelector('#element-template').content;


// редактирование профиля
const popupEdit = document.querySelector('#profilePopup');
const formEdit = popupEdit.querySelector('.popup__form');
const currentName = document.querySelector('.profile__name');
const currentDescription = document.querySelector('.profile__description');
const fieldName = formEdit.querySelector('#profileName');
const fieldDescription = formEdit.querySelector('#profileDescription');

// кнопки
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const closeButtons = document.querySelectorAll('.popup__button-close');


// добавление карточки
const popupAdd = document.querySelector('#addCardForm');
const formAdd = popupAdd.querySelector('.popup__form')
const fieldTitle = formAdd.querySelector('#placeTitle');
const fieldLink = formAdd.querySelector('#placeLink');

// просмотр картинки
const popupImgView = document.querySelector('#imgView');
const popupImg = popupImgView.querySelector('.popup__img');
const popupImgCaption = popupImgView.querySelector('.popup__img-caption');

// попапы
const popups = document.querySelectorAll('.popup');


// параметры валидации
const currentParams = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__inputType-error',
    errorClass: 'popup__input-error_active'
}



// функция добавления элемента в контейнер
function addCard(element){
  const card = new Card(element, '#element-template');
  elementsContainer.prepend(card.generateCard());
}

// функция добавления новой карточки на страницу
function addNewCard(evt) {
  evt.preventDefault();
  const element = {name: fieldTitle.value, link: fieldLink.value};
  addCard(element);
  closePopup(popupAdd);
  formAdd.reset()
}

// заполнение страницы исходным массивом
initialCards.forEach(function (element) {
  addCard(element);

})


// функция открытия попапа
function openPopup(popup){
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeByEsc);
}

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown',closeByEsc)
}

// функция закрытия попапа по 'Escape'
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_active')
    closePopup(popup);
  }
}

// функция закрытия попапа по клику на оверлей
function closeOverlay(evt){
  if (evt.target===evt.currentTarget) {
    closePopup(evt.currentTarget)
  }
}

// функция открытия попапа добавления нового элемента
function openAddCardPopup(){
  openPopup(popupAdd);
  fieldTitle.value = "";
  fieldLink.value = "";
  const formValidator = new FormValidator(popupAdd, currentParams)
  formValidator._validateOpenPopup()
}

// функция открытия попапа редактирования профиля
function openProfilePopup(){
  openPopup(popupEdit)
  fieldName.value = currentName.textContent;
  fieldDescription.value = currentDescription.textContent;
  const formValidator = new FormValidator(popupEdit, currentParams)
  formValidator._validateOpenPopup()
}



// функция изменения данных профиля пользователя
function changeName(evt) {
  evt.preventDefault();
  currentName.textContent = fieldName.value;
  currentDescription.textContent = fieldDescription.value;
  closePopup(popupEdit);
}

// добавление слушателей закрытия на попапы
popups.forEach(function (popup){
  popup.addEventListener('click', closeOverlay)
})

// добавление слушателей на кнопку закрытия попапов
closeButtons.forEach(function (button) {
  const popup = button.closest('.popup')
  button.addEventListener('click', function(evt) {closePopup(popup)});
})

// создание объектов валидатора
function enableFormValidation(){
  const formList = document.querySelectorAll(currentParams.formSelector);
  formList.forEach(function (form) {
    const formValidator = new FormValidator(form, currentParams);
    formValidator.enableValidation();
  })
}

buttonEdit.addEventListener('click', openProfilePopup);
buttonAdd.addEventListener('click', openAddCardPopup);

formEdit.addEventListener('submit', changeName);
formAdd.addEventListener('submit', addNewCard);

enableFormValidation();




