const popupProfile = document.querySelector('#popup-edit-profile');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-button');
const backgroundPopupProfile = popupProfile.querySelector('.popup__background');
const formPopupProfile = document.forms.editProfile;
const inputNamePopupProfile = formPopupProfile.elements.name;
const inputAboutPopupProfile = formPopupProfile.elements.about;

function updateFormPopupProfile() {
    inputNamePopupProfile.value = accountName.textContent;
    inputAboutPopupProfile.value = accountAbout.textContent;
}

function submitFormPopupProfile(evt) {
    evt.preventDefault();

    accountName.textContent = inputNamePopupProfile.value;
    accountAbout.textContent = inputAboutPopupProfile.value;

    closePopupProfile();
}

function checkKeyClosePopupProfile(evt) {
    if (evt.key === 'Escape') closePopupProfile();
}

function closePopupProfile() {
    closePopup(popupProfile);

    formPopupProfile.reset();

    buttonClosePopupProfile.removeEventListener('click', closePopupProfile);
    backgroundPopupProfile.removeEventListener('click', closePopupProfile);
    popupProfile.removeEventListener('keydown', checkKeyClosePopupProfile);
}

buttonOpenPopupProfile.addEventListener('click', () => {
    updateFormPopupProfile();
    openPopup(popupProfile);

    enableValidation({
        formSelector: '[name="editProfile"]',
        inputSelector: '.form__field',
        submitButtonSelector: '.form__button',
        inactiveButtonClass: 'form__button_disabled',
        inputErrorClass: 'popup__field_type_error',
    }, submitFormPopupProfile);

    buttonClosePopupProfile.addEventListener('click', closePopupProfile);
    backgroundPopupProfile.addEventListener('click', closePopupProfile);
    popupProfile.addEventListener('keydown', checkKeyClosePopupProfile);
});