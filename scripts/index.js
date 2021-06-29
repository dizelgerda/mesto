import { openPopup, closePopup, addCard } from "./utilities.js"
import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./initial-cards.js";


// main
const accountName = document.querySelector('.account__name');
const accountAbout = document.querySelector('.account__about');
const buttonOpenPopupProfile = document.querySelector('.account__edit-button');
const buttonOpenPopupAddCard = document.querySelector('.account__add-button');

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
    addCard(newCard.createCard());
});

const validatorFormProfile = new FormValidator({
    inputSelector: '.form__field',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__field_type_error',
  }, formPopupProfile)
const validatorFormAddCard = new FormValidator({
    inputSelector: '.form__field',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__field_type_error',
  }, formPopupAddCard)
validatorFormProfile.enableValidation();
validatorFormAddCard.enableValidation();


function submitFormPopupAddCard() {
    const newCard = new Card({
        name: inputNamePopupAddCard.value.trim(),
        link: inputLinkPopupAddCard.value.trim()
    }, '#card-template');
    addCard(newCard.createCard());

    closePopup(popupAddCard);
}

function updateFormPopupProfile() {
    inputNamePopupProfile.value = accountName.textContent;
    inputAboutPopupProfile.value = accountAbout.textContent;
    validatorFormProfile.resetValidation();
}
function submitFormPopupProfile() {
    accountName.textContent = inputNamePopupProfile.value.trim();
    accountAbout.textContent = inputAboutPopupProfile.value.trim();

    closePopup(popupProfile);
}


buttonOpenPopupAddCard.addEventListener('click', () => {
    formPopupAddCard.reset();
    validatorFormAddCard.resetValidation();

    openPopup(popupAddCard);
});


formPopupAddCard.addEventListener('submit', submitFormPopupAddCard)

buttonOpenPopupProfile.addEventListener('click', () => {
    updateFormPopupProfile();
    openPopup(popupProfile);
});

formPopupProfile.addEventListener('submit', submitFormPopupProfile);