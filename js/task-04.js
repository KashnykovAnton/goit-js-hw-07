const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

function decrement() {
    counterValue -= 1;
};

function increment() {
    counterValue += 1;
};

decrBtn.addEventListener('click', function () {
    decrement();
    valueEl.textContent = counterValue;
});

incrBtn.addEventListener('click', function () {
    increment();
    valueEl.textContent = counterValue;
});
