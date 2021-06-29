const cardsContainer = document.querySelector('.gallery__cards');

function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.addEventListener('click', closeByClick);
    document.addEventListener('keydown', closeByEscape);
}
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.removeEventListener('click', closeByClick);
    document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) { if (evt.key == 'Escape') closePopup(document.querySelector('.popup_opened')); }

function closeByClick(evt) {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
        closePopup(evt.currentTarget);
    }
}

function addCard(newCard) { cardsContainer.prepend(newCard); }

export { openPopup, closePopup, addCard };