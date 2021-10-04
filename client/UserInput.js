import React from 'react';
import { connect } from 'react-redux';
import { fetchUserTextData, resetData } from './store/watsonData';
import BarGraph from './BarGraph';
import styles from './UserInput.module.css';

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userText: '',
      loading: false,
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('handle submit running');
    //change loading to true instead of false
    this.setState({
      loading: true,
    });
    //send the user text data from the form to the back-end for Watson Analysis
    const userText = this.state.userText;
    console.log('USER TEXT: ', userText);
    this.props.getWatsonData(userText);
    //clear the user data from the form
    this.setState({
      userText: '',
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log('handle change is running');
  }
  componentWillUnmount() {
    this.props.resetData();
  }
  render() {
    //watson data loading similar to the other page
    const watsonDataLoading = this.state.loading ? (
      <div>
        <h1>Watson Analysis Data Loading...</h1>
      </div>
    ) : (
      ''
    );

    //graphs to render similar to the other page BUT check is there are entities and check if loading is true
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
                key={index}
              />
            ))}
          </React.Fragment>,
        ]
      : watsonDataLoading;

    return (
      <div>
        <div className={styles.userInputContainer}>
          <h3>Submit Your Own Text Below for Analysis by Watson!</h3>
          <form
            className={styles.form}
            onSubmit={(event) => this.handleSubmit(event)}
          >
            <textarea
              value={this.state.userText}
              className={styles.inputBox}
              name='userText'
              rows='10'
              maxLength='1000'
              onChange={(event) => this.handleChange(event)}
            />
            <button className={styles.button} type='submit'>
              Submit for Analysis
            </button>
          </form>
        </div>
        <div className={styles.graphsContainer}>{graphsToRender}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    watsonData: state.watsonData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWatsonData: (userText) => dispatch(fetchUserTextData(userText)),
    resetData: () => dispatch(resetData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
