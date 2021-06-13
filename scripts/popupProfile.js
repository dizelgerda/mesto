const popupProfile = document.querySelector('#popup-edit-profile');
const formPopupProfile = document.forms.editProfile;
const inputNamePopupProfile = formPopupProfile.elements.name;
const inputAboutPopupProfile = formPopupProfile.elements.about;

function updateFormPopupProfile() {
    inputNamePopupProfile.value = accountName.textContent;
    inputAboutPopupProfile.value = accountAbout.textContent;

    toggleButtonState(formPopupProfile);
}

function submitFormPopupProfile(evt) {
    accountName.textContent = inputNamePopupProfile.value;
    accountAbout.textContent = inputAboutPopupProfile.value;

    closePopup(popupProfile);
}

buttonOpenPopupProfile.addEventListener('click', () => {
    updateFormPopupProfile();
    openPopup(popupProfile);
});

formPopupProfile.addEventListener('submit', submitFormPopupProfile)