import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actionTypes';

const AddBook = () => {
  const dispatch = useDispatch();

  const addBooks = (event) => {
    event.preventDefault();
    const { name, category } = event.target.elements;

    const newBook = {
      name: name.value,
      // author: author.value,
      category: category.value,
      // percent: percent.value,
      // chapter: chapter.value,
    };

    dispatch(addBook(newBook));
  };

  return (
    <div className="AddBook">
      <h2>Register Book</h2>
      <form className="add-new-book" onSubmit={addBooks}>
        <input type="text" id="name" placeholder="Book Title" />
        <select id="category">
          <option>Category</option>
          <option>Action</option>
          <option>Science Fiction</option>
          <option>Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
