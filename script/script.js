let popup = document.querySelector('.pop-up');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.pop-up__close-button');
let formElement = document.querySelector('.pop-up__form');
let profile = document.querySelector('.profile');
let nameInput = formElement.querySelector('.pop-up__name');
let jobInput = formElement.querySelector('.pop-up__job');
let nameProfile = profile.querySelector('.profile__name');
let jobProfile = profile.querySelector('.profile__about');

function popupOpen() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;

    popup.classList.add('pop-up_open');
}

function popupClose() {
    popup.classList.remove('pop-up_open');
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);

function formSubmitHandler (evt) {
        evt.preventDefault();

        nameProfile.textContent = nameInput.value;
        jobProfile.textContent = jobInput.value;
        popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);