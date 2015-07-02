function clone(object) {
    return JSON.parse(JSON.stringify(object));
}

function leadingZero(number, length) {
    number = String(number);
    return '000000000'.substring(0, length - number.length) + number;
}
