/* Тут pop-up */
const popup = document.querySelector('.pop-up');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.pop-up__close-button');
const profile = document.querySelector('.profile');
const formElement = document.querySelector('.pop-up__form');
const nameInput = formElement.querySelector('.pop-up__name');
const jobInput = formElement.querySelector('.pop-up__job');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__about');

/* Тут pop-picture */
const popPictureOpenButton = document.querySelector('.profile__add-box');
const popPictureCloseButton = document.querySelector('.pop-picture__close-button');
const popPictureFormElement = document.querySelector('.pop-picture__form');
const elementsContainer = document.querySelector('.elements');


/* pop image */
const popImageCloseButton = document.querySelector('.pop-image__close-button');


/* Открытие и закрытие всех pop-up блоков*/
function popupOpen(name) {
    name.classList.add('popup__wrapper_open');
}

function popupClose(name) {
    name.classList.remove('popup__wrapper_open');
}

popupOpenButton.addEventListener('click', function() {
    nameProfOpen = document.querySelector('.pop-up')
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;

    popupOpen(nameProfOpen)
});

popupCloseButton.addEventListener('click', function() {
    nameProfClose = document.querySelector('.pop-up')

    popupClose(nameProfClose)
});

popPictureOpenButton.addEventListener('click', function() {
    namePictureOpen = document.querySelector('.pop-picture')

    popupOpen(namePictureOpen)
});

popPictureCloseButton.addEventListener('click', function() {
    namePictureClose = document.querySelector('.pop-picture')

    popupClose(namePictureOpen)
});


function formSubmitHandler (evt) {
        evt.preventDefault();
        nameProfile.textContent = nameInput.value;
        jobProfile.textContent = jobInput.value;

        nameClose = document.querySelector('.pop-up')
        popupClose(nameClose);
}

formElement.addEventListener('submit', formSubmitHandler);

/*----------------------------------------------------------------------------------------------------------------------*/
/*Страшно*/
/*----------------------------------------------------------------------------------------------------------------------*/

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


const addToCard = (cardTitle, cardUrl) => {
    const cardTemplate = document.querySelector('#card').content.cloneNode(true)

    const elementCardTitle = cardTemplate.querySelector(".elements__title")
    const elementCardSrc = cardTemplate.querySelector(".elements__picture")
    const popImgTitle = document.querySelector('.pop-image__title')
    const popImgSrc = document.querySelector('.pop-image__photo')

    elementCardTitle.textContent = cardTitle
    elementCardSrc.src = cardUrl
    elementCardSrc.alt = cardUrl


    cardTemplate.querySelector('.elements__trash-button').addEventListener('click', event => {
        event.target.closest(".elements__card").remove()
    })


    cardTemplate.querySelector('.elements__heart').addEventListener('click', event => {
        event.target.classList.toggle("elements__heart_active");
    })

    cardTemplate.querySelector('.elements__picture-button').addEventListener('click', function(){
        nameImgOpen = document.querySelector('.pop-image')


        popImgTitle.textContent = cardTitle
        popImgSrc.src = cardUrl
        popupOpen(nameImgOpen)
    })


    popImageCloseButton.addEventListener('click', function () {
        nameImgClose = document.querySelector('.pop-image')

        popupClose(nameImgClose)
    })

    return cardTemplate;
}

renderCard = (title, src) => {
    elementsContainer.prepend(addToCard(title, src))
}

popPictureFormElement.addEventListener('submit', event => {
    event.preventDefault()
    popPictureClose = document.querySelector('.pop-picture')

    const cardTitle = popPictureFormElement.querySelector(".pop-picture__name").value
    const cardUrl = popPictureFormElement.querySelector(".pop-picture__url").value

    popupClose(popPictureClose)
    renderCard(cardTitle, cardUrl)
})

initialCards.forEach(item => {
    renderCard(item.name, item.link)
});

/*----------------------------------------------------------------------------------------------------------------------*/
/* форма Профиля */
/*----------------------------------------------------------------------------------------------------------------------*/

const showError = (formItem, input, errorMessage) => {
    const errorElement = formItem.querySelector(`#${input.id}-error`);
    input.classList.add('pop-up__type-error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
}

const hideError = (formItem, input) => {
    const errorElement = formItem.querySelector(`#${input.id}-error`);
    input.classList.remove('pop-up__type-error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
}

const checkInputValidity = (formItem, input) => {
    if (!input.validity.valid) {
        showError(formElement, input, input.validationMessage);
    } else {
        hideError(formElement, input);
    }
};
/* ---------------------------------------------------- */

const checkInputValidityPicture = (formItem, input) => {
    if (!input.validity.valid) {
        showError(popPictureFormElement, input, input.validationMessage)
    } else {
        hideError(popPictureFormElement, input);
    }
}


const setEventListenersPicture = (formItem) => {
    const inputList = Array.from(formItem.querySelectorAll('.form__input-picture'));
    const buttonElement = formElement.querySelector('.pop-picture__save-button');

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((input) => {
        input.addEventListener('input', function() {
            checkInputValidityPicture(formItem, input);

            toggleButtonState(inputList, buttonElement)
        });
    });
}

/* ---------------------------------------------------- */

const setEventListeners = (formItem) => {
    const inputList = Array.from(formItem.querySelectorAll('.form__input'));
    const buttonElement = formElement.querySelector('.pop-up__save-button');

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((input) => {
        input.addEventListener('input', function () {
            checkInputValidity(formItem, input);

            toggleButtonState(inputList, buttonElement);
        });
    });
}


function enableValidation() {
    formList = Array.from(document.querySelectorAll('.pop-up__form'));
    formList.forEach((formItem) => {
        formItem.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(formItem)
    })
}
enableValidation()

function hasInvalidInput (inputList) {
    return inputList.some((input) => {
        return !input.validity.valid;
    })
}

function toggleButtonState (inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('pop-up__save-button_inactive');
    } else {
        buttonElement.classList.remove('pop-up__save-button_inactive');
    }
}
/*----------------------------------------------------------------------------------------------------------------------*/
/* форма Новой карточки */
/*----------------------------------------------------------------------------------------------------------------------*/

