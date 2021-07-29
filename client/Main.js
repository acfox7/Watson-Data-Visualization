import React from 'react';
import { connect } from 'react-redux';
import BookInfoCard from './BookInfoCard';
import { fetchBooks } from './store/books';
import BarGraph from './BarGraph';
import styles from './Main.module.css';

class Main extends React.Component {
  componentDidMount() {
    this.props.getAllBooks();
  }
  render() {
    const toRender = this.props.books.length ? (
      this.props.books.map((book) => {
        return (
          <BookInfoCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            imageURL={book.imageURL}
          />
        );
      })
    ) : (
      <div id="Loading">
        <h1>Book Data Loading ...</h1>
      </div>
    );
    return (
      <React.Fragment>
        <div id={styles.mainContainer}>
          <h2>
            Select a work of literature below to see an analysis of the work's
            sentiments and emotions.
          </h2>
          <h4>
            Built Utilizing IBM Watson's Natural Language Understanding and
            Processing Service.
          </h4>
        </div>
        <div id={styles.mainContainer}>{toRender}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBooks: () => dispatch(fetchBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
