// import * as validate from './js/validation';
import * as variable from './js/variables';
import * as functions from './js/tablepost';
import * as dateTime from './js/date-time';
import * as filter from './js/table-filter';
import { productRegister } from './js/add-product';
import { marketplaceCreate }  from './js/marketplace';
const shortid = require('shortid');

let previous = '';
let now = '';
let totalSum = 0;

const setTheMainWeightMeasurement = function(sum) {
    variable.leftContainerEls.textEl.textContent = `Left on warehouse: ${sum.toFixed(2)} ${variable.leftContainerEls.selectEl.value}`;
};

const addButtonChangeRegister = function(event) {
    const changeType = 'added';
    const addedAmount = variable.inContainerEls.inputEl.value;
    const storageLimit = limitCalculator(variable.inContainerEls.selectEl.value);
    console.log(storageLimit);

    if (variable.inContainerEls.selectEl.value === 'empty' || variable.leftContainerEls.selectEl.value === 'empty') {
        alert("Choose the measurements");
        event.preventDefault();
        return false;
    } else if (isNaN(addedAmount) || addedAmount < 1) {
        alert("Input not valid");
        event.preventDefault();
        return false;
    } else if (addedAmount > storageLimit - totalSum) {
        alert("More than storage can take");
        event.preventDefault();
        return false;
    }



    totalSum += Number(
        weightMeasureChoice(addedAmount, variable.inContainerEls.selectEl)
    );


    setTheMainWeightMeasurement(totalSum);
    console.log(totalSum);

    dataCollect(
        changeType,
        variable.inContainerEls.inputEl.value,
        totalSum,
        variable.inContainerEls.selectEl.value,
        event,
    );
    console.log(totalSum);

    variable.inContainerEls.inputEl.value = '';

}

const limitCalculator = function (value) {
    console.log(value);
    console.log(variable.static.maxStorageFacility.tonnes);

    let storateLimit = 0;
    console.log(storateLimit);

    if (value === variable.static.TONNES) {
        storateLimit = variable.static.maxStorageFacility.tonnes;
        console.log(storateLimit);
        return storateLimit;
    } else if (value === variable.static.KG) {
        storateLimit = variable.static.maxStorageFacility.tonnes * variable.static.METRICMULTIPLIER;
        console.log(storateLimit);
        return storateLimit;
    } else if (value === variable.static.GRAMS) {
        storateLimit = variable.static.maxStorageFacility.tonnes * variable.static.METRICMULTIPLIER * variable.static.METRICMULTIPLIER;
        console.log(storateLimit);
        return storateLimit;
    } else if (value === variable.static.LBS) {
        storateLimit = variable.static.maxStorageFacility.tonnes * variable.static.METRICMULTIPLIER * variable.static.LBSMULTIPLIER;
        console.log(storateLimit);
        return storateLimit;
    }
}

const takeButtonChangeRegister = function(event) {
    const changeType = 'taken';
    const validationSum = totalSum;
    const takenAmount = variable.outContainerEls.inputEl.value;

    console.log(totalSum);
    console.log(validationSum);

    if (isNaN(takenAmount) || takenAmount < 1) {
        alert("Input not valid");
        event.preventDefault()
        return false;
    } else if (
        variable.outContainerEls.selectEl.value === 'empty' ||
        variable.outContainerEls.inputEl.value === 'empty' ||
        variable.leftContainerEls.selectEl.value === 'empty'
    ) {
        alert("Choose the measurements");
        event.preventDefault()
        return false;
    }

    totalSum -= Number(
        weightMeasureChoice(takenAmount, variable.outContainerEls.selectEl)
    );

    if (totalSum < 0) {
        totalSum = validationSum;
        alert("Not enough on storage");
        event.preventDefault()
        return false;
    };
    setTheMainWeightMeasurement(totalSum);
    dataCollect(
        changeType,
        variable.outContainerEls.inputEl.value,
        totalSum,
        variable.outContainerEls.selectEl.value
    )
    variable.outContainerEls.inputEl.value = '';
}

const changeFunction = function(e) {
    now = e.target.value;
    return now;
}

const focusFunction = function(e) {
    previous = e.target.value;
    return previous;

}

const equalFunction = function(e) {
    const newSum = totalSum;

    if (previous === variable.static.GRAMS && now === variable.static.KG) {
        totalSum = newSum / variable.static.METRICMULTIPLIER;
        setTheMainWeightMeasurement(totalSum);
    } else if (previous === variable.static.GRAMS && now === variable.static.TONNES) {
        totalSum = newSum / variable.static.METRICMULTIPLIER;
        setTheMainWeightMeasurement(totalSum);
    } else if (previous === variable.static.GRAMS && now === variable.static.LBS) {
        totalSum = newSum / variable.static.METRICMULTIPLIER * variable.static.LBSMULTIPLIER;
        setTheMainWeightMeasurement(totalSum);
    } else if (previous === variable.static.KG && now === variable.static.TONNES) {
        totalSum = newSum / variable.static.METRICMULTIPLIER;
        setTheMainWeightMeasurement(totalSum);
    } else if (previous === variable.static.KG && now === variable.static.LBS) {
        totalSum = newSum * variable.static.LBSMULTIPLIER;
        setTheMainWeightMeasurement(totalSum);
    } else if (previous === variable.static.KG && now === variable.static.GRAMS) {
        totalSum = newSum * variable.static.METRICMULTIPLIER;
        setTheMainWeightMeasurement(totalSum);
    } else if (previous === variable.static.LBS && now === variable.static.KG) {
        totalSum = newSum / variable.static.LBSMULTIPLIER;
        setTheMainWeightMeasurement(totalSum);
    } else if (previous === variable.static.LBS && now === variable.static.GRAMS) {
        totalSum = newSum / variable.static.LBSMULTIPLIER * variable.static.METRICMULTIPLIER;
        setTheMainWeightMeasurement(totalSum);
    } else if (previous === variable.static.LBS && now === variable.static.TONNES) {
        totalSum = newSum / 2200;
        setTheMainWeightMeasurement(totalSum);
    } else if (previous === variable.static.TONNES && now === variable.static.KG) {
        totalSum = newSum * variable.static.METRICMULTIPLIER;
        setTheMainWeightMeasurement(totalSum);
    } else if (previous === variable.static.TONNES && now === variable.static.GRAMS) {
        totalSum = newSum * variable.static.METRICMULTIPLIER;
        setTheMainWeightMeasurement(totalSum);
    } else if (previous === variable.static.TONNES && now === variable.static.LBS) {
        totalSum = newSum * 2200;
        setTheMainWeightMeasurement(totalSum);
    };
    e
        .target
        .blur();
};

const weightMeasureChoice = function(totalSum, selector) {
    let newTotalSum = 0;

    if (selector.value === variable.leftContainerEls.selectEl.value) {
        newTotalSum = Number(totalSum);
    } else if (selector.value === variable.static.TONNES && variable.leftContainerEls.selectEl.value === variable.static.KG) {
        newTotalSum = Number(totalSum) * variable.static.METRICMULTIPLIER;
    } else if (selector.value === variable.static.LBS && variable.leftContainerEls.selectEl.value === variable.static.KG) {
        newTotalSum = Number(totalSum) / variable.static.LBSMULTIPLIER
    } else if (selector.value === variable.static.GRAMS && variable.leftContainerEls.selectEl.value === variable.static.KG) {
        newTotalSum = Number(totalSum) / variable.static.METRICMULTIPLIER;
    } else if (selector.value === variable.static.KG && variable.leftContainerEls.selectEl.value === variable.static.TONNES) {
        newTotalSum = Number(totalSum) / variable.static.METRICMULTIPLIER;
    } else if (selector.value === variable.static.LBS && variable.leftContainerEls.selectEl.value === variable.static.TONNES) {
        newTotalSum = Number(totalSum) / 2200;
    } else if (selector.value === variable.static.GRAMS && variable.leftContainerEls.selectEl.value === variable.static.TONNES) {
        newTotalSum = Number(totalSum) / variable.static.METRICMULTIPLIER;
    } else if (selector.value === variable.static.KG && variable.leftContainerEls.selectEl.value === variable.static.LBS) {
        newTotalSum = Number(totalSum) * variable.static.LBSMULTIPLIER;
    } else if (selector.value === variable.static.TONNES && variable.leftContainerEls.selectEl.value === variable.static.LBS) {
        newTotalSum = Number(totalSum) * 2200;
    } else if (selector.value === variable.static.GRAMS && variable.leftContainerEls.selectEl.value === variable.static.LBS) {
        newTotalSum = Number(totalSum) / variable.static.METRICMULTIPLIER * variable.static.LBSMULTIPLIER;
    } else if (selector.value === variable.static.TONNES && variable.leftContainerEls.selectEl.value === variable.static.GRAMS) {
        newTotalSum = Number(totalSum) * variable.static.METRICMULTIPLIER;
    } else if (selector.value === variable.static.LBS && variable.leftContainerEls.selectEl.value === variable.static.GRAMS) {
        newTotalSum = Number(totalSum) * 2200;
    } else if (selector.value === variable.static.KG && variable.leftContainerEls.selectEl.value === variable.static.GRAMS) {
        newTotalSum = Number(totalSum) * variable.static.METRICMULTIPLIER;
    }
    return newTotalSum;
};

const dataCollect = function(changeType, valueChange, totalSum, selectorValue) {
    const transaction = {
        number: variable.allTransactions.length + 1,
        id: shortid.generate(),
        product: transactionProductName(),
        marketplace: transactionMarketplace(changeType),
        transactionType: changeType,
        time: dateTime.displayTime(),
        date: dateTime.showTheDate(),
        weight: weightLbsConverter(valueChange, selectorValue),
        measurement: variable.static.LBS,
        stock: weightTotalLbsConverter(totalSum, selectorValue)
    }

    variable
        .allTransactions
        .push(transaction);
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
    console.log(variable.allTransactions);
    return variable.allTransactions;
};

const weightLbsConverter = function(totalSum, selectorValue) {
    let tableTotalSum = 0;

    if (selectorValue === variable.static.LBS) {
        tableTotalSum = totalSum;
    } else if (selectorValue === variable.static.KG) {
        tableTotalSum = totalSum * variable.static.LBSMULTIPLIER;
    } else if (selectorValue === variable.static.TONNES) {
        tableTotalSum = totalSum * 2200;
    } else if (selectorValue === variable.static.GRAMS) {
        tableTotalSum = totalSum / variable.static.METRICMULTIPLIER * variable.static.LBSMULTIPLIER;
    }
    return tableTotalSum;
};

const weightTotalLbsConverter = function(totalSum, selectorValue) {
    let tableTotalSum = 0;

    if ((selectorValue === variable.static.KG || selectorValue === variable.static.TONNES || selectorValue === variable.static.GRAMS || selectorValue === variable.static.LBS) && variable.leftContainerEls.selectEl.value === variable.static.KG) {
        tableTotalSum = totalSum * variable.static.LBSMULTIPLIER;
    } else if ((selectorValue === variable.static.KG || selectorValue === variable.static.LBS || selectorValue === variable.static.GRAMS || selectorValue === variable.static.TONNES) && variable.leftContainerEls.selectEl.value === variable.static.TONNES) {
        tableTotalSum = totalSum * 2200;
    } else if ((selectorValue === variable.static.KG || selectorValue === variable.static.LBS || selectorValue === variable.static.GRAMS || selectorValue === variable.static.TONNES) && variable.leftContainerEls.selectEl.value === variable.static.LBS) {
        tableTotalSum = totalSum;
    } else if ((selectorValue === variable.static.KG || selectorValue === variable.static.LBS || selectorValue === variable.static.GRAMS || selectorValue === variable.static.TONNES) && variable.leftContainerEls.selectEl.value === variable.static.GRAMS) {
        tableTotalSum = totalSum / variable.static.METRICMULTIPLIER * variable.static.LBSMULTIPLIER;
    } else if (selectorValue === variable.static.LBS && variable.leftContainerEls.selectEl.value === variable.static.GRAMS) {
        tableTotalSum = totalSum / variable.static.METRICMULTIPLIER / variable.static.LBSMULTIPLIER;
    }

    return tableTotalSum;

};

const transactionProductName = function () {
    console.log(variable.leftContainerEls.product.value);
    return variable.leftContainerEls.product.value 
}

const transactionMarketplace = function (changeType) {
    if (changeType === 'added') {
        return 'nothing';
    }
    return variable.outContainerEls.marketplace.value 
}


variable.outContainerEls.selectEl.addEventListener('change', () => { variable.outContainerEls.optionDelete.remove() });
variable.leftContainerEls.selectEl.addEventListener('change', () => { variable.leftContainerEls.optionDelete.remove() });
variable.inContainerEls.selectEl.addEventListener('change', () => { variable.inContainerEls.optionDelete.remove() });
variable.tableElements.typeFilter.addEventListener('change', () => { variable.tableElements.optionDelete.remove() });

variable.inContainerEls.buttonEl.addEventListener('click', addButtonChangeRegister);
variable.outContainerEls.buttonEl.addEventListener('click', takeButtonChangeRegister);
variable.leftContainerEls.selectEl.addEventListener('change', changeFunction);
variable.leftContainerEls.selectEl.addEventListener('focus', focusFunction);
variable.leftContainerEls.selectEl.addEventListener('change', equalFunction);
variable.tableElements.filterActivator.addEventListener('click', filter.FilterFunction);
variable.tableElements.filterReset.addEventListener('click', filter.filterReset);
variable.addProductModalEls.closeBtnEl.addEventListener('click', productRegister);
variable.marketplaceContainerEls.btn.addEventListener('click', marketplaceCreate)