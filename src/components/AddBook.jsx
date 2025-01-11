import { useState } from "react";
import "./AddBook.css";
import { categories } from "../utils/constants";
import { addBook } from "../redux/slices/booksSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
export const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [bookDetails, setBookDetails] = useState({
    id: "",
    title: "",
    author: "",
    description: "",
    rating: "",
    category: categories[0],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!bookDetails.title.trim()) newErrors.title = "Title is required";
    if (!bookDetails.author.trim()) newErrors.author = "Author is required";
    if (!bookDetails.description.trim())
      newErrors.description = "Description is required";

    if (!bookDetails.rating.trim()) newErrors.rating = "Rating is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newBook = {
        ...bookDetails,
        id: Date.now(),
      };
      dispatch(addBook(newBook));
      navigate("/browse");
    }
  };
  return (
    <div className="add-book-container">
      <h1 className="add-book-title">Add New Book</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            name="title"
            value={bookDetails.title}
            onChange={handleChange}
            className={errors.title ? "error" : ""}
          />
          {errors.title && (
            <span className="error-message">{errors.title}</span>
          )}
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            placeholder="Enter Author"
            name="author"
            value={bookDetails.author}
            onChange={handleChange}
            className={errors.author ? "error" : ""}
          />
          {errors.author && (
            <span className="error-message">{errors.author}</span>
          )}
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={bookDetails.category}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Rating</label>
          <input
            type="text"
            placeholder=" Enter Rating"
            name="rating"
            onChange={handleChange}
            className={errors.rating ? "error" : ""}
          />
          {errors.rating && (
            <span className="error-message">{errors.rating}</span>
          )}
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={bookDetails.description}
            onChange={handleChange}
            className={errors.description ? "error" : ""}
          />
          {errors.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Add Book
        </button>
      </form>
    </div>
  );
};
