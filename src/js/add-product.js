import * as variable from './variables';
// import { productNameValidation } from './validation';

const shortid = require('shortid');

// console.log(productNameValidation);

let productList = [];

const productCreate = function(
    name,
    ean,
    internalCode,
) {
    const newProduct = {
        id: shortid.generate(),
        name,
        ean,
        internalCode,
    }
    productList.push(newProduct);
    console.log(productList);


    const productHTML = postTheProduct(newProduct);
    variable.leftContainerEls.product.insertAdjacentHTML('beforeend', productHTML);
    variable.tableElements.productSelect.insertAdjacentHTML('beforeend', productHTML);
}

const postTheProduct = function (product) {
    return `<option value="${product.name}" class="product-type__option" >${product.name}</option>`;
}

export function productRegister(event) {
    const productName = variable.addProductModalEls.nameInput.value;

    if (productName === '') {
        variable.addProductModalEls.nameInput.value = '';
        variable.addProductModalEls.eanInput.value = '';
        variable.addProductModalEls.prodCodeInput.value = '';
        alert('add a valid product name');
        console.log('fz')
        event.preventDefault();
        return false; 
    };

    const productEan = variable.addProductModalEls.eanInput.value;
    if (isNaN(productEan) || productEan === '' || productEan.length < 13) {
        alert('add a valid EAN Code');
        variable.addProductModalEls.nameInput.value = '';
        variable.addProductModalEls.eanInput.value = '';
        variable.addProductModalEls.prodCodeInput.value = '';
        event.preventDefault();
        return false; 
    };

    const productCode = variable.addProductModalEls.prodCodeInput.value;

    if (productCode === '') {
        alert('add a valid product code');
        variable.addProductModalEls.nameInput.value = '';
        variable.addProductModalEls.eanInput.value = '';
        variable.addProductModalEls.prodCodeInput.value = '';
        event.preventDefault();
        return false; 
    };

    productCreate(productName, productEan, productCode);

        variable.addProductModalEls.nameInput.value = '';
        variable.addProductModalEls.eanInput.value = '';
        variable.addProductModalEls.prodCodeInput.value = '';
};


