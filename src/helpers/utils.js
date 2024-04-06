export function getProperty(obj,property) {
    
    for (let key in obj) {
  
        if (typeof obj[key] === 'object' && obj[key] !== null) {

            if (obj[key].hasOwnProperty(property)) {
                return obj[key].official;
            } else {
                return obj[key].name
            }
        }
    }
    return null;
}

export function getLanguages(objLng) {
    const lng = []
    for(let key in objLng) {
        lng.push(objLng[key]);
    }
    return lng;
}

export function formatNumber(number) {
    let formattedNumber = number.toString();

    formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formattedNumber;
}