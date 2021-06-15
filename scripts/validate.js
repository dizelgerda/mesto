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
        button.classList.remove(settings.inactiveButtonClass);
        button.removeAttribute('disabled');
    }
    else {
        button.classList.add(settings.inactiveButtonClass);
        button.setAttribute('disabled', 'disabled');
    }
}

function checkInputValidity(evt, settings) {
    if (!evt.target.validity.valid) showInputError(evt, settings);
    else hideInputError(evt, settings);
}

function showInputError(evt, settings) {
    evt.target.classList.add(settings.inputErrorClass);
    const errorSpan = evt.currentTarget.querySelector(`#${evt.target.name}-error`);
    errorSpan.textContent = evt.target.validationMessage;
}

function hideInputError(evt, settings) {
    evt.target.classList.remove(settings.inputErrorClass);
    const errorSpan = evt.currentTarget.querySelector(`#${evt.target.name}-error`);
    errorSpan.textContent = '';
}