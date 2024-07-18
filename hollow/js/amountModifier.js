document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const addButton = item.querySelector('.add');
        const subButton = item.querySelector('.sub');
        const amountDisplay = item.querySelector('p');
        addButton.addEventListener('click', () => {
            let amount = parseInt(amountDisplay.textContent);
            amountDisplay.textContent = amount + 1;
        });
        subButton.addEventListener('click', () => {
            let amount = parseInt(amountDisplay.textContent);
            if (amount >= 1) {
                amountDisplay.textContent = amount - 1;
            }
        });
    });
});

