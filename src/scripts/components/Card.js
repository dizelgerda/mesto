export default class Card {
    constructor({ name, link, handleCardClick }, cardTemplateId) {
        this._name = name;
        this._link = link;
        this._handleCardClick = handleCardClick;
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
        newCard.querySelector('.card__button-delete').addEventListener('click', this._checkDeleteButton.bind(this));
        newCard.querySelector('.card__button-like').addEventListener('click', this._checkLikeButton);
        newCard.querySelector('.card__image').addEventListener('click', this._handleCardClick);
    }

    _checkLikeButton() { this.classList.toggle('card__button-like_active'); }
    _checkDeleteButton() {
        this._element.remove();
        this._element = null;
    }
}