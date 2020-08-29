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

const checkInputValidityPicture = (formItem, input) => {
    if (!input.validity.valid) {
        showError(popPictureFormElement, input, input.validationMessage)
    } else {
        hideError(popPictureFormElement, input);
    }
}

const setEventListenersPicture = (formItem) => {
    const inputList = Array.from(formItem.querySelectorAll('.form__input-picture'));
    const buttonElement = popPictureFormElement.querySelector('.pop-picture__save-button');

    toggleButtonPictureState(inputList, buttonElement);

    inputList.forEach((input) => {
        input.addEventListener('input', function() {
            checkInputValidityPicture(formItem, input);

            toggleButtonPictureState(inputList, buttonElement)
        });
    });
}

function enableValidationPicture() {
    formList = Array.from(document.querySelectorAll('.pop-picture__form'));
    formList.forEach((formItem) => {
        formItem.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListenersPicture(formItem)
    })
}
enableValidationPicture()

function toggleButtonPictureState (inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('pop-up__save-button_inactive');
    } else {
        buttonElement.classList.remove('pop-up__save-button_inactive');
    }
}