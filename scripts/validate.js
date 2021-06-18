enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.form__field',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__field_type_error',
  }); 

function enableValidation(settings) { 
    Array.from(document.querySelectorAll(settings.formSelector)).forEach((form) => setEventListeners(form, settings));
}

function setEventListeners(form, settings){
    form.addEventListener('submit', (evt) => evt.preventDefault());

    toggleButtonState(form, settings);

    form.addEventListener('input', (evt) => {
        checkInputValidity(evt, settings);
        toggleButtonState(evt.currentTarget, settings);
    })
}

function toggleButtonState(form, settings) {
    const button = form.querySelector(settings.submitButtonSelector);

    if (form.checkValidity()) {
        // button.classList.remove(settings.inactiveButtonClass);
        button.removeAttribute('disabled');
    }
    else {
        // button.classList.add(settings.inactiveButtonClass);
        button.setAttribute('disabled', 'disabled');
    }
}

function checkInputValidity(evt, settings) {
    const input = evt.target;
    const form = evt.currentTarget;

    if (!input.validity.valid) showInputError(form, input, settings);
    else hideInputError(form, input, settings);
}

function showInputError(form, input, settings) {
    input.classList.add(settings.inputErrorClass);
    const errorSpan = form.querySelector(`#${input.name}-error`);
    
    errorSpan.textContent = input.validationMessage;
}

function hideInputError(form, input, settings) {
    input.classList.remove(settings.inputErrorClass);
    const errorSpan = form.querySelector(`#${input.name}-error`);
    errorSpan.textContent = '';
}
