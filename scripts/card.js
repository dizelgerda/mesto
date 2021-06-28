import { openPopup } from "./index.js";

const popupView = document.querySelector('#popup-view');
const imagePopupView = popupView.querySelector('.popup__image');
const signaturePopupView = popupView.querySelector('.popup__image-signature');

export class Card {
    constructor(data, cardTemplateId) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplateId = cardTemplateId;
    }

    createCard() {
        const newCard = this._copyTemplate();

        newCard.querySelector('.card__title').textContent = this._name;

        const cardImage = newCard.querySelector('.card__image');
        cardImage.src = this._link;
        cardImage.alt = this._name;

        this._addingListeners(newCard);

        return newCard;
    }

    _copyTemplate() { return document.querySelector(this._cardTemplateId).content.querySelector('.card').cloneNode(true); }

    _addingListeners(newCard) {
        newCard.querySelector('.card__button-delete').addEventListener('click', this._checkDeleteButton);
        newCard.querySelector('.card__button-like').addEventListener('click', this._checkLikeButton);
        newCard.querySelector('.card__image').addEventListener('click', this._checkImageButton);
    }

    _checkLikeButton(evt) { evt.target.classList.toggle('card__button-like_active'); }
    _checkDeleteButton(evt) {
        evt.target.closest('.card').remove();
        delete this;
    }
    _checkImageButton(evt) {
        const card = evt.target.closest('.card');
        const signature = card.querySelector('.card__title');

        imagePopupView.src = evt.target.src;
        imagePopupView.alt = evt.target.alt;
        signaturePopupView.textContent = signature.textContent;

        openPopup(popupView);
    }
}