const popupAddCard = document.querySelector('#popup-add-card');
const formPopupAddCard = document.forms.addCard;
const inputNamePopupAddCard = formPopupAddCard.elements.place;
const inputLinkPopupAddCard = formPopupAddCard.elements.link;

function submitFormPopupAddCard() {
    const newCard = createCard({
        name: inputNamePopupAddCard.value.trim(),
        link: inputLinkPopupAddCard.value.trim()
    });
    addCard(newCard);

    closePopup(popupAddCard);
}


buttonOpenPopupAddCard.addEventListener('click', () => {
    formPopupAddCard.reset();

    formPopupAddCard.querySelectorAll('.form__field').forEach((elm) => hideInputError(formPopupAddCard, elm, {
        inputErrorClass: 'form__field_type_error'
    }));

    toggleButtonState(formPopupAddCard, {
        submitButtonSelector: '.form__button',
        inactiveButtonClass: 'form__button_disabled'
    });

    openPopup(popupAddCard);
});

formPopupAddCard.addEventListener('submit', submitFormPopupAddCard)