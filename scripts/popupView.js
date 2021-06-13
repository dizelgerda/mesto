const popupView = document.querySelector('#popup-view');
const imagePopupView = popupView.querySelector('.popup__image');
const signaturePopupView = popupView.querySelector('.popup__image-signature');

function expandCardImage(evt) {
    const card = evt.target.closest('.card');
    const signature = card.querySelector('.card__title');

    imagePopupView.src = evt.target.src;
    imagePopupView.alt = evt.target.alt;
    signaturePopupView.textContent = signature.textContent;

    openPopup(popupView);
}