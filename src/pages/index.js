import "./index.css";

import {
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
} from '../scripts/utils/constants.js';

import Section from '../scripts/components/Section.js';
import Card from '../scripts/components/Card.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithMessage from '../scripts/components/PopupWithMessage.js';
import Api from '../scripts/components/Api.js';


const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26',
    token: 'bae5eb3e-724d-48c0-ab33-5c288df4c2f3'
});

const session = new UserInfo(configUserSelectors);

Promise.all([api.getUserInformation(), api.getInitialCards()])
    .then(([accountData, initialCards]) => {
        const cardContainer = new Section({
            renderer: ({ name, link, likes, _id, owner }) => {
                const isMine = owner._id === accountData._id;
                const newCard = new Card({
                    cardId: _id,
                    isMine: isMine,
                    name: name,
                    link: link,
                    likes: {
                        counter: likes.length,
                        isLike: likes.some(item => item._id === accountData._id)
                    },
                    handleImageClick: handleImageClick,
                    handleLikeClick: handleLikeClick,
                    handleDeleteIconClick: isMine ? handleDeleteIconClick : null
                }, selectorTemplateCard);

                cardContainer.addItem(newCard.createCard());
            }
        }, selectorCardContainer);

        session.setUserInfo({
            name: accountData.name,
            about: accountData.about
        });
        session.setAvatar(accountData.avatar);
        cardContainer.renderItems(initialCards);

        const popupProfile = new PopupWithForm(selectorPopupProfile, {
            handlerSubmit: ({ name, about }) => {
                popupProfile.changeStatusButton('Сохранение...');
                api.setUserInformation({
                    name: name,
                    about: about
                })
                    .then(({ name, about }) => {
                        session.setUserInfo({
                            name: name,
                            about: about
                        });
                        popupProfile.close();
                        popupProfile.changeStatusButton('Сохранить');
                    });
            }
        });
        const popupAddCard = new PopupWithForm(selectorPopupAddCard, {
            handlerSubmit: ({ place, link }) => {
                popupAddCard.changeStatusButton('Сохранение...');
                api.addCard({
                    name: place,
                    link: link
                })
                    .then(({ name, link, _id }) => {
                        const newCard = new Card({
                            cardId: _id,
                            isMine: true,
                            name: name,
                            link: link,
                            likes: {
                                counter: 0,
                                isLike: false
                            },
                            handleImageClick: handleImageClick,
                            handleLikeClick: handleLikeClick,
                            handleDeleteIconClick: handleDeleteIconClick
                        }, selectorTemplateCard);

                        cardContainer.addItem(newCard.createCard());
                        popupAddCard.close();
                        popupAddCard.changeStatusButton('Создать');
                    })
            }
        });
        const popupView = new PopupWithImage(selectorPopupView);
        const popupUpdateAvatar = new PopupWithForm(selectorPopupUpdateAvatar, {
            handlerSubmit: (newAvatar) => {
                popupUpdateAvatar.changeStatusButton('Сохранение...');
                api.setUserAvatar(newAvatar)
                    .then(({ avatar }) => {
                        session.setAvatar(avatar);
                        popupUpdateAvatar.close();
                        popupUpdateAvatar.changeStatusButton('Сохранить');
                    });
            }
        });
        const popupMessageDeleteCard = new PopupWithMessage(selectorPopupMessageDeleteCard, {
            handlerSubmit: (card) => {
                api.deleteCard(card.id)
                    .then((res) => {
                        if (res.ok) card.deleteElementCard();
                        else console.log(`Ошибка: ${res.status}`);
                    })
                    .catch(err => console.log(err));
            }
        });

        const validatorFormProfile = new FormValidator(configFormSelectors, formPopupProfile);
        const validatorFormAddCard = new FormValidator(configFormSelectors, formPopupAddCard);
        const validatorFormUpdateAvatar = new FormValidator(configFormSelectors, formPopupUpdateAvatar);
        validatorFormProfile.enableValidation();
        validatorFormAddCard.enableValidation();
        validatorFormUpdateAvatar.enableValidation();


        function handleImageClick(evt) {
            popupView.open({
                name: evt.target.alt,
                link: evt.target.src
            })
        }
        function handleLikeClick() {
            const likePromise = this.likes.isLike ? api.removeLike(this.id) : api.setLike(this.id);
            likePromise.then(({ likes }) => {
                this.likes.counter = likes.length;
                this.likes.isLike = !this.likes.isLike;
                this.showLikes();
            });
        }
        function handleDeleteIconClick() { popupMessageDeleteCard.open(this); }


        buttonOpenPopupUpdateAvatar.addEventListener('click', () => {
            const { avatar } = session.getUserInfo();
            inputAvatarPopupUpdateAvatar.value = avatar;
            validatorFormUpdateAvatar.resetValidation();
            popupUpdateAvatar.open();
        });
        buttonOpenPopupProfile.addEventListener('click', () => {
            const { name, about } = session.getUserInfo();
            inputNamePopupProfile.value = name;
            inputAboutPopupProfile.value = about;
            validatorFormProfile.resetValidation();
            popupProfile.open();
        });
        buttonOpenPopupAddCard.addEventListener('click', () => {
            validatorFormAddCard.resetValidation()
            popupAddCard.open();
        });
    });

