import FormValidator from "../components/FormValidator.js";
import PicturePopup from "../components/PicturePopup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  buttonAdd,
  currentParams,
  buttonEdit,
  fieldDescription,
  fieldName,
  initialCards,
  userInfoSelectors,
  formAddCard,
  formEditProfile,
  popupImageClass,
  popupImageCaptionClass,
  popupImageViewClass,
  elementsContainerClass,
  popupEditClass,
  popupAddClass,
} from "../utils/constants.js";

import createCard from "../utils/utils.js";

import './index.css';

// создание экземпляра класса информации о пользователе
const userInfo = new UserInfo(userInfoSelectors);

// заполнение страницы исходным массивом
const cardListSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item, popupPhotoView)
    cardListSection.addItem(cardElement)
  }
}, elementsContainerClass);

// создание объектов валидатора
const formEditProfileValidator = new FormValidator(formEditProfile, currentParams);
//formSelector
formEditProfileValidator.enableValidation()

const formAddCardValidator = new FormValidator(formAddCard, currentParams);

formAddCardValidator.enableValidation()

// создание попапа редактирования профиля
const popupEditProfile = new PopupWithForm({
  validator: formEditProfileValidator,
  currentParams,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.name, formData.description)
  }
}, popupEditClass);

// создание попапа добавления нового элемента
const popupAddCard = new PopupWithForm({
  validator: formAddCardValidator,
  currentParams,
  handleFormSubmit: (formData) => {
    const cardElement = createCard(formData, popupPhotoView)
    cardListSection.addItem(cardElement);
  }
}, popupAddClass);

// создание попапа просмотра фото
const popupPhotoView = new PicturePopup(
  popupImageViewClass,
  popupImageClass,
  popupImageCaptionClass
);

// слушатель на кнопке редактирования профиля
buttonEdit.addEventListener('click', () => {
  formEditProfileValidator.resetPopupValidationState()
  popupEditProfile.open();
  const info = userInfo.getUserInfo();
  fieldName.value = info.name
  fieldDescription.value = info.description;
});

// слушатель на кнопке добавления новой карточки
buttonAdd.addEventListener('click', () => {
  formAddCardValidator.resetPopupValidationState()
  popupAddCard.open()
});

cardListSection.renderItems();
popupPhotoView.setEventListeners();
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();