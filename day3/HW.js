const isEmpty = (string) => {
    return string.includes(' ') ? true : false;
}

function countString(input, type) {

    if (type === 'w') {
        //ตัดช่องว่างและแยกคำ
       
        return input.trim().split(/\s+/).length || 0;

    } else if (type === 'c') {
        //นับ char
        return input.replace(/\s+/g , '').length;

    } else if (type === 'v') {
        //นับสระ
        const vowels = 'aeiouAEIOU';
        let count = 0;

        for (let vowel of input) {
            if (vowels.includes(vowel)) {
                count++;
            }
        }
        return count;
    }
  

    

    //ค่าว่าง
  

    //ตรวจสอบค่า
    if (typeof input !== 'string' || (type !== 'w' && type !== 'c' && type !== 'v' )) {
        throw new Error('Invalid Input');
    }

    

}

// Example usage
console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8

module.exports = countString;
