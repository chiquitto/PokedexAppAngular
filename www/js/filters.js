app.filter('leadingZero', function () {
    return function (number, length) {
        number = String(number);
        return '000000000'.substring(0, length - number.length) + number;
    };
});