import * as variable from './variables';

export const postIntoTable = function(
    transactionNumber,
    transactionId,
    transactionProduct,
    transactionMarketplace,
    changeType,
    transactionTime,
    transactionDate,
    valueChange,
    transactionStock,
) {

    const newtable = `
            <tr class='filled-table'>
                <td class="number">${transactionNumber}</td>
                <td class='id'>${transactionId}</td>
                <td class='product'>${transactionProduct}</td>
                <td class='marketplace'>${transactionMarketplace}</td>
                <td class="type">${changeType}</td>
                <td class='time'>${transactionTime}</td>
                <td class='date'>${transactionDate}</td>
                <td class='weight'>${valueChange}</td>
                <td class='measurement'>${variable.static.LBS}</td>
                <td class='stock'>${transactionStock}</td>
            </tr>`;
    variable.tableElements.table.insertAdjacentHTML('beforeend', newtable);
    return newtable;
};

