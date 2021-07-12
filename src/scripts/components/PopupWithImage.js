import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupId) { super(popupId); }

    open({ name, link }) {
        const popupImage = this._element.querySelector('.popup__image');
        popupImage.src = link;
        popupImage.alt = name;
        this._element.querySelector('.popup__image-signature').textContent = name;
        super.open();
    }
}