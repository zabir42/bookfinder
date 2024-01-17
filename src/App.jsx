import React, { useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar";
import BookGrid from "./components/book/BookGrid.jsx";

export default function App() {
  // ! initial state
  const initialDataArray = [
    {
      id: crypto.randomUUID(),
      thumbnail: "img1",
      bookName: "JavaScript Basics",
      writter: "John Doe",
      price: "60$",
      review: "4 (star)",
      isFavorite: false,
      year: 2020,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img2",
      bookName: "Advanced JavaScript",
      writter: "Jane Smith",
      price: "45$",
      review: "5 (star)",
      isFavorite: false,
      year: 2021,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img3",
      bookName: "React Fundamentals",
      writter: "Alex Johnson",
      price: "75$",
      review: "4.5 (star)",
      isFavorite: false,
      year: 2021,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img4",
      bookName: "Node.js Mastery",
      writter: "Samuel Brown",
      price: "55$",
      review: "4.2 (star)",
      isFavorite: false,
      year: 2022,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img5",
      bookName: "Python for Beginners",
      writter: "Emily White",
      price: "40$",
      review: "4.8 (star)",
      isFavorite: false,
      year: 2020,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img6",
      bookName: "Angular in Depth",
      writter: "Michael Green",
      price: "65$",
      review: "4.7 (star)",
      isFavorite: false,
      year: 2022,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img7",
      bookName: "Vue.js Essentials",
      writter: "Sophie Taylor",
      price: "50$",
      review: "4.4 (star)",
      isFavorite: false,
      year: 2021,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img8",
      bookName: "CSS Mastery",
      writter: "Daniel Clark",
      price: "70$",
      review: "4.6 (star)",
      isFavorite: false,
      year: 2020,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img9",
      bookName: "HTML5 and Beyond",
      writter: "Liam Anderson",
      price: "48$",
      review: "4.3 (star)",
      isFavorite: false,
      year: 2022,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img10",
      bookName: "Full Stack Development",
      writter: "Ella Martinez",
      price: "80$",
      review: "4.9 (star)",
      isFavorite: false,
      year: 2020,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img11",
      bookName: "Java Programming",
      writter: "Oliver Wilson",
      price: "55$",
      review: "4.1 (star)",
      isFavorite: false,
      year: 2022,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img12",
      bookName: "Web Design Principles",
      writter: "Grace Turner",
      price: "65$",
      review: "4.7 (star)",
      isFavorite: false,
      year: 2021,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img13",
      bookName: "Data Science Essentials",
      writter: "Isaac Miller",
      price: "75$",
      review: "4.5 (star)",
      isFavorite: false,
      year: 2022,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img14",
      bookName: "Machine Learning Basics",
      writter: "Victoria Brooks",
      price: "90$",
      review: "4.8 (star)",
      isFavorite: false,
      year: 2020,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img15",
      bookName: "Responsive Web Development",
      writter: "Oscar Evans",
      price: "58$",
      review: "4.3 (star)",
      isFavorite: false,
      year: 2021,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img16",
      bookName: "Cybersecurity Fundamentals",
      writter: "Mia Foster",
      price: "85$",
      review: "4.6 (star)",
      isFavorite: false,
      year: 2022,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img17",
      bookName: "UX/UI Design Principles",
      writter: "Nathan Reed",
      price: "50$",
      review: "4.2 (star)",
      isFavorite: false,
      year: 2020,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img18",
      bookName: "Mobile App Development",
      writter: "Ava Mitchell",
      price: "70$",
      review: "4.9 (star)",
      isFavorite: false,
      year: 2021,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img19",
      bookName: "DevOps for Beginners",
      writter: "Lucas Turner",
      price: "55$",
      review: "4.4 (star)",
      isFavorite: false,
      year: 2022,
    },
    {
      id: crypto.randomUUID(),
      thumbnail: "img20",
      bookName: "Agile Software Development",
      writter: "Sophia Davis",
      price: "63$",
      review: "4.7 (star)",
      isFavorite: false,
      year: 2020,
    },
  ];

  // ! state
  const [bookData, setBookData] = useState(initialDataArray);
  const [sortCriteria, setSortCriteria] = useState("");

  // ! isFavorite functionality
  function handleFav(bookId) {
    console.log("click");
    setBookData(
      bookData.map((book) => {
        if (book.id === bookId) {
          return { ...book, isFavorite: !book.isFavorite };
        } else {
          return book;
        }
      }),
    );
  }

  // ! search functionality
  function handleSearch(searchTerm) {
    console.log(searchTerm);

    const filtered = initialDataArray.filter((book) =>
      book.bookName.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setBookData([...filtered]);
  }

  // ! sort functionality
  const sortBooks = (books, criteria) => {
    switch (criteria) {
      case "name_asc":
        return books.sort((a, b) => a.bookName.localeCompare(b.bookName));
      case "name_desc":
        return books.sort((a, b) => b.bookName.localeCompare(a.bookName));
      case "year_asc":
        return books.sort((a, b) => a.year - b.year);
      case "year_desc":
        return books.sort((a, b) => b.year - a.year);
      default:
        return books;
    }
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    const sortedData = sortBooks([...bookData], criteria);
    setBookData(sortedData);
  };

  return (
    <div className="my-10 lg:my-14">
      <Navbar />
      <Header onSearch={handleSearch} onSort={handleSort}  />
      <BookGrid books={bookData} onFav={handleFav} />
      <Footer />
    </div>
  );
}
