import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import './AllBook.css';

const AllBooks = () => {
  const { books, loading } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let content = null;
  if (loading) {
    content = <h2>Loading...</h2>;
  } else {
    content = books.map((book) => (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        category={book.category}
        percent={book.percent}
        chapter={book.chapter}
      />
    ));
  }

  return (
    <div className="allbook">
      {content}
    </div>
  );
};

export default AllBooks;
