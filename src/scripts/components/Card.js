export default class Card {
    constructor({ cardId, isMine, name, link, likes, handleImageClick, handleLikeClick, handleDeleteIconClick }, cardTemplateId) {
        this.id = cardId;
        this._isMine = isMine;

        this._name = name;
        this._link = link;
        this.likes = likes;
        this._cardTemplateId = cardTemplateId;

        this._handleImageClick = handleImageClick;
        this._handleLikeClick = handleLikeClick.bind(this);
        if (isMine) this._handleDeleteIconClick = handleDeleteIconClick.bind(this);
    }

    createCard() {
        this._element = this._copyTemplate();

        this._element.querySelector('.card__title').textContent = this._name;
        const cardImage = this._element.querySelector('.card__image');
        cardImage.src = this._link;
        cardImage.alt = this._name;
        this.showLikes();
        if (!this._isMine) this._element.querySelector('.card__button-delete').remove();

        this._addingListeners(this._element);

        return this._element;
    }

    _copyTemplate() { return document.querySelector(this._cardTemplateId).content.querySelector('.card').cloneNode(true); }

    _addingListeners(newCard) {
        if (this._isMine) newCard.querySelector('.card__button-delete').addEventListener('click', this._handleDeleteIconClick);
        newCard.querySelector('.card__button-like').addEventListener('click', this._handleLikeClick);
        newCard.querySelector('.card__image').addEventListener('click', this._handleImageClick);
    }

    showLikes() {
        this._element.querySelector('.card__like-quantity').textContent = this.likes.counter;

        const buttonLike = this._element.querySelector('.card__button-like');
        if (this.likes.isLike) buttonLike.classList.add('card__button-like_active')
        else buttonLike.classList.remove('card__button-like_active');
    }

    deleteElement() {
        this._element.remove();
        this._element = null;
    }
}