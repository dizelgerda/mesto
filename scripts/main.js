const accountName = document.querySelector('.account__name');
const accountAbout = document.querySelector('.account__about');
const buttonOpenPopupProfile = document.querySelector('.account__edit-button');
const buttonOpenPopupAddCard = document.querySelector('.account__add-button');

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);

    const form = popup.querySelector('.form')
    if (form) form.reset();
}

function closeByEscape(evt) { if (evt.key == 'Escape') closePopup(document.querySelector('.popup_opened')); }


Array.from(document.querySelectorAll('.popup')).forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
            closePopup(evt.currentTarget);
        }
    })
});