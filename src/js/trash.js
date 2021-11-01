
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
            transaction.product === variable.tableElements.marketplaceSelect.value &&
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
        filteredTransactionTable(filteredTransaction);
}