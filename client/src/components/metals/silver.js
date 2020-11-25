import React from 'react';


class Silver extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiResults: '',

    }

  }

  componentDidMount() {
    this.loadImage();
  }

  //Commenting out just to avoid hitting cap before presentation
  loadImage() {
var myHeaders = new Headers();
myHeaders.append("x-access-token",  'process.env.REACT_APP_METALAPIS');
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
fetch("https://www.goldapi.io/api/XAG/USD", requestOptions)
  .then(response => response.text())
  .then(result => this.setState({apiResults: JSON.parse(result)}))
  .catch(error => console.log('error', error));
  }

  render() {
    return(
      <div className='card-item'>
          <h1>{ '$' +  this.state.apiResults.price + ' USD'} </h1>
      </div>
    );
  }
}



export default Silver;
