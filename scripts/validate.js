function enableValidation(obj, funcSubmit) {
    const form = document.querySelector(obj.formSelector);

    form.addEventListener('input', checkingInput);
    form.addEventListener('submit', funcSubmit);
}

function checkingInput(evt) {
    const input = evt.target;
    const form = evt.currentTarget;

    const textError = identifyError(input);
    displayError(form, input, textError);
    checkSubmitButton(form);
}

function identifyError(input) {
    const validity = input.validity;
    let textError;

    if(validity.valid) input.classList.remove('popup__field_type_error');
    else input.classList.add('popup__field_type_error');


    if (validity.tooShort) textError = "Строка слишком короткая";
    else if (validity.typeMismatch) {
        if (input.type == "url") textError = "Строка не является ссылкой";
    }
    else if (input.value == "") textError = "Это поле обязательно к заполнению";
    else textError = "";

    return textError;
}

function displayError(form, input, textError) {
    const errorSpan = form.querySelector(`#${input.name}-error`);
    errorSpan.textContent = textError;
}

function checkSubmitButton(form) {
    const isValid = form.checkValidity();
    const buttonSubmit = form.querySelector('.form__button');

    if (isValid) {
        buttonSubmit.classList.remove('form__button_disabled');
        buttonSubmit.removeAttribute('disabled');
    }
    else {
        buttonSubmit.classList.add('form__button_disabled');
        buttonSubmit.setAttribute('disabled', 'disabled');
    }
}