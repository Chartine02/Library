var library = [
    {
        title: "Digital Fortes",
        author: "Dan Brown",
        availability:true,
    },
    {
        title: "LOng EAgle",
        author: "unkown",
        availability:false,
    },
    {
        title: "Atomic Habits",
        author: "James clear",
        availability:false,
    }
];

const addBooks = (book) => {
    console.log(library.length)
    library.push(book)
    console.log(library.length)
};