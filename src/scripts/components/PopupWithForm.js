import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupId, { handlerSubmit }) {
        super(popupId);
        this._handlerSubmit = () => handlerSubmit(this._getInputValues());
    }

    open() { super.open(); }

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
        this._element.querySelector('.popup__form').addEventListener('submit', this._handlerSubmit);
        super.setEventListeners();
    }

    deleteEventListeners() {
        super.deleteEventListeners();
        this._element.querySelector('.popup__form').removeEventListener('submit', this._handlerSubmit);
    }
}