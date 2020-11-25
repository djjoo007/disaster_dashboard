import React, { Component } from 'react';
import API from '../../utils/API';
import CovidCard from './CovidCard';
import CovidDetail from './CovidDetail';
import CovidSearchForm from './CovidSearchForm';


class CovidSearchResults extends Component {
  state = {
    result: [],
    searchCovid: ""
  };

  componentDidMount() {
    this.searchCovid("WA");
  }

  searchCovid = queryCovid => {
    API.getCovidByState(queryCovid)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchCovid(this.state.searchCovid);
  };

  render() {
    if (this.state.result.length === 0 ) {
      return null;
    }
    // console.log(this.state.result);
    return (
            <CovidCard
              heading= "Search for a US State"
            >
              <CovidSearchForm
                value={this.state.searchCovid}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              <CovidDetail
                newCases={this.state.result[0].new_case}
                newDeaths={this.state.result[0].new_death}
              />
            </CovidCard>
    );
  }
}

export default CovidSearchResults;
