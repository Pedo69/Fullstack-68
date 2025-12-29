const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: false,
    
    checkout: function() {
        this.isAvailable = false;
    },
    checkin: function() {
        this.isAvailable = true;
    }
};
console.log(typeof book);
console.log(book);
console.log(book.title);
console.log(book.isAvailable);
book.checkout();
console.log('หลังยืมหนังสือ:', book.isAvailable);
book.checkin();
console.log('หลังคืนหนังสือ:', book.isAvailable);