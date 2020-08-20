/* Тут переменные для pop-up */
let popup = document.querySelector('.pop-up');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.pop-up__close-button');
let formElement = document.querySelector('.pop-up__form');
let profile = document.querySelector('.profile');
let nameInput = formElement.querySelector('.pop-up__name');
let jobInput = formElement.querySelector('.pop-up__job');
let nameProfile = profile.querySelector('.profile__name');
let jobProfile = profile.querySelector('.profile__about');

/* Тут переменные для pop-picture */
let popPicture = document.querySelector('.pop-picture');
let popPictureOpenButton = document.querySelector('.profile__add-box');
let popPictureCloseButton = document.querySelector('.pop-picture__close-button');
let popPictureSaveButton = document.querySelector('.pop-picture__save-button');
let popPictureFormElement = document.querySelector('.pop-picture__form');
let popPictureTitle = popPictureFormElement.querySelector('.pop-picture__name');
let popPictureUrl = popPictureFormElement.querySelector('.pop-picture__url');
const elementsContainer = document.querySelector('.elements');



/* Тут переменные для elements */
let elementCard = document.querySelectorAll('.elements__card');
let deleteButtons = document.querySelectorAll('.elements__trash-button');
let elementsPicture = document.querySelector('.elements__picture');
let pictureButtons = document.querySelectorAll('.elements__picture-button');

/* pop image */
let popImageBlock = document.querySelector('.pop-image');
let popImage = document.querySelector('.pop-image__photo');
let popImageCloseButton = document.querySelector('.pop-image__close-button');
let popImagePhoto = document.querySelector('.pop-image__photo');
let popImageContainer = document.querySelector('.pop-image__container');


/* Тут переменные для heart */
let hearts = document.querySelectorAll('.elements__heart');


/* popup */
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


/* popPicture */
function popPictureOpen() {
    popPicture.classList.add('pop-picture_open');
}

function popPictureClose() {
    popPicture.classList.remove('pop-picture_open');
}


popPictureOpenButton.addEventListener('click', popPictureOpen);
popPictureCloseButton.addEventListener('click', popPictureClose);



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

    cardTemplate.querySelector(".elements__title").textContent = cardTitle
    cardTemplate.querySelector(".elements__picture").src = cardUrl
    cardTemplate.querySelector(".elements__picture").alt = cardUrl


    cardTemplate.querySelector('.elements__trash-button').addEventListener('click', event => {
        const DelElements = event.target.closest(".elements__card")

        DelElements.remove()
    })


    cardTemplate.querySelector('.elements__heart').addEventListener('click', event => {
        const LikeElements = event.target.classList.toggle("elements__heart_active");
    })

    cardTemplate.querySelector('.elements__picture-button').addEventListener('click', function (){
        popImageBlock.classList.add('pop-image_open')


        const popImgTitle = document.querySelector('.pop-image__title').textContent = cardTitle
        const popImgSrc = document.querySelector('.pop-image__photo').src = cardUrl
    })


    popImageCloseButton.addEventListener('click', function () {
        popImageBlock.classList.remove('pop-image_open')
    })

    elementsContainer.prepend(cardTemplate)

}

elementCard.forEach(function (item) {
item.addEventListener('click')
})

initialCards.forEach(item => {
    addToCard(item.name, item.link);
});


popPictureFormElement.addEventListener('submit', event => {
    event.preventDefault()

    const cardTitle = popPictureFormElement.querySelector(".pop-picture__name").value
    const cardUrl = popPictureFormElement.querySelector(".pop-picture__url").value

    addToCard(cardTitle, cardUrl)
    popPictureClose()
})



/*----------------------------------------------------------------------------------------------------------------------*/

/*pictureButtons.addEventListener('click', popImageOpen)*/

/* открытие карточек */
/*function popImageOpen(src) {
    popImage.src = src;
    popImageBlock.classList.add('pop-image_open');
}*/

/*function popImageClose() {
    popImageBlock.classList.remove('pop-image_open');
}

popImageCloseButton.addEventListener('click', popImageClose);

pictureButtons.forEach(function (item) {
    item.addEventListener('click', function (evt) {
        let photoImage = evt.target.src;
        popImageOpen(photoImage);
    })
})*/






