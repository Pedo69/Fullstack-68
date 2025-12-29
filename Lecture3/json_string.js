const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: false
};
bookJSON = JSON.stringify(book);
console.log(bookJSON);
console.log(typeof bookJSON);

const recive  = JSON.parse(bookJSON);
console.log(recive);
console.log(typeof recive);
const title = recive.title;
console.log(title);