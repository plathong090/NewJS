/*
    ให้เขียน function เพื่อรับค่า 
    input -> ข้อความ
    type  -> ประเภทที่จะให้นับ 
        type = w ให้นับจำนวนคำ
        type = c ให้นับจำนวนตัวอักษร (ไม่รวมช่องว่าง)
        type = v ให้นับจำนวนสระ 

    condition
    ✔ should return the correct word count for 'Hello world!'
    ✔ should return the correct character count for 'Hello world!'
    ✔ should return the correct vowel count for 'Hello world!'
    ✔ should return 0 for an empty string when counting words
    ✔ should return 0 for an empty string when counting characters
    ✔ should return 0 for an empty string when counting vowels
    ✔ should throw an error for an invalid parameter
    ✔ should handle strings with only spaces for word count
    ✔ should handle strings with only spaces for character count
    ✔ should handle strings with only vowels
*/

const isEmpty = (string) => {
    return string.includes(' ') ? true : false;
}

function countString(input, type) {

    //ตรวจสอบค่า
    if (typeof input !== 'string' || (type !== 'w' && type !== 'c' && type !== 'v')) {
        throw new Error('Invalid parameter');
    }

    if (input.trim() === '') {
        return 0;
    }

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
}

// Example usage
console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8

//module.exports = countString;