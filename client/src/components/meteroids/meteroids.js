import React from 'react';
import moment from 'moment';
import {ListItem, List} from '../list';


class Meteroid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: `${process.env.REACT_APP_METEORS}`,
      apiResults: [],
      todayDate : '2020-12-04'
    };
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('https://api.nasa.gov/neo/rest/v1/feed' +
      `?start_date=${this.state.todayDate}` +
      `&end_date=${this.state.todayDate}` +
      `&api_key=${this.state.apiKey}`, requestOptions)
      .then((response) => response.text())
      .then((result) => this.setState({apiResults: JSON.parse(result)}))
      .then((result) => {
        const apiData = this.state.apiResults.near_earth_objects[this.state.todayDate.toString()];
        const finalData = [];

        for (let i = 0; i < 5; i++) {
          const meteroids =

          {
            'id': i + 1,
            'Name': ' ' + apiData[i].name,
            'Hazardous': ' ' + apiData[i].is_potentially_hazardous_asteroid,
            'MilesDiameter': ' ' + apiData[i].estimated_diameter.miles.estimated_diameter_max.toLocaleString('en', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2}),
            'MissEarth': ' ' + Number(apiData[i].close_approach_data[0].miss_distance.miles).toLocaleString('en', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2}),
            'VelocityMPH': ' ' + Number(apiData[i].close_approach_data[0].relative_velocity.miles_per_hour).toLocaleString('en', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2})
          };
          finalData.push(meteroids);
        }
        this.setState({
          apiResults: finalData

        });
      })
      .catch((error) => console.log('error', error));
  }

  render() {
    return (
      <div>
        {this.state.apiResults.length ? (
          <List>
            {this.state.apiResults.map((result) => (
              <ListItem key={result.id}>
              Meteor Name:{result.Name} -
              Danger to Earth: {result.Hazardous.toUpperCase()} -
              Diameter: {result.MilesDiameter} Miles -
              Avoided Earth by: {result.MissEarth} Miles -
              Speed: {result.VelocityMPH} MPH
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>Nothin happenin in space...</h3>
        )}
      </div>
    );
  }
}


export default Meteroid;
