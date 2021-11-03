import * as variable from './variables';
import * as style from './style';
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
        storage: 0,
    }
    productList.push(newProduct);
    console.log(productList);
    postProduInfo(productList);


}

export function addProductStorage(value, productName) {
    if (productList.find(product => product.name).name === productName) {
        productList.find(product => product.name).storage += Number(value);
    }
    console.log(productList);
    postProduInfo(productList);
};

function postProduInfo(listOfProduct) {
    console.log(variable.productInfoContainer);
    variable.productInfoContainer.innerHTML === '';
    removeAllChildNodes(variable.productInfoContainer);

    listOfProduct.map(product => {
        const productInputHtml = postTheInInputProduct(product);
        const productPost = postTheProduct(product);
        variable.productInfoContainer.insertAdjacentHTML('afterbegin', productPost);
        variable.leftContainerEls.product.insertAdjacentHTML('beforeend', productInputHtml);
        variable.tableElements.productSelect.insertAdjacentHTML('beforeend', productInputHtml);
    });
    console.log(variable.productInfoContainer);
}

const postTheInInputProduct = function(product) {
    return `<option value="${product.name}" class="product-type__option" >${product.name}</option>`;
};

const postTheProduct = function(product) {
    return `
        <div>
            <p>${product.name}</p>
            <p>${product.ean}</p>
            <p>${product.internalCode}</p>
            <p>${product.storage}</p>
        </div>
    `;
}

export function productRegister(event) {
    const productName = variable.addProductModalEls.nameInput.value;


    if (productName === '') {
        variable.addProductModalEls.nameInput.value = '';
        variable.addProductModalEls.eanInput.value = '';
        variable.addProductModalEls.prodCodeInput.value = '';
        alert('add a valid product name');
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

    console.log(productList);
    if (productList.length > 0 && productList.filter(product => product.ean === productEan).length > 0) {
        alert('product already exist');
        variable.addProductModalEls.nameInput.value = '';
        variable.addProductModalEls.eanInput.value = '';
        variable.addProductModalEls.prodCodeInput.value = '';
        event.preventDefault();
        return false;
    } else if (productList.length > 0 && productList.filter(product => product.name === productName).length > 0) {
        alert('Name is busy');
        variable.addProductModalEls.nameInput.value = '';
        variable.addProductModalEls.eanInput.value = '';
        variable.addProductModalEls.prodCodeInput.value = '';
        event.preventDefault();
        return false;
    } else if (productList.length > 0 && productList.filter(product => product.internalCode === productCode).length > 0) {
        alert('Internal code is busy');
        variable.addProductModalEls.nameInput.value = '';
        variable.addProductModalEls.eanInput.value = '';
        variable.addProductModalEls.prodCodeInput.value = '';
        event.preventDefault();
        return false;
    }

    productCreate(productName, productEan, productCode, event);

    variable.addProductModalEls.nameInput.value = '';
    variable.addProductModalEls.eanInput.value = '';
    variable.addProductModalEls.prodCodeInput.value = '';
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};