let container = document.querySelector('.root');

let popupEditProfile = container.querySelector('.popup');
let openEditProfileButton = container.querySelector('.account__edit-button');
let closeEditProfileButton = container.querySelector('.popup__close-button');

let name = container.querySelector('.account__name');
let about = container.querySelector('.account__about');

let formName = container.querySelector('.form__field_type_name');
let formAbout = container.querySelector('.form__field_type_about');

let formElement = container.querySelector('.form');


function openEditProfile() {
    popupEditProfile.classList.add('popup_opened');
    formName.value = name.textContent;
    formAbout.value = about.textContent;
}

function closeEditProfile() {
    popupEditProfile.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    name.textContent = formName.value;
    about.textContent = formAbout.value;
    closeEditProfile();
}

openEditProfileButton.addEventListener('click', openEditProfile);
closeEditProfileButton.addEventListener('click', closeEditProfile);
formElement.addEventListener('submit', formSubmitHandler); 