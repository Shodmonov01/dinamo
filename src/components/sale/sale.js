const saleBtn = document.getElementById('#sale-button');
const saleCards = document.getElementById('#sale-bottom');
// const saleCards = document.querySelector('.sale-cards');

saleBtn.addEventListener('click', () => {
    saleCards.classList.toggle('active');
    saleBtn.classList.toggle('show');
});