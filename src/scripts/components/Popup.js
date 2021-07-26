export default class Popup {
    constructor(popupId) {
        this._element = document.querySelector(popupId);

        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeByClick = this._closeByClick.bind(this);
    }

    open() {
        this.setEventListeners();
        this._element.classList.add('popup_opened');
    }

    close() {
        this._element.classList.remove('popup_opened');
        this.deleteEventListeners();
    }

    setEventListeners() {
        this._element.addEventListener('click', this._closeByClick);
        document.addEventListener('keydown', this._handleEscClose);
    }

    deleteEventListeners() {
        this._element.removeEventListener('click', this._closeByClick);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key == 'Escape') this.close();
    }

    _closeByClick(evt) {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) this.close();
    }
}