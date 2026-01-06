const library = {
    books: [],

    addBook: function (book) {
        for (const check_book of this.books) {
            if (book.title === check_book.title) {
                console.log("This book is already in the library")
                return
            }
        }
        this.books.push(book)
    },

    removeBook: function (title) {
        let found = false
        for (let i= 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                this.books.splice(i, 1)
                found = true
                break
            }       
        }
        if (!found) {
            console.log("can't find book you want to delete")
        }
    },

    listBooks: function () {
        this.books.forEach((book) => {
            console.log([book])
        });
    },

    getUnreadBooks: function () {
        return this.books.filter(book => !book.isRead);
    }
};

library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false });
library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true });

library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
3. ชื่อ: 1984, ผู้แต่ง: George Orwell, ปีที่พิมพ์: 1949, สถานะ: อ่านแล้ว
*/

console.log(library.getUnreadBooks());
// Output: [ { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false } ]

library.removeBook("1984");
library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
*/


module.exports = library;
