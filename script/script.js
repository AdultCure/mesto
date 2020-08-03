let popup = document.querySelector('.pop-up');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.pop-up__close-button');

let formElement = document.querySelector('.pop-up__form');
let profile = document.querySelector('.profile');


let popupToggle = function() {
    popup.classList.toggle('pop-up_open');

    let nameProfile = profile.querySelector('.profile__name');
    let jobProfile = profile.querySelector('.profile__about');


    let nameValue = nameProfile.textContent;
    let jobValue = jobProfile.textContent;

    let nameInput = formElement.querySelector('.pop-up__name');
    let jobInput = formElement.querySelector('.pop-up__job');

    nameInput.value = nameValue;
    jobInput.value = jobValue;
}

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
    function formSubmitHandler (evt) {
        evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
        // Так мы можем определить свою логику отправки.
        // О том, как это делать, расскажем позже.

        // Находим поля формы в DOM
        let nameInput = formElement.querySelector('.pop-up__name');
        let jobInput = formElement.querySelector('.pop-up__job');

        // Получите значение полей из свойства value
        let nameValue = nameInput.value;
        let jobValue = jobInput.value;
        // Выберите элементы, куда должны быть вставлены значения полей
        let nameProfile = profile.querySelector('.profile__name');
        let jobProfile = profile.querySelector('.profile__about');
        // Вставьте новые значения с помощью textContent
        nameProfile.textContent = nameValue;
        jobProfile.textContent = jobValue;
    }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);