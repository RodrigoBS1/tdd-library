const library = require("./library");

describe("Library", () => {
    let books;
    const newBooks = [
        { name: "To Kill a Mockingbird", author: "Harper Lee" },
        { name: "1984", author: "George Orwell" },
        { name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    ];
    beforeEach(() => {
        books = new ListBooks();
    });
    test("should be able to have Books be added to its inventory", () => {
        expect(books.displayContents()).toEqual([]);
    });

    test("should be able to be stocked with one type of item", () => {
        books.stock([{ name: "To Kill a Mockingbird", author: "Harper Lee" }]);

        expect(books.contents).toEqual([{ name: "To Kill a Mockingbird", author: "Harper Lee" }]);
    });

    test("should be able to accept books (accept returned books from patrons)", () => {
        books.stock(newBooks);
        expect(books.contents).toEqual(newBooks);
    });

    test("should be able to issue() (check out to patrons) books", () => {
        books.stock(newBooks);
        books.purchase("Harry Poter");

        expect(books.contents).toEqual([
            { name: "To Kill a Mockingbird", author: "Harper Lee" },
            { name: "1984", author: "George Orwell" },
            { name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        ]);
    });

    test("should be able to display an accurate inventory of its books at any time", () => {
        books.stock(newInventory);
        books.outOfStock("Red Onion");

        expect(books.contents).toEqual([
            { name: "To Kill a Mockingbird", author: "Harper Lee" },
            { name: "1984", author: "George Orwell" },
            { name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        ]);
    });

});