export const static = {
    maxStorageFacility: {
        tonnes: 20000,
    },
    KG: 'kg',
    LBS: 'lbs',
    TONNES: 'tonnes',
    GRAMS: 'grams',
    METRICMULTIPLIER: 1000,
    LBSMULTIPLIER: 2.2,
}
const outContainer = document.querySelector('.out-container');
export const outContainerEls = {
    inputEl: outContainer.querySelector("[data-input='taken']"),
    buttonEl: outContainer.querySelector("[data-button='taken']"),
    selectEl: outContainer.querySelector('.container__select'),
    optionDelete: outContainer.querySelector("[data-delete]"),
    marketplace: outContainer.querySelector(".marketplace__select"),
}

const inContainer = document.querySelector('.in-container');
export const inContainerEls = {
    inputEl: inContainer.querySelector("[data-input='added']"),
    buttonEl: inContainer.querySelector("[data-button='added']"),
    selectEl: inContainer.querySelector('.container__select'),
    optionDelete: inContainer.querySelector("[data-delete]"),
}

const leftContainer = document.querySelector('.left-container');
export const leftContainerEls = {
    textEl: leftContainer.querySelector("[data-text='info']"),
    selectEl: leftContainer.querySelector('.container__select'),
    optionDelete: leftContainer.querySelector("[data-delete]"),
    product: leftContainer.querySelector(".product-type__select"),
}

const tableContainer = document.querySelector('.table-container');
export const tableElements = {
    typeFilter: tableContainer.querySelector('.new-filter'),
    startDateFilter: tableContainer.querySelector('.start-date-input'),
    endDateFilter: tableContainer.querySelector('.end-date-input'),
    minWeightInput: tableContainer.querySelector('.min-weight-input'),
    maxWeightInput: tableContainer.querySelector('.max-weight-input'),
    productSelect: tableContainer.querySelector('.product-filter__select'),
    marketplaceSelect: tableContainer.querySelector('.marketplace-filter__select'),    
    filterActivator: tableContainer.querySelector('.filter-activator'),
    filterReset: tableContainer.querySelector('.filter-reset'),
    optionDelete: tableContainer.querySelector("[data-delete]"),

    optionType: tableContainer.querySelector('[data-option="type"]'),
    optionDate: tableContainer.querySelector('[data-option="date"]'),
    optionWeight: tableContainer.querySelector('[data-option="weight"]'),
    table: tableContainer.querySelector('.story-table'),
    tableSelector: tableContainer.querySelector('.table__select'),
}

export const allTransactions = [];

const addProductModalContainer = document.querySelector('.add-product');
export const addProductModalEls = {
    openBtnEl: addProductModalContainer.querySelector('.js-open-btn'),
    closeBtnEl: addProductModalContainer.querySelector('.js-close-btn'),

    nameInput: addProductModalContainer.querySelector('.js-input-name'),
    eanInput: addProductModalContainer.querySelector('.js-input-ean'),
    prodCodeInput: addProductModalContainer.querySelector('.js-input-prodcode'),
}

const marketplaceContainer = document.querySelector('.add-marketplace');
export const marketplaceContainerEls = {
    btn: marketplaceContainer.querySelector('.add-marketplace__button'),
    input: marketplaceContainer.querySelector('.add-marketplace__input')
}