import React from 'react';
import { connect } from 'react-redux';
import { fetchBook } from './store/singleBook';
import { fetchWatsonData, resetData } from './store/watsonData';
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
  componentWillUnmount() {
    this.props.resetData();
  }
  render() {
    const watsonDataLoading = (
      <div>
        <h1>Watson Analysis Data Loading...</h1>
      </div>
    );

    const graphsToRender = this.props.watsonData.entities
      ? [
          <React.Fragment>
            <BarGraph
              totalData={this.props.watsonData.emotion.document.emotion}
              title='Overall Text Analysis'
            />
            {this.props.watsonData.entities.map((entity, index) => (
              <BarGraph
                totalData={entity.emotion}
                title={`${entity.text} (${entity.type})`}
                // sentiment={entity.sentiment}
                key={index}
              />
            ))}
          </React.Fragment>,
        ]
      : watsonDataLoading;

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
              <a href={this.props.book.sourceURL} target='_blank'>
                Excerpt Analyzed
              </a>
            </h4>
          </div>
        </div>
        <div className={styles.graphsContainer}>{graphsToRender}</div>
      </div>
    ) : (
      <div className='Loading'>
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
    resetData: () => dispatch(resetData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBookPage);
