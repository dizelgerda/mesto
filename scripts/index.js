import { Card } from "./card.js";
import { FormValidator } from "./validate.js";
import { initialCards } from "./initial-cards.js";


// main
const accountName = document.querySelector('.account__name');
const accountAbout = document.querySelector('.account__about');
const buttonOpenPopupProfile = document.querySelector('.account__edit-button');
const buttonOpenPopupAddCard = document.querySelector('.account__add-button');
const cards = document.querySelector('.gallery__cards');

// Редактирование профиля
const popupProfile = document.querySelector('#popup-edit-profile');
const formPopupProfile = document.forms.editProfile;
const inputNamePopupProfile = formPopupProfile.elements.name;
const inputAboutPopupProfile = formPopupProfile.elements.about;

// Добавление карточки
const popupAddCard = document.querySelector('#popup-add-card');
const formPopupAddCard = document.forms.addCard;
const inputNamePopupAddCard = formPopupAddCard.elements.place;
const inputLinkPopupAddCard = formPopupAddCard.elements.link;

initialCards.forEach((item) => {
  const newCard = new Card(item, '#card-template');
  cards.prepend(newCard.createCard());
});

const forms = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__field_type_error',
});
forms.enableValidation();


export function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closeByClick);
  document.addEventListener('keydown', closeByEscape);
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closeByClick);
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) { if (evt.key == 'Escape') closePopup(document.querySelector('.popup_opened')); }
function closeByClick(evt) {
  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
    closePopup(evt.currentTarget);
  }
}

function submitFormPopupAddCard() {
  const newCard = new Card({
    name: inputNamePopupAddCard.value.trim(),
    link: inputLinkPopupAddCard.value.trim()
  }, '#card-template');
  cards.prepend(newCard.createCard());

  closePopup(popupAddCard);
}

function updateFormPopupProfile() {
  inputNamePopupProfile.value = accountName.textContent;
  inputAboutPopupProfile.value = accountAbout.textContent;

  formPopupProfile.querySelectorAll('.form__field').forEach((elm) => forms.hideInputError(formPopupProfile, elm));

  forms.toggleButtonState(formPopupProfile);
}
function submitFormPopupProfile() {
  accountName.textContent = inputNamePopupProfile.value.trim();
  accountAbout.textContent = inputAboutPopupProfile.value.trim();

  closePopup(popupProfile);
}


buttonOpenPopupAddCard.addEventListener('click', () => {
  formPopupAddCard.reset();

  formPopupAddCard.querySelectorAll('.form__field').forEach((elm) => forms.hideInputError(formPopupAddCard, elm));

  forms.toggleButtonState(formPopupAddCard);

  openPopup(popupAddCard);
});


formPopupAddCard.addEventListener('submit', submitFormPopupAddCard)

buttonOpenPopupProfile.addEventListener('click', () => {
  updateFormPopupProfile();
  openPopup(popupProfile);
});

formPopupProfile.addEventListener('submit', submitFormPopupProfile);