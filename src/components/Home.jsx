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
  <div>
    <h1>Welcome to Our Online Library</h1>
    <h2>Browse by Category</h2>
    {categories.map((category) => {
      {
        category.name;
      }
    })}
  </div>;
};
