import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaCircleNotch } from 'react-icons/fa';
import { removeBook } from '../redux/books/books';
import './Book.css';

const Book = (props) => {
  const {
    id, title, author, category, percent, chapter,
  } = props;

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book" key={id}>
      <div className="bookNames">
        <p className="category">{category}</p>
        <h2 className="bookName">{title}</h2>
        <p className="author">{author}</p>
        <ul className="actions">
          <li className="singleAction right">
            <button type="button" className="comments btn">Comments</button>
          </li>
          <li className="singleAction right">
            <button type="button" className="remove btn" onClick={deleteHandler}>Remove</button>
          </li>
          <li className="singleAction">
            <button type="button" className="edit btn">Edit</button>
          </li>
        </ul>
      </div>
      <div className="main-completed">
        <div className="icon-complete">
          <FaCircleNotch className="main-icon" />
        </div>
        <div className="percent-complete">
          <p className="percent">
            98%
            {percent}
          </p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="update">
        <p className="currentChapter">Current Chapter</p>
        <p className="chapter">{chapter}</p>
        <button type="button" className="updateProcess">UPDATE PROCESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
