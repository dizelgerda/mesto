export default class FormValidator {
    constructor(configSelectors, form) {
        this._configSelectors = configSelectors;

        this._form = form;
        this._inputList = this._form.querySelectorAll(this._configSelectors.inputSelector);
        this._submitButton = this._form.querySelector(this._configSelectors.submitButtonSelector)
    }

    enableValidation() { this._setEventListeners(); }

    _setEventListeners() {
        this._form.addEventListener('submit', (evt) => evt.preventDefault());

        this._inputList.forEach((input) => input.setAttribute('autocomplete', 'off'));

        this._form.addEventListener('input', (evt) => {
            this._checkInputValidity(evt);
            this._toggleButtonState(evt.currentTarget);
        })
    }

    _toggleButtonState() {
        if (this._form.checkValidity()) this._submitButton.removeAttribute('disabled');
        else this._submitButton.setAttribute('disabled', 'disabled');
    }

    _checkInputValidity(evt) {
        const input = evt.target;

        if (!input.validity.valid) this._showInputError(input);
        else this._hideInputError(input);
    }

    _showInputError(input) {
        input.classList.add(this._configSelectors.inputErrorClass);

        const errorSpan = this._form.querySelector(`#${input.name}-error`);
        errorSpan.textContent = input.validationMessage;
    }

    _hideInputError(input) {
        input.classList.remove(this._configSelectors.inputErrorClass);
        const errorSpan = this._form.querySelector(`#${input.name}-error`);
        errorSpan.textContent = '';
    }

    resetValidation() {
        this._inputList.forEach((input) => this._hideInputError(input));
        this._toggleButtonState();
    }
}
