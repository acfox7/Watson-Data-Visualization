import React from 'react';
import styles from './BookInfoCard.module.css';

function BookInfoCard(props) {
  return (
    <div className={styles.singleBookInfo}>
      <div className={styles.bookImage}>
        <img src={props.imageURL} />
      </div>
      <div className={styles.textInfo}>
        <h4>{props.title}</h4>
        <h6>{props.author}</h6>
      </div>
    </div>
  );
}

export default BookInfoCard;
