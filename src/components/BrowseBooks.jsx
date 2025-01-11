import { useSelector } from "react-redux";
import { categories } from "../utils/constants";
import { Link, useParams } from "react-router-dom";
import "./BrowseBooks.css";
import { useState } from "react";

const BrowseBooks = () => {
  const { category } = useParams();

  const myBooks = useSelector((state) => state.books.myBooks);
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchText("");
  };

  // Filter books by category and search term
  const filteredBooks = myBooks.filter((book) => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-container">
      <h1 className="browse-title">Browse Books</h1>
      <div className="filters-container">
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search by title or author..."
            onChange={(e) => handleSearchText(e)}
            value={searchText}
          />
          <button className="clear-button" onClick={handleClearSearch}>
            Clear
          </button>
        </div>

        <div className="categories-section">
          <h2 className="categories-title">Categories</h2>
          <div className="categories-list">
            <Link
              to="/browse"
              className={`category-tag ${!category ? "active" : ""}`}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                to={`/browse/${cat}`}
                className={`category-tag ${category === cat ? "active" : ""}`}
                key={cat}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="books-grid">
        {filteredBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <Link to={`/books/${book.id}`} className="view-more-link">
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
