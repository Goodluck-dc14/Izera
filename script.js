const buyerBtn = document.querySelector('#buyerBtn');
const sellerBtn = document.querySelector('#sellerBtn');
const firstPage = document.querySelector('#firstPage');
const addProductPage = document.querySelector('#addProductPage');
const productsListPage = document.querySelector('#productsPage');
const addProductArrow = document.querySelector('#addProductArrow');
const productsArrow = document.querySelector('#productsArrow');
const imgUploadBtn = document.querySelector('#imgUploadIcon');
const addProductBtn = document.querySelector('#addProductBtn');
const addProductSuccessPage = document.querySelector('#addProductSuccess');
const buyOrdersPage = document.querySelector('#buyOrdersPage');
const buyOrdersBtn = document.querySelector('#buyOrdersBtn');
const productsList = document.querySelectorAll('.productContainer');
const productDetailsPage = document.querySelector('#productDetailsPage');
const productDetailsArrowBtn = document.querySelector('#productDetailsArrow');
const buyBtn = document.querySelector('#buyBtn');
const buyerDetailsPage = document.querySelector('#buyerDetails');
const buyerDetailsArrow = document.querySelector('#buyerDetailsArrow');
const buyerDetailsBtn = document.querySelector('#buyerDetailsBtn');
const paymentAwaitPage = document.querySelector('#paymentWait');
const paymentMethodPage = document.querySelector('#paymentMethodPage');
const paymentMethodArrow = document.querySelector('#paymentMethodArrow');
const buyerPhoneNumberPage = document.querySelector('#buyerPhoneNumberPage');
const buyerPhoneNumberArrow = document.querySelector('#buyerPhoneNumberArrow');
const mobileMoney = document.querySelector('#mobileMoney');
const submittedNumber = document.querySelector('#submittedNumberContainer');
const tryAgainBtn = document.querySelector('#tryAgainBtn');
const paymentSuccessPage = document.querySelector('#paymentSuccessPage');
const buyerPhoneNumber = document.querySelector('#buyerPhoneNumber');
const number = document.querySelector('#number');

buyerBtn.addEventListener('click', e => {
    firstPage.style.display = 'none';
    productsListPage.style.display = 'flex';
});

productsArrow.addEventListener('click', e => {
    firstPage.style.display = 'flex';
    productsListPage.style.display = 'none';
});

sellerBtn.addEventListener('click', e => {
    firstPage.style.display = 'none';
    addProductPage.style.display = 'flex';
});

addProductArrow.addEventListener('click', e => {
    firstPage.style.display = 'flex';
    addProductPage.style.display = 'none';
});

imgUploadBtn.addEventListener('change', e => {
    const file = e.target.files[0];
    
    if (file && file.type.startsWith('image/')) {
        const imageElement = document.querySelector('#uploadedImg');
        // Set the image source to the selected file
        const reader = new FileReader();
        reader.onload = (e) => {
            imageElement.src = e.target.result;
        };
        reader.readAsDataURL(file);

        document.querySelector('#imgOverlay').style.display = 'block';
        document.querySelector('#imgUploadText').style.color = 'hsla(0, 0%, 100%, 1)';
    } else {
        alert('Please select a valid image file.');
    }
});

addProductBtn.addEventListener('click', e => {
    e.preventDefault();
    addProductPage.style.display = 'none';
    addProductSuccessPage.style.display = 'flex';
});

buyOrdersBtn.addEventListener('click', e => {
    addProductSuccessPage.style.display = 'none';
    buyOrdersPage.style.display = 'flex';
});

productsList.forEach(i => {
    i.addEventListener('click', e => {
        productsListPage.style.display = 'none';
        productDetailsPage.style.display = 'flex';
    })
});

productDetailsArrowBtn.addEventListener('click', e => {
    productsListPage.style.display = 'flex';
    productDetailsPage.style.display = 'none';
});

buyBtn.addEventListener('click', e => {
    buyerDetailsPage.style.display = 'flex';
    productDetailsPage.style.display = 'none';
});

buyerDetailsArrow.addEventListener('click', e => {
    buyerDetailsPage.style.display = 'none';
    productDetailsPage.style.display = 'flex';
});

buyerDetailsBtn.addEventListener('click', e => {
    buyerDetailsPage.style.display = 'none';
    paymentMethodPage.style.display = 'flex';
});

paymentMethodArrow.addEventListener('click', e => {
    buyerDetailsPage.style.display = 'flex';
    paymentMethodPage.style.display = 'none';
});

buyerPhoneNumberArrow.addEventListener('click', e => {
    buyerPhoneNumberPage.style.display = 'none';
    paymentMethodPage.style.display = 'flex';
})

mobileMoney.addEventListener('click', e => {
    paymentMethodPage.style.display = 'none';
    buyerPhoneNumberPage.style.display = 'flex';
    number.innerHTML = buyerPhoneNumber.value;
});

submittedNumber.addEventListener('click', e => {
    buyerPhoneNumberPage.style.display = 'none';
    paymentAwaitPage.style.display = 'flex';
});

tryAgainBtn.addEventListener('click', e => {
    buyerPhoneNumberPage.style.display = 'flex';
    paymentAwaitPage.style.display = 'none';
})