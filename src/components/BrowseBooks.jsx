import { useSelector } from "react-redux";
import { categories } from "../utils/constants";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export const BrowseBooks = () => {
  const { path } = useParams();
  console.log("path is", path);
  const category = categories.find((cat) => cat.path === path).name;
  console.log(category);
  const myBooks = useSelector((state) => state.books.myBooks);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(myBooks);

  // Filter books by category and search term
  const filteredBooks = myBooks.filter((book) => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  console.log("filteredBooks", filteredBooks);

  return (
    <div className="browse-books-container">
      <h2>Browse Books</h2>

      {/* Categories Navigation */}
      <div className="categories-nav">
        <Link to="/browse">All Books</Link>
        {categories.map((cat) => (
          <Link key={cat.id} to={`/browse/${cat.path}`}>
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Books Grid */}
      <div className="books-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <Link to={`/book/${book.id}`} className="view-details-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
