/* Тут pop-up */
const popup = document.querySelector('.pop-up');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.pop-up__close-button');
const formElement = document.querySelector('.pop-up__form');
const profile = document.querySelector('.profile');
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
    name.classList.add('popup-wrapper_open');
}

function popupClose(name) {
    name.classList.remove('popup-wrapper_open');
}

popupOpenButton.addEventListener('click', function() {
    nameProfOpen = document.querySelector('.pop-up')

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

        nameInput.value = nameProfile.textContent;
        jobInput.value = jobProfile.textContent;

        nameClose = document.querySelector('.pop-up')
        popupClose(nameClose);
}

formElement.addEventListener('submit', formSubmitHandler);



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

/*----------------------------------------------------------------------------------------------------------------------*/

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

    renderCard(cardTemplate)

}

function renderCard(object) {
    elementsContainer.prepend(object)
}

initialCards.forEach(item => {
    addToCard(item.name, item.link);
});


popPictureFormElement.addEventListener('submit', event => {
    event.preventDefault()
    popPictureClose = document.querySelector('.pop-picture')

    const cardTitle = popPictureFormElement.querySelector(".pop-picture__name").value
    const cardUrl = popPictureFormElement.querySelector(".pop-picture__url").value

    addToCard(cardTitle, cardUrl)
    popupClose(popPictureClose)
})



/*----------------------------------------------------------------------------------------------------------------------*/




