let container = document.querySelector('.root');

let popupEditProfile = container.querySelector('.popup');
let openEditProfileButton = container.querySelector('.account__edit-button');
let closeEditProfileButton = container.querySelector('.form__close-button');

let name = container.querySelector('.account__name');
let about = container.querySelector('.account__about');

let formName = container.querySelector('.form__name-field');
let formAbout = container.querySelector('.form__about-field');


function openEditProfile() {
    popupEditProfile.classList.add('popup_opened');
    formName.value = name.textContent;
    formAbout.value = about.textContent;
}

function closeEditProfile() {
    popupEditProfile.classList.remove('popup_opened');
}

openEditProfileButton.addEventListener(('click'), openEditProfile);
closeEditProfileButton.addEventListener(('click'), closeEditProfile);


let formElement = container.querySelector('.form');

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    name.textContent = formName.value;
    about.textContent = formAbout.value;
    closeEditProfile();
}

formElement.addEventListener('submit', formSubmitHandler); 
