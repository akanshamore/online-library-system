import { useSelector } from "react-redux";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import "./BookDetails.css";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const myBooks = useSelector((state) => state.books.myBooks);
  const selectedBook = myBooks.find((book) => book.id === id);

  return (
    <div className="book-details-container">
      <h1 className="book-title">{selectedBook.title}</h1>
      <p className="book-info">
        <strong>Author:</strong> {selectedBook.author}
      </p>
      <p className="book-info">
        <strong>Category:</strong> {selectedBook.category}
      </p>
      <p className="book-info">
        <strong>Rating:</strong> {selectedBook.rating}
      </p>
      <p className="book-info">
        <strong>Description:</strong> {selectedBook.description}
      </p>

      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default BookDetails;
