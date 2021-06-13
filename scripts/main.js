const accountName = document.querySelector('.account__name');
const accountAbout = document.querySelector('.account__about');
const cards = document.querySelector('.gallery__cards');
const buttonOpenPopupProfile = document.querySelector('.account__edit-button');
const buttonOpenPopupAddCard = document.querySelector('.account__add-button');

function openPopup(popup) { popup.classList.add('popup_opened'); }
function closePopup(popup) { popup.classList.remove('popup_opened'); }