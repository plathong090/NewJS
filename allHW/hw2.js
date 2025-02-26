/*
การจัดการคลังหนังสือส่วนตัว

    กำหนดวัตถุ (object) ที่ใช้เก็บข้อมูลเกี่ยวกับคลังหนังสือส่วนตัว โดยวัตถุนี้จะเก็บข้อมูลเกี่ยวกับหนังสือที่คุณมี เช่น ชื่อหนังสือ ผู้แต่ง ปีที่พิมพ์ และสถานะการอ่าน
    ให้เขียนเมธอด (method) สำหรับวัตถุคลังหนังสือ เพื่อให้สามารถจัดการข้อมูลหนังสือได้ดังนี้:

        - `addBook(book)` – เพิ่มหนังสือใหม่เข้าไปในคลัง โดย `book` จะเป็นอ็อบเจ็กต์ที่ประกอบด้วย:
        - `title` (string): ชื่อหนังสือ
        - `author` (string): ชื่อผู้แต่ง
        - `year` (number): ปีที่พิมพ์
        - `isRead` (boolean): สถานะการอ่าน (อ่านแล้วหรือยัง)

        - `removeBook(title)` – ลบหนังสือออกจากคลังตามชื่อหนังสือ หากไม่พบชื่อหนังสือ ไม่ต้องทำอะไร

        - `listBooks()` – แสดงรายชื่อหนังสือทั้งหมดในคลัง โดยสำหรับแต่ละเล่มให้แสดงชื่อหนังสือ ผู้แต่ง ปีที่พิมพ์ และสถานะการอ่าน

        - `getUnreadBooks()` – ส่งคืนอาร์เรย์ของหนังสือทั้งหมดที่ยังไม่ได้อ่าน

*/

const library = {
    books: [],

    addBook: function (book) {
        // TODO: เขียนโค้ดสำหรับเพิ่มหนังสือ
        const check = this.books.find(b => b.title === book.title);
        if (!check) this.books.push(book);
    },

    removeBook: function (title) {
        // TODO: เขียนโค้ดสำหรับลบหนังสือตามชื่อ
        this.books = this.books.filter(b => b.title !== title);
    },

    listBooks: function () {
        // TODO: เขียนโค้ดสำหรับแสดงรายชื่อหนังสือทั้งหมด
        this.books.forEach((b, i) => {
            let check = "";
            if (b.isRead === true) check = "อ่านแล้ว";
            else if (b.isRead === false) check = "ยังไม่ได้อ่าน";
            console.log(`${i + 1}. ชื่อ: ${b.title}, ผู้แต่ง: ${b.author}, ปีที่พิมพ์: ${b.year}, สถานะ: ${check}`);
        })
    },

    getUnreadBooks: function () {
        // TODO: เขียนโค้ดสำหรับส่งคืนหนังสือที่ยังไม่ได้อ่าน
        return this.books.filter(b => !b.isRead);
    },

    countBooks: function () {
        return this.books.length;
    },

    findBook: function (title) {
        const check = this.books.find(b => b.title === title);
        if (check) return console.log(check);
        else return console.log(null);
    }
};

library.addBook({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    isRead: true
});
library.addBook({
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    isRead: false
});
library.addBook({
    title: "1984",
    author: "George Orwell",
    year: 1949,
    isRead: true
});

library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
3. ชื่อ: 1984, ผู้แต่ง: George Orwell, ปีที่พิมพ์: 1949, สถานะ: อ่านแล้ว */

console.log(library.getUnreadBooks());
// Output: [ { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false } ]

library.removeBook("1984");
library.listBooks();
/* Output:
ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
*/

console.log("จำนวนหนังสือทั้งหมด", library.countBooks());

library.findBook("1984");
library.findBook("To Kill a Mockingbird");

module.exports = library;