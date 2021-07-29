import React from 'react';
import { connect } from 'react-redux';
import { fetchBook } from './store/singleBook';
import { fetchWatsonData } from './store/watsonData';
import BarGraph from './BarGraph';
import styles from './SingleBookPage.module.css';

class SingleBookPage extends React.Component {
  constructor(props) {
    super(props);
    this.bookId = this.props.match.params.id;
  }
  componentDidMount() {
    this.props.getSingleBook(this.bookId);
    this.props.getWatsonData(this.bookId);
  }
  render() {
    const toRender = this.props.book.id ? (
      <div>
        <div className={styles.bookInfoContainer}>
          <div className={styles.bookImage}>
            <img src={this.props.book.imageURL} />
          </div>
          <div className={styles.bookText}>
            <h1>{this.props.book.title}</h1>
            <h2>{this.props.book.author}</h2>
            <h4>
              View the {'  '}
              <a href={this.props.book.sourceURL} target="_blank">
                Excerpt Analyzed
              </a>
            </h4>
          </div>
        </div>
        <div className={styles.graphsContainer}>
          <BarGraph />
          <BarGraph />
          <BarGraph />
          <BarGraph />
          <BarGraph />
          <BarGraph />
        </div>
      </div>
    ) : (
      <div id="Loading">
        <h1>Book Data Loading ...</h1>
      </div>
    );
    return toRender;

    // <h1>Page Is Rendering with book id {this.bookId}</h1>;
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.book,
    watsonData: state.watsonData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleBook: (bookId) => dispatch(fetchBook(bookId)),
    getWatsonData: (bookId) => dispatch(fetchWatsonData(bookId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBookPage);
