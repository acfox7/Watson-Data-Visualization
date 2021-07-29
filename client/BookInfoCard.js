import React from 'react';
import styles from './BookInfoCard.module.css';
import { Link } from 'react-router-dom';

function BookInfoCard(props) {
  return (
    <div className={styles.singleBookInfo}>
      <Link to={`/book/${props.id}`} className={styles.bookImage}>
        <img src={props.imageURL} />
      </Link>
      <div className={styles.textInfo}>
        <Link to={`/book/${props.id}`} className={styles.textColor}>
          <h4>{props.title}</h4>
        </Link>
        <h5>{props.author}</h5>
      </div>
    </div>
  );
}

export default BookInfoCard;
