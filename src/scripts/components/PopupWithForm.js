import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupId, { handlerSubmit }) {
        super(popupId);

        this._elementForm = this._element.querySelector('.popup__form');
        this._elementButtonSubmit = this._elementForm.querySelector('.form__button');

        this._handlerSubmit = () => handlerSubmit(this._getInputValues());
    }

    open() { super.open(); }

    close() {
        super.close();
        this._elementForm.reset();
    }

    setEventListeners() {
        this._element.querySelector('.popup__form').addEventListener('submit', this._handlerSubmit);
        super.setEventListeners();
    }

    deleteEventListeners() {
        super.deleteEventListeners();
        this._element.querySelector('.popup__form').removeEventListener('submit', this._handlerSubmit);
    }

    changeStatusButton(status) {
        this._elementButtonSubmit.textContent = status;
    }

    _getInputValues() {
        const data = {};
        this._element.querySelectorAll('.form__field').forEach(elm => data[elm.name] = elm.value);
        return data;
    }
}