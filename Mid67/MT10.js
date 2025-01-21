function isValidIP(data) {
    let ipv4 = data.split('.');
    if (ipv4.length == 4) {
        for (let item of ipv4) {
            let number = parseInt(item);
            if (number > 255 || number < 0) {
                return false;
            }
            else if (item.length > 1) {
                if (item[0] == '0') {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}

console.log(isValidIP(" 1.2.3.4 "));
console.log(isValidIP(" 1.2.3 "));
console.log(isValidIP(" 1.2.3.4.5 "));
console.log(isValidIP("1 23.45.67.89 "));
console.log(isValidIP(" 123.456.78.90 "));
console.log(isValidIP(" 123.045.067.089 "));