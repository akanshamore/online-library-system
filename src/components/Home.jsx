import { useSelector } from "react-redux";
import "../components/Home.css";
import { Link } from "react-router-dom";
import { categories } from "../utils/constants";
import "./Home.css";

const Home = () => {
  const myBooks = useSelector((state) => state.books.myBooks);
  const popularBooks = myBooks.filter((book) => book.rating >= 8);

  return (
    <div className="home-container">
      <h1 className="welcome-title">Welcome to my Online Library</h1>

      <div className="categories-section">
        <h3>Categories</h3>
        <div className="categories-container">
          {categories.map((category) => (
            <span key={category} className="category">
              {category}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3>Popular Books</h3>
        <div className="popular-books-grid">
          {popularBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h2 className="book-title">{book.title}</h2>
              <p className="book-category">{book.category}</p>
              <p className="book-author">{book.author}</p>
              <p className="book-description">{book.description}</p>
              <Link to={`/books/${book.id}`} className="view-details-link">
                View more Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
