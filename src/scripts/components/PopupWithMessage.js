import Popup from './Popup.js';

export default class PopupWithMessage extends Popup {
    constructor(popupId, { handlerSubmit }) {
        super(popupId);

        this._elementForm = this._element.querySelector('.popup__form');

        this._handlerSubmit = (evt) => {
            evt.preventDefault();
            handlerSubmit(this._deleteCandidate);
            this.close();
        }
    }

    open(deleteCandidate) {
        super.open();
        this._deleteCandidate = deleteCandidate;
    }

    close() {
        super.close();
        this._deleteCandidate = null;
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
