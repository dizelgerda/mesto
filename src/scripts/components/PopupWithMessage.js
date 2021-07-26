import Popup from './Popup.js';

export default class PopupWithMessage extends Popup {
    constructor(popupId, { handlerSubmit }) {
        super(popupId);

        this._elementForm = this._element.querySelector('.popup__form');

        this._handlerSubmit = (evt) => {
            evt.preventDefault();
            handlerSubmit(this._object);
            this.close();
        }
    }

    open(object) {
        super.open();
        this._object = object;
    }

    setEventListeners() {
        super.setEventListeners();
        this._elementForm.addEventListener('submit', this._handlerSubmit);
    }

    deleteEventListeners() {
        super.deleteEventListeners();
        this._elementForm.removeEventListener('submit', this._handlerSubmit);
    }
}
