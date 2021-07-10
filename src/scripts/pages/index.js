import "../../pages/index.css";

import {
    initialCards,
    formPopupProfile,
    formPopupAddCard,
    buttonOpenPopupProfile,
    buttonOpenPopupAddCard
} from '../utils/constants.js';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';


const session = new UserInfo({
    nameSelector: '.account__name',
    aboutSelector: '.account__about'
});

const cardContainer = new Section({
    items: initialCards,
    renderer: (item) => {
        const newCard = new Card({
            name: item.name,
            link: item.link,
            handleCardClick: handleCardImageClick
        }, '#card-template');
        cardContainer.addItem(newCard.createCard());
    }
}, '.gallery__cards');


const popupProfile = new PopupWithForm('#popup-edit-profile', {
    handlerSubmit: () => {
        const data = popupProfile._getInputValues();
        session.setUserInfo({
            newName: data.name,
            newAbout: data.about
        });
        popupProfile.close();
    },
    handlerReset: () => {
        const data = session.getUserInfo();
        popupProfile._element.querySelector('[name = name]').value = data.name;
        popupProfile._element.querySelector('[name = about]').value = data.about;
        validatorFormProfile.resetValidation();
    }
});
const popupAddCard = new PopupWithForm('#popup-add-card', {
    handlerSubmit: () => {
        const newCard = new Card({
            name: popupAddCard._element.querySelector('[name = place]').value,
            link: popupAddCard._element.querySelector('[name = link]').value,
            handleCardClick: handleCardImageClick
        }, '#card-template');
        cardContainer.addItem(newCard.createCard());
        popupAddCard.close();
    },
    handlerReset: () => { validatorFormAddCard.resetValidation(); }
});
const popupView = new PopupWithImage('#popup-view');

const handleCardImageClick = (evt) => {
    popupView.open({
        name: evt.target.alt,
        link: evt.target.src
    })
}

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


cardContainer.renderItems();
validatorFormProfile.enableValidation();
validatorFormAddCard.enableValidation();

buttonOpenPopupProfile.addEventListener('click', popupProfile.open.bind(popupProfile));
buttonOpenPopupAddCard.addEventListener('click', popupAddCard.open.bind(popupAddCard));