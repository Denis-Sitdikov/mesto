import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithConfirmation from "../components/PopupConfirmation";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  currentParams,
  userInfoSelectors,
  popupImageSelector,
  popupImageCaptionSelector,
  popupImageViewSelector,
  elementsContainerSelector,
  popupEditFormSelector,
  popupAddCardFormSelector,
  popupPhotoProfileSelector,
  popupDeleteCardSelector,
  elementTemplateSelector,
  autorizationParams,
} from "../utils/constants.js";

import "./index.css";

// формы
const formEditPhotoProfile = document.querySelector('#profileImageForm').querySelector('.popup__form');
const formEditProfile = document.querySelector('#profileForm').querySelector('.popup__form');
const formAddCard = document.querySelector('#addCardForm').querySelector('.popup__form');

// кнопки
const buttonEdit = document.querySelector('.profile__button-edit');
export const buttonAdd = document.querySelector('.profile__button-add');

// поля формы редактирования профиля
const fieldName = document.querySelector('#profileName');
const fieldDescription = document.querySelector('#profileDescription');

// аватар
const profilePhoto = document.querySelector('.profile__avatar');
export const profilePhotoOverlay = document.querySelector('.profile__photo-block');


// функция создания карточки
function createCard(item, popupPhoto, popupDeletePhoto){
  const card = new Card({
    data: item,
    handleCardClick: (name, link) => {
      popupPhoto.open(name, link)
    },
    handleDeleteIconClick: (cardID, card) => {
      popupDeletePhoto.open(cardID, card)
    },
    handleLikeButtonClick: (id, isLiked, handleResult) => {
      api.handleLikeButton(id, isLiked)
        .then((result) => {
          handleResult(result)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, userInfo.getID(), elementTemplateSelector);
  return card.generateCard();
}

// создание экземпляра класса информации о пользователе
const userInfo = new UserInfo(userInfoSelectors);

// создания секции контента
const cardListSection = new Section({
  renderer: (item) => {
    const cardElement = createCard(item, popupPhotoView, popupDeleteCard)
    cardListSection.addItem(cardElement)
  }
}, elementsContainerSelector);

// создание Api
const api = new Api(autorizationParams);

// заполнение массива карточек и инфы о юзере данными с сервера
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([resultUserInfo, resultInitialCards]) => {
    userInfo.setUserInfo(resultUserInfo.name, resultUserInfo.about, resultUserInfo.avatar, resultUserInfo._id);
    cardListSection.renderItems(resultInitialCards.reverse()); })
  .catch((err) => {
    console.log(err);
  });

// создание объектов валидатора
const formEditProfileValidator = new FormValidator(formEditProfile, currentParams);
formEditProfileValidator.enableValidation()

const formAddCardValidator = new FormValidator(formAddCard, currentParams);
formAddCardValidator.enableValidation()

const formEditProfileImageValidator = new FormValidator(formEditPhotoProfile, currentParams);
formEditProfileImageValidator.enableValidation()

// создание попапа редактирования фото профиля
const popupEditProfilePhoto = new PopupWithForm({
  validator: formEditProfileImageValidator,
  currentParams,
  handleFormSubmit: (formData) => {
    const buttonText = popupEditProfilePhoto.submitButton.textContent;
    popupEditProfilePhoto.submitButton.textContent = "Сохранение..."
    api.patchUserPhoto(formData.photo)
      .then((result) => {
        userInfo.setPhoto(result.avatar);
        popupEditProfilePhoto.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfilePhoto.submitButton.textContent = buttonText;
      });
  }
}, popupPhotoProfileSelector);

// создание попапа редактирования профиля
const popupEditProfile = new PopupWithForm({
  validator: formEditProfileValidator,
  currentParams,
  handleFormSubmit: (formData) => {
    const buttonText = popupEditProfile.submitButton.textContent;
    popupEditProfile.submitButton.textContent = "Сохранение..."
    api.patchUserInfo(formData.name, formData.description)
      .then((result) => {
        userInfo.setUserInfo(result.name, result.about, result.avatar);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.submitButton.textContent = buttonText;
      });
  }
}, popupEditFormSelector);

// создание попапа добавления нового элемента
const popupAddCard = new PopupWithForm({
  validator: formAddCardValidator,
  currentParams,
  handleFormSubmit: (formData) => {
    const buttonText = popupEditProfilePhoto.submitButton.textContent;
    popupAddCard.submitButton.textContent = "Сохранение..."
    api.addNewCard(formData)
      .then((result) => {
        const cardElement = createCard(result, popupPhotoView, popupDeleteCard)
        cardListSection.addItem(cardElement);
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddCard.submitButton.textContent = buttonText;
      });
  }
}, popupAddCardFormSelector);

// создание попапа просмотра фото
const popupPhotoView = new PopupWithImage(
  popupImageViewSelector,
  popupImageSelector,
  popupImageCaptionSelector
);

// создание попапа удаления карточки
const popupDeleteCard = new PopupWithConfirmation({
  handleConfirmation: (cardID, card) => {
    const buttonText = popupEditProfilePhoto.submitButton.textContent;
    popupDeleteCard.submitButton.textContent = "Удаление...";
    api.deleteCard(cardID)
      .then((result) => {
        card.remove();
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupDeleteCard.submitButton.textContent = buttonText;
      });
  }
}, popupDeleteCardSelector);

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

// слушатель на оверлее фото профиля
profilePhotoOverlay.addEventListener('click', () => {
  formEditProfileImageValidator.resetPopupValidationState()
  popupEditProfilePhoto.open()
});

popupPhotoView.setEventListeners();
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfilePhoto.setEventListeners();
popupDeleteCard.setEventListeners();
