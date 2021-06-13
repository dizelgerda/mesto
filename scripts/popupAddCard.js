const popupAddCard = document.querySelector('#popup-add-card');
const formPopupAddCard = document.forms.addCard;
const inputNamePopupAddCard = formPopupAddCard.elements.place;
const inputLinkPopupAddCard = formPopupAddCard.elements.link;

function submitFormPopupAddCard(evt) {
    const dataNewCard = {
        name: inputNamePopupAddCard.value,
        link: inputLinkPopupAddCard.value
    };

    const newCard = createCard(dataNewCard);
    addCard(newCard);

    closePopup(popupAddCard);
}


buttonOpenPopupAddCard.addEventListener('click', () => {
    openPopup(popupAddCard);
    toggleButtonState(formPopupAddCard);
});

formPopupAddCard.addEventListener('submit', submitFormPopupAddCard)