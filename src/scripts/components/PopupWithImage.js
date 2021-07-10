import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupId) { super(popupId); }

    open({ name, link }) {
        this._element.querySelector('.popup__image').src = link;
        this._element.querySelector('.popup__image').alt = name;
        this._element.querySelector('.popup__image-signature').textContent = name;
        super.open();
    }
}