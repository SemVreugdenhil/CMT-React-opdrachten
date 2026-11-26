import Book from "./book";
import { useState } from "react";
import Header from "./Header";
import BookCounter from "./BookCounter";

const Booklist = () => {
  const [books, setBooks] = useState([
    {
      title: "Interesting Facts For Curious Minds",
      author: "Jordan Moore",
      img: "/images/book-1.png",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      img: "/images/book-2.png",
    },
    {
      title: "Fairy Tale",
      author: "Stephen King",
      img: "/images/book-3.png",
    },
    
  ]);
  return (
    <>
      <Header />
    <BookCounter aantal={books.length}/>
      <section>
        {books.map((book) => (
          <Book title={book.title} author={book.author} img={book.img} />
        ))}
      </section>
    </>
  );
};

export default Booklist;
