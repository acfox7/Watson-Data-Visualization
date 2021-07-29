import React from 'react';
import { connect } from 'react-redux';
import { fetchBook } from './store/singleBook';
import BarGraph from './BarGraph';
import styles from './SingleBookPage.module.css';

class SingleBookPage extends React.Component {
  constructor(props) {
    super(props);
    this.bookId = this.props.match.params.id;
  }
  componentDidMount() {
    this.props.getSingleBook(this.bookId);
  }
  render() {
    return (
      <div>
        <div>
          <h1>Book Title</h1>
          <h2>Book Author</h2>
          <p>Link to Source</p>
        </div>
        <div>
          <p>Graphs Will Go here</p>
        </div>
      </div>
    );

    // <h1>Page Is Rendering with book id {this.bookId}</h1>;
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.book,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleBook: (bookId) => dispatch(fetchBook(bookId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBookPage);
