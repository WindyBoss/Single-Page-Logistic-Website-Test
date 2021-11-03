import * as variable from './variables';


export function openAddProductModal() {
    variable.addProductModalEls.modal.classList.toggle('is-open');
};

export function showTheFiltersValue(
    transactionType,
    minWeight,
    maxWeight,
    minDate,
    maxDate,
    productName,
    marketplace
) {
    const insertContainer = document.createElement('div');

    if (variable.tableElements.showFilters.children.length > 0) {
        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
        removeAllChildNodes(variable.tableElements.showFilters);
    }

    const typeFilter = document.createElement('div');
    typeFilter.classList.add('chosen-filter');
    if (transactionType !== 'empty') {
        typeFilter.innerHTML = `<p class="chosen-filter__text">Transaction Type: ${transactionType}</p>`;
    }


    const weightFilterEl = document.createElement('div');
    weightFilterEl.classList.add('chosen-filter');
    if (minWeight !== '' && maxWeight === '') {
        weightFilterEl.innerHTML = `<p class="chosen-filter__text">Weight Range: > ${minWeight} lbs</p>`;
    } else if (maxWeight !== '' && minWeight === '') {
        weightFilterEl.innerHTML = `<p class="chosen-filter__text">Weight Range: < ${maxWeight} lbs</p>`;
    } else if (maxWeight !== '' && minWeight !== '') {
        weightFilterEl.innerHTML = `<p class="chosen-filter__text">Weight Range: ${minWeight} - ${maxWeight} lbs</p>`;
    }


    // const weightFilterEl = document.createElement('div');
    // weightFilterEl.classList.add('chosen-filter');
    // weightFilterEl.innerHTML = weightFilter(minWeight, maxWeight);

    // const productFilterStyle = document.createElement('div');
    // productFilterStyle.classList.add('chosen-filter');
    // productFilterStyle.innerHTML = productFilter(productName);

    const productFilterStyle = document.createElement('div');
    productFilterStyle.classList.add('chosen-filter');
    if (productName !== 'empty') {
        productFilterStyle.innerHTML = `<p class="chosen-filter__text">Product: ${productName}</p>`;
    }


    const marketplaceFilterStyle = document.createElement('div');
    marketplaceFilterStyle.classList.add('chosen-filter');
    if (marketplace !== 'empty') {
        marketplaceFilterStyle.innerHTML = `<p class="chosen-filter__text">Marketplace: ${marketplace}</p>`;
    }



    const dateFilterStyle = document.createElement('div');
    dateFilterStyle.classList.add('chosen-filter');
    // dateFilterStyle.innerHTML = dateFilter(minDate, maxDate);
    if (minDate !== '' && maxDate === '') {
        dateFilterStyle.innerHTML = `<p class=""chosen-filter__text">Date Range: ${minDate} - Today</p>`;
    } else if (maxDate !== '' && minDate === '') {
        dateFilterStyle.innerHTML = `<p class=""chosen-filter__text">Date Range: until - ${maxDate} </p>`;
    } else if (maxDate !== '' && minDate !== '') {
        dateFilterStyle.innerHTML = `<p class=""chosen-filter__text">Date Range: ${minDate} - ${maxDate} </p>`;
    }





    insertContainer.append(
        typeFilter,
        weightFilterEl,
        dateFilterStyle,
        productFilterStyle,
        marketplaceFilterStyle);

    variable.tableElements.showFilters.append(insertContainer);
};

// function typeFilterStyle(type) {
//     if (type === '') {
//         return;
//     }
//     return `
//         <p class="chosen-filter__text">Filter: ${type}</p>
//     `;
// };

function weightFilter(min, max) {
    if (min === '' && max === '') {
        return;
    } else if (min !== '' && max === '') {
        return `
            <p class="chosen-filter__text">Filter: > ${min}</p>
        `
    } else if (max !== '' && min === '') {
        return `
            <p class="chosen-filter__text">Filter: < ${max} </p>
        `;
    } else if (max !== '' && min !== '') {
        return `
            <p class="chosen-filter__text">Filter: ${min}> weight <${max} </p>
        `
    }
};

function dateFilter(minDate, maxDate) {
    if (minDate === '' && maxDate === '') {
        return;
    } else if (minDate !== '' && maxDate === '') {
        return `
            <p class=""chosen-filter__text">Filter: after ${minDate}</p>
        `
    } else if (maxDate !== '' && minDate === '') {
        return `
            <p class=""chosen-filter__text">Filter: before ${maxDate} </p>
        `;
    } else if (maxDate !== '' && minDate !== '') {
        return `
            <p class=""chosen-filter__text">Filter: ${minDate}> between <${maxDate} </p>
        `
    }
}

function productFilter(productName) {
    if (productName === '') {
        return;
    }
    return `
        <p class="chosen-filter__text">Filter: ${productName}</p>
    `;
}

function marketplaceFilter(marketplace) {
    if (marketplace === '') {
        return;
    }
    return `
        <p class="chosen-filter__text">Filter: ${marketplace}</p>
    `;
};


export function addFilters() {
    variable.tableElements.filterContainer.classList.toggle('is-open');
}