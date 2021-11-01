    import * as variable from './variables';


const marketplaceList = [];
export const marketplaceCreate = function (event) {
    const marketplace = variable.marketplaceContainerEls.input.value;
        console.log(marketplace);
    if (variable.marketplaceContainerEls.input.value === '') {
        alert('Enter Marketplace');
        event.preventDefault();
        return false;
    };
    console.log(marketplace);

    marketplaceList.push(marketplace);
    console.log(marketplaceList);
    variable.marketplaceContainerEls.input.value = '';

    const marketplaceHTML = postTheMarketplace(marketplace);
    variable.outContainerEls.marketplace.insertAdjacentHTML('beforeend', marketplaceHTML);
    variable.tableElements.marketplaceSelect.insertAdjacentHTML('beforeend', marketplaceHTML);

}

const postTheMarketplace = function (marketplace) {
    console.log(marketplace);
        return `<option value="${marketplace}" class="marketplace__option">${marketplace}</option>`
};