import * as variable from './variables';
import * as functions from './tablepost';

export const FilterFunction = function(event) {
    console.log('js');
    const newTable = `       
        <table class='story-table'>
            <tr class='main-line'>
                <td class="number">Number</td>
                <td class='id'>Transaction ID</td>
                <td class='product'>Product</td>
                <td class='marketplace'>Marketplace</td>
                <td class="type">Type</td>
                <td class='time'>Time</td>
                <td class='date'>Date</td>
                <td class='weight'>Weight</td>
                <td class='measurement'>Measurement</td>
                <td class='stock'>Left on Stock</td>
            </tr>
        </table>`;

    variable.tableElements.table.innerHTML = newTable;
    console.log('js');
    if (variable.tableElements.startDateFilter.value > variable.tableElements.endDateFilter.value) {
        alert("No Valid DATE");
        event.preventDefault();
        return false;
    } else if ((isNaN(variable.tableElements.minWeightInput.value) &&  variable.tableElements.minWeightInput.value !== '') || (isNaN(variable.tableElements.maxWeightInput.value) &&  variable.tableElements.maxWeightInput.value !== '')) {
        alert("No Valid weight");
        event.preventDefault();
        return false;
    }
    console.log('js');
if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty'
)
        {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value)
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
    };

    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value)
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
    }

    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
    }

    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
    }

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}
    
    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value)
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}
    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value)
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value)
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}
if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value)
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}
if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}
if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}
if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value 
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value 
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value 
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value 
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

// ! ------------------------------------------------>

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}
if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value &&
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value &&
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value &&
            transaction.product === variable.tableElements.productSelect.value 
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value 
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value &&
            transaction.time > variable.tableElements.startDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}


if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}
if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}
if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

// ! ------------------------------------------------- 

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}
    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value && 
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value && 
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}
    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

// ! ---------------------------------------------    

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value === 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value 
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value === 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value && 
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value === '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value === '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value === '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value === '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}

    if (variable.tableElements.typeFilter.value === 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        filteredTransactionTable(filteredTransaction);
}
    if (variable.tableElements.typeFilter.value !== 'empty' &&
        variable.tableElements.minWeightInput.value !== '' &&
        variable.tableElements.maxWeightInput.value !== '' &&
        variable.tableElements.startDateFilter.value !== '' &&
        variable.tableElements.endDateFilter.value !== '' && 
        variable.tableElements.productSelect.value !== 'empty' &&
        variable.tableElements.marketplaceSelect.value !== 'empty') {
        const filteredTransaction = variable.allTransactions.filter(transaction =>
            transaction.transactionType === variable.tableElements.typeFilter.value &&
            transaction.weight >= Number(variable.tableElements.minWeightInput.value) &&
            transaction.weight <= Number(variable.tableElements.maxWeightInput.value) &&
            transaction.time > variable.tableElements.startDateFilter.value &&
            transaction.time < variable.tableElements.endDateFilter.value &&
            transaction.product === variable.tableElements.productSelect.value &&
            transaction.marketplace === variable.tableElements.marketplaceSelect.value
        );
        console.log(filteredTransaction);
        console.log(transaction.marketplace);
        console.log(variable.tableElements.marketplaceSelect.value);

        filteredTransactionTable(filteredTransaction);
    }
};

export const filterReset = function() {
    const newTable = `       
        <table class='story-table'>
            <tr class='main-line'>
                <td class="number">Number</td>
                <td class='id'>Transaction ID</td>
                <td class='product'>Product</td>
                <td class='marketplace'>Marketplace</td>
                <td class="type">Type</td>
                <td class='time'>Time</td>
                <td class='date'>Date</td>
                <td class='weight'>Weight</td>
                <td class='measurement'>Measurement</td>
                <td class='stock'>Left on Stock</td>
            </tr>
        </table>`;
    variable.tableElements.table.innerHTML = newTable;

    resetedTable();
};

function resetedTable() {
    variable.allTransactions.map(transaction => {
        functions.postIntoTable(
        transaction.number,
        transaction.id,
        transaction.product,
        transaction.marketplace,
        transaction.transactionType,
        transaction.time,
        transaction.date,
        transaction.weight,
        transaction.stock,
        )
    });
}

export const filteredTransactionTable = transactions => transactions.map(transaction => {
    functions.postIntoTable(
        transaction.number,
        transaction.id,
        transaction.product,
        transaction.marketplace,
        transaction.transactionType,
        transaction.time,
        transaction.date,
        transaction.weight,
        transaction.stock,
    )
});

