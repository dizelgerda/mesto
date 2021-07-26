export default class FormValidator {
    constructor(configSelectors, form) {
        this._configSelectors = configSelectors;
        this._form = form;
    }

    enableValidation() { this._setEventListeners(); }

    _setEventListeners() {
        this._form.addEventListener('submit', (evt) => evt.preventDefault());

        this._form.querySelectorAll(this._configSelectors.inputSelector).forEach((input) => input.setAttribute('autocomplete', 'off'));

        this._form.addEventListener('input', (evt) => {
            this._checkInputValidity(evt);
            this._toggleButtonState(evt.currentTarget);
        })
    }

    _toggleButtonState(form) {
        const button = form.querySelector(this._configSelectors.submitButtonSelector);
        if (form.checkValidity()) button.removeAttribute('disabled');
        else button.setAttribute('disabled', 'disabled');
    }

    _checkInputValidity(evt) {
        const input = evt.target;
        const form = evt.currentTarget;

        if (!input.validity.valid) this._showInputError(form, input);
        else this._hideInputError(form, input);
    }

    _showInputError(form, input) {
        input.classList.add(this._configSelectors.inputErrorClass);
        const errorSpan = form.querySelector(`#${input.name}-error`);

        errorSpan.textContent = input.validationMessage;
    }

    _hideInputError(form, input) {
        input.classList.remove(this._configSelectors.inputErrorClass);
        const errorSpan = form.querySelector(`#${input.name}-error`);
        errorSpan.textContent = '';
    }

    resetValidation() {
        this._form.querySelectorAll('.form__field').forEach((elm) => this._hideInputError(this._form, elm));
        this._toggleButtonState(this._form);
    }
}
