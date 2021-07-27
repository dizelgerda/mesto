import { ESC } from '../utils/constants.js'

export default class Popup {
    constructor(popupId) {
        this._element = document.querySelector(popupId);

        this._handleKeyClose = this._handleKeyClose.bind(this);
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
        document.addEventListener('keydown', this._handleKeyClose);
    }

    deleteEventListeners() {
        this._element.removeEventListener('click', this._closeByClick);
        document.removeEventListener('keydown', this._handleKeyClose);
    }

    _handleKeyClose(evt) {
        if (evt.key == ESC) this.close();
    }

    _closeByClick(evt) {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) this.close();
    }
}