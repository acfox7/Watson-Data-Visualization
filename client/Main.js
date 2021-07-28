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
            title={book.title}
            imageURL={book.imageURL}
          />
        );
      })
    ) : (
      <div id="Loading">
        <h1>Book Data Loading ...</h1>
      </div>
    );
    return <div id="mainContainer">{toRender}</div>;
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
