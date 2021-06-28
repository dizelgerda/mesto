export class FormValidator {
    constructor(settings) {
        this._settings = settings;
    }

    enableValidation() { 
        Array.from(document.querySelectorAll(this._settings.formSelector)).forEach((form) => this._setEventListeners(form));
    }

    _setEventListeners(form){
        form.addEventListener('submit', (evt) => evt.preventDefault());
    
        form.querySelectorAll(this._settings.inputSelector).forEach((input) => input.setAttribute('autocomplete', 'off'));
    
        form.addEventListener('input', (evt) => {
            this._checkInputValidity(evt);
            this.toggleButtonState(evt.currentTarget);
        })
    }

    toggleButtonState(form) {
        const button = form.querySelector(this._settings.submitButtonSelector);
    
        if (form.checkValidity()) {
            button.removeAttribute('disabled');
        }
        else {
            button.setAttribute('disabled', 'disabled');
        }
    }

    _checkInputValidity(evt) {
        const input = evt.target;
        const form = evt.currentTarget;
    
        if (!input.validity.valid) this._showInputError(form, input);
        else this.hideInputError(form, input);
    }

    _showInputError(form, input) {
        input.classList.add(this._settings.inputErrorClass);
        const errorSpan = form.querySelector(`#${input.name}-error`);
        
        errorSpan.textContent = input.validationMessage;
    }

    hideInputError(form, input) {
        input.classList.remove(this._settings.inputErrorClass);
        const errorSpan = form.querySelector(`#${input.name}-error`);
        errorSpan.textContent = '';
    }
}
