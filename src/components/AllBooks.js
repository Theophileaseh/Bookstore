import React from 'react';
import Book from './Book';

const AllBooks = () => {
  const books = [
    {
      id: 1,
      name: 'The Hunger Games',
      category: 'Action',
      author: 'Anna Frank',
      percent: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      name: 'Dune',
      category: 'Science Fiction',
      author: 'Suzan',
      percent: '8%',
      chapter: 'Chapter 3, "A lesson Learned"',
    },
    {
      id: 3,
      name: 'Capital In The Twenty-First Century',
      category: 'Economy',
      author: 'Robert H.',
      percent: '0%',
      chapter: 'Introduction',
    },
  ];
  return (
    <div className="allbooks">
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          name={book.name}
          author={book.author}
          category={book.category}
          percent={book.percent}
          chapter={book.chapter}
        />
      ))}
    </div>
  );
};

export default AllBooks;
