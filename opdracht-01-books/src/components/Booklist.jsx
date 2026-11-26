import Book from "./book";
import Header from "./Header";

const Booklist = () => {
  return (
    <>
      <Header />

      <section>
        <Book
          title="Interesting Facts For Curious Minds"
          author="Jordan Moore"
          img="/images/book-1.png"
        />
        <Book
          title="Atomic Habits"
          author="James Clear"
          img="/images/book-2.png"
        />
        <Book
          title="Fairy Tale"
          author="Stephen King"
          img="/images/book-3.png"
        />
      </section>
    </>
  );
};

export default Booklist;
