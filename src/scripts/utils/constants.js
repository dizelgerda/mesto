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

const formPopupProfile = document.forms.editProfile;
const formPopupAddCard = document.forms.addCard;

const buttonOpenPopupProfile = document.querySelector('.account__edit-button');
const buttonOpenPopupAddCard = document.querySelector('.account__add-button');

const configUserSelectors = {
  nameSelector: '.account__name',
  aboutSelector: '.account__about'
};
const configFormSelectors = {
  inputSelector: '.form__field',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__field_type_error',
}
const selectorCardContainer = '.gallery__cards';
const selectorTemplateCard = '#card-template';
const selectorPopupProfile = '#popup-edit-profile';
const selectorPopupAddCard = '#popup-add-card';
const selectorPopupView = '#popup-view';

const elementPopupProfile = document.querySelector(selectorPopupProfile);



export {
  initialCards,
  formPopupProfile,
  formPopupAddCard,
  buttonOpenPopupProfile,
  buttonOpenPopupAddCard,
  elementPopupProfile,
  selectorCardContainer,
  configUserSelectors,
  selectorTemplateCard,
  selectorPopupProfile,
  selectorPopupAddCard,
  selectorPopupView,
  configFormSelectors
};