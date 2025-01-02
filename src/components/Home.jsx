import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Fiction", path: "fiction" },
  { id: 2, name: "Non-Fiction", path: "non-fiction" },
  { id: 3, name: "Science Fiction", path: "sci-fi" },
  { id: 4, name: "Mystery", path: "mystery" },
  { id: 5, name: "Biography", path: "biography" },
];

const popularBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    category: "Science Fiction",
  },
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
  },
  {
    id: 4,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    category: "Mystery",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Our Online Library</h1>
        <p>Discover thousands of books at your fingertips</p>
      </header>

      <section className="categories-section">
        <h2>Browse by Category</h2>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              to={`/category/${category.path}`}
              key={category.id}
              className="category-card"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="popular-books-section">
        <h2>Popular Books</h2>

        <div className="books-grid">
          {popularBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.imageUrl} alt={book.title} />
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <span className="category-tag">{book.category}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
