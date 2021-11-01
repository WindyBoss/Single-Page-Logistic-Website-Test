import * as variable from './variables';
const Joi = require('joi');


// export const validateTheTake = function(value, event) {
//     if (isNaN(value) || value < 0) {
//         alert("Input not valid");
//         event.preventDefault()
//         return false;
//     } else if (variable.inContainerEls.selectEl.value === 'empty' || variable.leftContainerEls.selectEl.value === 'empty') {
//         alert("Choose the measurements");
//         event.preventDefault()
//         return false;
//     }

//         if (
//         isNaN(totalSum) ||
//         variable.inContainerEls.selectEl.value === 'empty' ||
//         variable.inContainerEls.inputEl.value === 'empty' ||
//         variable.leftContainerEls.selectEl.value === 'empty'
//     ) {
//         event.preventDefault();
//         return false;
//     };
// };

// export const validateTheAdd = function(value, event) {
//     if (variable.inContainerEls.selectEl.value === 'empty' || variable.leftContainerEls.selectEl.value === 'empty') {
//         alert("Choose the measurements");
//         event.preventDefault();
//         return false;
//     };
//     if (isNaN(value) || value < 1) {
//         alert("Input not valid");
//         event.preventDefault();
//         return false;
//     }
//     else if (value > storageMax) {
//         alert("More than storage can take");
//     }
// }

// export const validateTheAddJoi = Joi.number().max(storageMax).min(0).required();

// export const productNameValidation = Joi.string().max(25).min(3).required();