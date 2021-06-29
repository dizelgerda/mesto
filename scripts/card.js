import { openPopup } from "./utilities.js";

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
        this._element = this._copyTemplate();

        this._element.querySelector('.card__title').textContent = this._name;

        const cardImage = this._element.querySelector('.card__image');
        cardImage.src = this._link;
        cardImage.alt = this._name;

        this._addingListeners(this._element);

        return this._element;
    }

    _copyTemplate() { return document.querySelector(this._cardTemplateId).content.querySelector('.card').cloneNode(true); }

    _addingListeners(newCard) {
        newCard.querySelector('.card__button-delete').addEventListener('click', this._checkDeleteButton);
        newCard.querySelector('.card__button-like').addEventListener('click', this._checkLikeButton);
        newCard.querySelector('.card__image').addEventListener('click', this._checkImageButton);
    }

    _checkLikeButton() { this.classList.toggle('card__button-like_active'); }
    _checkDeleteButton() { this.closest('.card').remove(); }
    _checkImageButton() {
        imagePopupView.src = this.src;
        imagePopupView.alt = this.alt;
        signaturePopupView.textContent = this.alt;

        openPopup(popupView);
    }
}