const inputValid = document.querySelector('#validation-input');
const inputLength = Number(inputValid.dataset.length)

inputValid.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
    if (inputLength === e.currentTarget.value.length) {
        inputValid.classList.add('valid');
        inputValid.classList.remove('invalid')
    }
    else {
        inputValid.classList.add('invalid');
        inputValid.classList.remove('valid');
    }
};
