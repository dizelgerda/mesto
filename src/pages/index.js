import "./index.css";

import {
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
} from '../scripts/utils/constants.js';

import Section from '../scripts/components/Section.js';
import Card from '../scripts/components/Card.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';


const session = new UserInfo(configUserSelectors);

const cardContainer = new Section({
    items: initialCards,
    renderer: ({ name, link }) => {
        const newCard = new Card({
            name: name,
            link: link,
            handleCardClick: handleCardImageClick
        }, selectorTemplateCard);
        cardContainer.addItem(newCard.createCard());
    }
}, selectorCardContainer);

const popupProfile = new PopupWithForm(selectorPopupProfile, {
    handlerSubmit: ({ name, about }) => {
        session.setUserInfo({
            newName: name,
            newAbout: about
        });
        popupProfile.close();
    }
});
const popupAddCard = new PopupWithForm(selectorPopupAddCard, {
    handlerSubmit: ({ place, link }) => {
        const newCard = new Card({
            name: place,
            link: link,
            handleCardClick: handleCardImageClick
        }, selectorTemplateCard);
        cardContainer.addItem(newCard.createCard());
        popupAddCard.close();
    }
});
const popupView = new PopupWithImage(selectorPopupView);

const handleCardImageClick = (evt) => {
    popupView.open({
        name: evt.target.alt,
        link: evt.target.src
    })
}

const validatorFormProfile = new FormValidator(configFormSelectors, formPopupProfile)
const validatorFormAddCard = new FormValidator(configFormSelectors, formPopupAddCard)
validatorFormProfile.enableValidation();
validatorFormAddCard.enableValidation();

cardContainer.renderItems();

buttonOpenPopupProfile.addEventListener('click', () => {
    const { name, about } = session.getUserInfo();
    elementPopupProfile.querySelector('[name = name]').value = name;
    elementPopupProfile.querySelector('[name = about]').value = about;
    validatorFormProfile.resetValidation();
    popupProfile.open();
});
buttonOpenPopupAddCard.addEventListener('click', () => {
    validatorFormAddCard.resetValidation()
    popupAddCard.open();
});