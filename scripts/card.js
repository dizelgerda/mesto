function createCard(dataNewCard) {
    const cardContainer = document.querySelector('#card-template').content;
    const newCard = cardContainer.querySelector('.card').cloneNode(true);

    const cardTitle = newCard.querySelector('.card__title');
    const cardImage = newCard.querySelector('.card__image');

    cardTitle.textContent = dataNewCard.name;
    cardImage.src = dataNewCard.link;
    cardImage.alt = dataNewCard.name;

    return newCard;
}

function checkLike(evt) { evt.target.classList.toggle('card__button-like_active'); }
function checkDeleteCard(evt) {
    const card = evt.target.closest('.card');
    card.remove();
}


function checkCardsButtons(evt) {
    if (evt.target.classList.contains('card__button-like')) checkLike(evt);
    else if (evt.target.classList.contains('card__button-delete')) checkDeleteCard(evt);
    else if (evt.target.classList.contains('card__image')) expandCardImage(evt);
}


cards.addEventListener('click', checkCardsButtons);