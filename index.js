var library = [
    {
        title: "Digital Fortes",
        author: "Dan Brown",
        availability:true,
        holder:""
    },
    {
        title: "LOng EAgle",
        author: "unkown",
        availability:false,
        holder:"Jane"
    },
    {
        title: "Atomic Habits",
        author: "James clear",
        availability:false,
        holder:"Aline"
    },
    {
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        availability: true,
        holder: ''
    },
];

const addBooks = (book) => {
    console.log(library.length)
    library.push(book)
    console.log(library.length)
};
addBooks()


// const listOfAvailableBooks = () => {
//     var available = [];
//     library.forEach(book => {
//         if (book.availability === true) {
//             available.push(book);
//         }
//     });
//     console.log(available);
// };
// listOfAvailableBooks();

// const listAllAvailableBooks = () => {
//     var available = library.filter(book => book.availability === true);
//     console.log(available);
// }

// const listAllAvailableBooks = () => {
//     var available = [];
//     for (var i = 0; i < library.length; i++) {
//         if (library[i].availability === true) {
//             available.push(library[i]);
//         }
//     }
//     console.log(available);
// };

// listAllAvailableBooks();

// const borrow = (bookName, holder) => { 
//     // Check whether the book is available 
//     var availableBook = library.find(book => book.title === bookName && book.availability === true);
//     console.log(availableBook);
//     if (!availableBook) {
//         console.log('That book is not available');
//         return;
//     }

//     var theAvailableBook = {};
//     library.forEach(book => {
//         if (book.title === bookName && book.availability === true) {
//             theAvailableBook = book;
//             book.availability = false;
//             book.holder = holder;
//             console.log("The book is available for borrowing!");
//             return;
//         }
//     });

//     console.log(theAvailableBook);

//     if (theAvailableBook.availability || theAvailableBook.availability === false) {
//         console.log(library);
//     } else {
//         console.log('That book is not available');
//     }
// }

// const returnBook = (bookName, holder) => {
//     var borrowedBook = library.find(book => book.title === bookName && book.availability === false && holder === holder);
//     console.log(borrowedBook);
//     if (!borrowedBook) {
//         console.log('The book was not borrowed');
//         return;
//     }
//     var theReturnedBook = {};
//     library.forEach(book => {
//         if (book.title === bookName && book.availability === false) {
//             theReturnedBook = book;
//             book.availability = true;
//             book.holder = '';
//             console.log("The book has been returned, Sucessfully!");
//             return;
//         }
//     });
//     console.log(theReturnedBook)

// };

// returnBook("Atomic Habits", "Aline" )

// borrow('Atomic Habits', 'John Smith');