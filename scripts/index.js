const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
initialCards.forEach((item) => addCard(item.name, item.link));

const name = document.querySelector('.account__name');
const about = document.querySelector('.account__about');
const openEditProfileButton = document.querySelector('.account__edit-button');
const openAddCardButton = document.querySelector('.account__add-button');

const popupEditProfile = document.querySelector('#popup-edit-profile');
const closeEditProfileButton = popupEditProfile.querySelector('.popup__close-button');
const formEditProfile = popupEditProfile.querySelector('.form');
const formName = formEditProfile.querySelector('.form__field_type_name');
const formAbout = formEditProfile.querySelector('.form__field_type_about');

const popupAddCard = document.querySelector('#popup-add-card');
const closeAddCardButton = popupAddCard.querySelector('.popup__close-button');
const formAddCard = popupAddCard.querySelector('.form');

const popupView = document.querySelector('#popup-view');
const popupViewImage = popupView.querySelector('.popup__image');
const popupViewSignature = popupView.querySelector('.popup__image-signature');
const closeViewButton = popupView.querySelector('.popup__close-button');


function updateEditForm() {
  formName.value = name.textContent;
  formAbout.value = about.textContent;
}

function popupStatus(popup) {
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  name.textContent = formName.value;
  about.textContent = formAbout.value;
}

function addCard(name, link) {
  const cardContainer = document.querySelector('#card-template').content;
  const cardItem = cardContainer.querySelector('.card').cloneNode(true);

  cardTitle = cardItem.querySelector('.card__title');
  cardLink = cardItem.querySelector('.card__image');
  cardButton = cardItem.querySelector('.card__button');
  cardButtonDelete = cardItem.querySelector('.card__button-delete');

  cardButton.addEventListener('click', (event) => event.target.classList.toggle('card__button_active'));

  cardButtonDelete.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    card.remove();
  });

  cardTitle.textContent = name;
  cardLink.src = link;

  const cards = document.querySelector('.gallery__cards');
  cards.prepend(cardItem);

  cardLink.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    const signature = card.querySelector('.card__title');

    popupViewImage.src = event.target.src;
    popupViewSignature.textContent = signature.textContent;

    popupStatus(popupView);
  });
}

openEditProfileButton.addEventListener('click', () => {
  popupStatus(popupEditProfile);
  updateEditForm();
});
closeEditProfileButton.addEventListener('click', () => popupStatus(popupEditProfile));
formEditProfile.addEventListener('submit', (evt) => {
  formSubmitHandler(evt);
  popupStatus(popupEditProfile);
});

openAddCardButton.addEventListener('click', () => popupStatus(popupAddCard));
closeAddCardButton.addEventListener('click', () => popupStatus(popupAddCard));
formAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const fromName = popupAddCard.querySelector('.form__field_type_name');
  const formlinc = popupAddCard.querySelector('.form__field_type_about');
  addCard(fromName.value, formlinc.value);

  popupStatus(popupAddCard);
});

closeViewButton.addEventListener('click', () => popupStatus(popupView));