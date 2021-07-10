import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupId, { handlerSubmit, handlerReset }) {
        super(popupId);
        this._handlerSubmit = handlerSubmit;
        this._handlerReset = handlerReset;
    }

    open() {
        this._handlerReset();
        this.setEventListeners();
        super.open();
    }

    _getInputValues() {
        const data = {};
        this._element.querySelectorAll('.form__field').forEach((elm) => data[elm.name] = elm.value);
        return data;
    }

    close() {
        super.close();
        this._element.querySelector('.popup__form').reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._element.querySelector('.popup__form').addEventListener('submit', this._handlerSubmit);
    }
}