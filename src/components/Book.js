import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/actionTypes';

const Book = (props) => {
  const {
    id, name, author, category, percent, chapter,
  } = props;

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book" key={id}>
      <div className="bookName">
        <p className="category">{category}</p>
        <h2 className="bookName">{name}</h2>
        <p className="author">{author}</p>
        <ul className="actions">
          <li className="singleAction">
            <button type="button" className="comments">Comments</button>
          </li>
          <li className="singleAction">
            <button type="button" className="remove" onClick={deleteHandler}>Remove</button>
          </li>
          <li className="singleAction">
            <button type="button" className="edit">Edit</button>
          </li>
        </ul>
      </div>
      <div className="completed">
        <div className="icon-complete" />
        <div className="percent-complete">
          <p className="percent">{percent}</p>
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
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
