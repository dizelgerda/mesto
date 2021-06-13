const popupAddCard = document.querySelector('#popup-add-card');
const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close-button');
const backgroundPopupAddCard = popupAddCard.querySelector('.popup__background');
const formPopupAddCard = document.forms.addCard;
const inputNamePopupAddCard = formPopupAddCard.elements.place;
const inputLinkPopupAddCard = formPopupAddCard.elements.link;

function submitFormPopupAddCard(evt) {
    evt.preventDefault();

    const dataNewCard = {
        name: inputNamePopupAddCard.value,
        link: inputLinkPopupAddCard.value
    };

    const newCard = createCard(dataNewCard);
    addCard(newCard);

    closePopupAddCard();
}

function addCard(newCard) { cards.prepend(newCard); }

function checkKeyClosePopupAddCard (evt) {
    if (evt.key === 'Escape') closePopupAddCard();
}

function closePopupAddCard() {
    closePopup(popupAddCard);

    formPopupAddCard.reset();

    buttonClosePopupAddCard.removeEventListener('click', closePopupAddCard);
    backgroundPopupAddCard.removeEventListener('click', closePopupAddCard);
    popupAddCard.removeEventListener('keydown', checkKeyClosePopupAddCard);
}


buttonOpenPopupAddCard.addEventListener('click', () => {
    openPopup(popupAddCard);

    enableValidation({
        formSelector: '[name="addCard"]',
        inputSelector: '.form__field',
        submitButtonSelector: '.form__button',
        inactiveButtonClass: 'form__button_disabled',
        inputErrorClass: 'popup__field_type_error',
    }, submitFormPopupAddCard);

    buttonClosePopupAddCard.addEventListener('click', closePopupAddCard);
    backgroundPopupAddCard.addEventListener('click', closePopupAddCard);
    popupAddCard.addEventListener('keydown', checkKeyClosePopupAddCard);
});