import React from 'react';

const AddBook = () => (
  <div className="AddBook">
    <h2>Register Book</h2>
    <form className="add-new-book">
      <input type="text" name="title" placeholder="Book Title" />
      <select>
        <option>Category</option>
        <option>Action</option>
        <option>Science Fiction</option>
        <option>Economy</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
