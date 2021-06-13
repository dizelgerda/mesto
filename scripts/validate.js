Array.from(document.querySelectorAll('.form')).forEach((form) => {
    form.addEventListener('submit', (evt) => evt.preventDefault());

    toggleButtonState(form);

    form.addEventListener('input', (evt) => {
        checkInputValidity(evt);
        toggleButtonState(evt.currentTarget);
    })
});

function toggleButtonState(form) {
    const button = form.querySelector('.form__button');

    if (form.checkValidity()) {
        button.classList.remove('form__button_disabled');
        button.removeAttribute('disabled');
    }
    else {
        button.classList.add('form__button_disabled');
        button.setAttribute('disabled', 'disabled');
    }
}

function checkInputValidity(evt) {
    if (!evt.target.validity.valid) showInputError(evt);
    else hideInputError(evt);
}

function showInputError(evt) {
    evt.target.classList.add('form__field_type_error');
    const errorSpan = evt.currentTarget.querySelector(`#${evt.target.name}-error`);
    errorSpan.textContent = evt.target.validationMessage;
}

function hideInputError(evt) {
    evt.target.classList.remove('form__field_type_error');
    const errorSpan = evt.currentTarget.querySelector(`#${evt.target.name}-error`);
    errorSpan.textContent = '';
}