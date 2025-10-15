// ------------------------------------
// Task 1: MongoDB Setup and Insert Data
// ------------------------------------

// Switch to your bookstore database
use('plp_bookstore');

// Insert 10 book documents into the "books" collection
db.books.insertMany([
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 12.99,
    in_stock: true,
    pages: 208,
    publisher: "HarperCollins"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    published_year: 2018,
    price: 16.99,
    in_stock: true,
    pages: 320,
    publisher: "Penguin"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 18.99,
    in_stock: false,
    pages: 448,
    publisher: "Crown"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    published_year: 2011,
    price: 14.99,
    in_stock: true,
    pages: 336,
    publisher: "Currency"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    published_year: 2016,
    price: 13.5,
    in_stock: true,
    pages: 304,
    publisher: "Grand Central"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 15.99,
    in_stock: false,
    pages: 352,
    publisher: "Random House"
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    genre: "Spirituality",
    published_year: 1997,
    price: 10.99,
    in_stock: true,
    pages: 229,
    publisher: "New World Library"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    published_year: 1997,
    price: 9.99,
    in_stock: true,
    pages: 207,
    publisher: "Plata Publishing"
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    genre: "Self-Help",
    published_year: 2016,
    price: 12.5,
    in_stock: true,
    pages: 224,
    publisher: "HarperOne"
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Motivational",
    published_year: 1937,
    price: 11.0,
    in_stock: false,
    pages: 238,
    publisher: "The Ralston Society"
  }
]);

print("Successfully inserted 10 books into plp_bookstore database");
