import { storageContainerEls } from './variables';
let storageLimit = 0;


export function storageLimitChange(event) {
    console.log(event);

    //     if (storageContainerEls.input.value === '') {
    //         alert("Enter the Value");
    //         event.preventDefault()
    //         return false;
    //     };
    storageLimit = Number(storageContainerEls.input.value);
    //     storageContainerEls.input.value = '';
    console.log(storageLimit);
    //     return storageLimit;
    return storageLimit;
}
// console.log(storageLimit);


export const maxStorageFacility = storageLimitChange(),