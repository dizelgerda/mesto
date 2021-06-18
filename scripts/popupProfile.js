const popupProfile = document.querySelector('#popup-edit-profile');
const formPopupProfile = document.forms.editProfile;
const inputNamePopupProfile = formPopupProfile.elements.name;
const inputAboutPopupProfile = formPopupProfile.elements.about;


function updateFormPopupProfile() {
    inputNamePopupProfile.value = accountName.textContent;
    inputAboutPopupProfile.value = accountAbout.textContent;

    formPopupProfile.querySelectorAll('.form__field').forEach((elm) => hideInputError(formPopupProfile, elm, {
        inputErrorClass: 'form__field_type_error'
    }));

    toggleButtonState(formPopupProfile, {
        submitButtonSelector: '.form__button',
        inactiveButtonClass: 'form__button_disabled'
    });
}

function submitFormPopupProfile() {
    accountName.textContent = inputNamePopupProfile.value.trim();
    accountAbout.textContent = inputAboutPopupProfile.value.trim();

    closePopup(popupProfile);
}


buttonOpenPopupProfile.addEventListener('click', () => {
    updateFormPopupProfile();
    openPopup(popupProfile);
});

formPopupProfile.addEventListener('submit', submitFormPopupProfile)