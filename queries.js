// ------------------------------------
// Task 2: Basic CRUD Operations
// ------------------------------------

// Switch to the database
use('plp_bookstore');

// a) Find all books in a specific genre (example: Self-Help)
print("\n--- Books in the Self-Help genre ---");
db.books.find({ genre: "Self-Help" }).pretty();

// b) Find books published after a certain year (example: after 2015)
print("\n--- Books published after 2015 ---");
db.books.find({ published_year: { $gt: 2015 } }).pretty();

// c) Find books by a specific author (example: James Clear)
print("\n--- Books by James Clear ---");
db.books.find({ author: "James Clear" }).pretty();

// d) Update the price of a specific book (example: “The Alchemist”)
print("\n--- Updating price of The Alchemist ---");
db.books.updateOne({ title: "The Alchemist" }, { $set: { price: 14.99 } });

// e) Delete a book by its title (example: “Think and Grow Rich”)
print("\n--- Deleting the book Think and Grow Rich ---");
db.books.deleteOne({ title: "Think and Grow Rich" });


// ------------------------------------
// Task 3: Advanced Queries
// ------------------------------------

// a) Find books that are both in stock and published after 2010
print("\n--- Books in stock and published after 2010 ---");
db.books.find({ in_stock: true, published_year: { $gt: 2010 } }).pretty();

// b) Use projection to return only title, author, and price
print("\n--- Books with only title, author, and price ---");
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).pretty();

// c) Sort books by price (ascending)
print("\n--- Books sorted by price (ascending) ---");
db.books.find().sort({ price: 1 }).pretty();

// d) Sort books by price (descending)
print("\n--- Books sorted by price (descending) ---");
db.books.find().sort({ price: -1 }).pretty();

// e) Pagination - show 5 books per page
print("\n--- Page 1 (first 5 books) ---");
db.books.find().limit(5).pretty();

print("\n--- Page 2 (next 5 books) ---");
db.books.find().skip(5).limit(5).pretty();


// ------------------------------------
// Task 4: Aggregation Pipelines
// ------------------------------------

// a) Average price of books by genre
print("\n--- Average book price by genre ---");
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
]);

// b) Find the author with the most books
print("\n--- Author with the most books ---");
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]);

// c) Group books by publication decade and count them
print("\n--- Number of books by decade ---");
db.books.aggregate([
  { $project: { decade: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } } },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]);


// ------------------------------------
// Task 5: Indexing
// ------------------------------------

// a) Create an index on the title field
print("\n--- Creating index on title ---");
db.books.createIndex({ title: 1 });

// b) Create a compound index on author and published_year
print("\n--- Creating compound index on author and published_year ---");
db.books.createIndex({ author: 1, published_year: -1 });

// c) Use explain() to show performance improvement
print("\n--- Using explain() to check index efficiency ---");
db.books.find({ title: "The Alchemist" }).explain("executionStats");

print("\n All queries executed successfully!");
