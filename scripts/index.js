const accountName = document.querySelector('.account__name');
const accountAbout = document.querySelector('.account__about');
const cards = document.querySelector('.gallery__cards');
const buttonOpenPopupProfile = document.querySelector('.account__edit-button');
const buttonOpenPopupAddCard = document.querySelector('.account__add-button');

const popupProfile = document.querySelector('#popup-edit-profile');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-button');
const formPopupProfile = popupProfile.querySelector('.form');
const inputNamePopupProfile = formPopupProfile.querySelector('.form__field_type_name');
const inputAboutPopupProfile = formPopupProfile.querySelector('.form__field_type_about');

const popupAddCard = document.querySelector('#popup-add-card');
const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close-button');
const formPopupAddCard = popupAddCard.querySelector('.form');
const inputNamePopupAddCard = formPopupAddCard.querySelector('.form__field_type_name');
const inputLinkPopupAddCard = formPopupAddCard.querySelector('.form__field_type_link');

const popupView = document.querySelector('#popup-view');
const imagePopupView = popupView.querySelector('.popup__image');
const signaturePopupView = popupView.querySelector('.popup__image-signature');
const buttonClosePopupView = popupView.querySelector('.popup__close-button');


// Функции
function openPopup(popup) { popup.classList.add('popup_opened'); }
function closePopup(popup) { popup.classList.remove('popup_opened'); }

function updateFormPopupProfile() {
  inputNamePopupProfile.value = accountName.textContent;
  inputAboutPopupProfile.value = accountAbout.textContent;
}

function submitFormPopupProfile(evt) {
  evt.preventDefault();

  accountName.textContent = inputNamePopupProfile.value;
  accountAbout.textContent = inputAboutPopupProfile.value;
}

function submitFormPopupAddCard(evt) {
  evt.preventDefault();

  const dataNewCard = {
    name: inputNamePopupAddCard.value,
    link: inputLinkPopupAddCard.value
  };

  const newCard = createCard(dataNewCard);
  addCard(newCard);
}

function createCard(dataNewCard) {
  const cardContainer = document.querySelector('#card-template').content;
  const newCard = cardContainer.querySelector('.card').cloneNode(true);

  const cardTitle = newCard.querySelector('.card__title');
  const cardImage = newCard.querySelector('.card__image');
  const buttonLike = newCard.querySelector('.card__button-like');
  const buttonDelete = newCard.querySelector('.card__button-delete');

  cardTitle.textContent = dataNewCard.name;
  cardImage.src = dataNewCard.link;
  cardImage.alt = dataNewCard.name;

  buttonLike.addEventListener('click', checkLike);
  buttonDelete.addEventListener('click', checkDeleteCard);
  cardImage.addEventListener('click', expandCardImage);

  return newCard;
}

function addCard(newCard) { cards.prepend(newCard); }

function checkLike(evt) { evt.target.classList.toggle('card__button-like_active'); }

function checkDeleteCard(evt) {
  const card = evt.target.closest('.card');
  card.remove();
}

function expandCardImage(evt) {
  const card = evt.target.closest('.card');
  const signature = card.querySelector('.card__title');

  imagePopupView.src = evt.target.src;
  imagePopupView.alt = evt.target.alt;
  signaturePopupView.textContent = signature.textContent;

  openPopup(popupView);
}


// Слушатели
buttonOpenPopupProfile.addEventListener('click', () => {
  updateFormPopupProfile();
  openPopup(popupProfile);
});
buttonClosePopupProfile.addEventListener('click', () => closePopup(popupProfile));
formPopupProfile.addEventListener('submit', (evt) => {
  submitFormPopupProfile(evt);
  closePopup(popupProfile);
});

buttonOpenPopupAddCard.addEventListener('click', () => openPopup(popupAddCard));
buttonClosePopupAddCard.addEventListener('click', () => closePopup(popupAddCard));

formPopupAddCard.addEventListener('submit', (evt) => {
  submitFormPopupAddCard(evt);
  closePopup(popupAddCard);
});

buttonClosePopupView.addEventListener('click', () => closePopup(popupView));