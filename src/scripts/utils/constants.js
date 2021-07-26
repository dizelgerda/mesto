const formPopupProfile = document.forms.editProfile;
const formPopupAddCard = document.forms.addCard;
const formPopupUpdateAvatar = document.forms.updateAvatar;

const buttonOpenPopupProfile = document.querySelector('.account__edit-button');
const buttonOpenPopupAddCard = document.querySelector('.account__add-button');
const buttonOpenPopupUpdateAvatar = document.querySelector('.account__photo-button');
 
const configUserSelectors = {
  nameSelector: '.account__name',
  aboutSelector: '.account__about',
  avatarSelector: '.account__photo-profile'
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
const selectorPopupUpdateAvatar = '#popup-update-avatar';
const selectorPopupMessageDeleteCard = '#popup-message'

const inputNamePopupProfile = formPopupProfile.elements.name;
const inputAboutPopupProfile = formPopupProfile.elements.about;

const inputAvatarPopupUpdateAvatar = formPopupUpdateAvatar.elements.avatar;


export {
  formPopupProfile,
  formPopupAddCard,
  formPopupUpdateAvatar,
  buttonOpenPopupProfile,
  buttonOpenPopupAddCard,
  buttonOpenPopupUpdateAvatar,
  selectorCardContainer,
  configUserSelectors,
  selectorTemplateCard,
  selectorPopupProfile,
  selectorPopupAddCard,
  selectorPopupView,
  selectorPopupMessageDeleteCard,
  selectorPopupUpdateAvatar,
  configFormSelectors,
  inputNamePopupProfile,
  inputAboutPopupProfile,
  inputAvatarPopupUpdateAvatar
};