import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Gold from '../metals/gold.js';
import Silver from '../metals/silver.js';
import Meteroids from '../meteroids/meteroids.js';
import Disasters from '../../components/disasters';
import {ListItem} from '../list';
import CovidSearchResults from '../covid/CovidSearchResults.js';
import Sidebar from '../layout/Sidebar.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: JSON.parse(localStorage.getItem('okta-token-storage'))
        .idToken.claims.name,
    };
  }

  render() {
    return (
      <div>
        <div id="innerContainer">
          <div className="App" id="outer-container">
            <Sidebar
              pageWrapId={'page-wrap'}
              outerContainerId={'outer-container'}
              userName={this.state.currentUserName}>
            </Sidebar>
            <h1>Welcome {this.state.currentUserName} !</h1>
            <br></br>
            <div className="card" id="Corgis">
              <h2>
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/corgi.png'}
                  alt="corgi"
                />
                <Link to="/puppies">
                  <button>Too Stressed? Look at Puppies!</button>
                </Link>
              </h2>
            </div>
            <br></br>

            <div className="MetalsContainer">
              <div className="row" id="MetalsCards">
                <div className="col s6 m6 l6 card" id="gold">
                  <h3 className="mb-3 mt-3">
                    <img
                      src={
                        process.env.PUBLIC_URL + '/assets/images/goldbars.png'
                      }
                      alt="goldbars"
                    />
                    Gold Spot Price
                  </h3>
                  <ListItem>
                    <Gold />
                  </ListItem>
                </div>
                <div className="col s6 m6 l6 card" id="silver">
                  <h3 className="mb-3 mt-3">
                    <img
                      src={
                        process.env.PUBLIC_URL + '/assets/images/silverbars.png'
                      }
                      alt="silverbars"
                    />
                    Silver Spot Price
                  </h3>
                  <ListItem>
                    <Silver />
                  </ListItem>
                </div>
              </div>

              <div id="nasa"></div>
              <div className="card">
              <h3 className="mb-3 mt-3" ><img
              src={process.env.PUBLIC_URL + '/assets/images/comet.png'}
              alt = 'meteroid'/> Near Earth Events - Today </h3>
                <Meteroids />
              </div>
              <br></br>

              <div className="card" id="covid">
                <h3 className="mb-3 mt-3">
                  <img
                    src={process.env.PUBLIC_URL + '/assets/images/covid.png'}
                    alt="covid"
                  />
                  Covid-19 New Cases and Deaths
                </h3>
                <ListItem>
                  <CovidSearchResults />
                </ListItem>
              </div>
              <br></br>
              <div className="card" id="disaster">
                <h3 className="mb-3 mt-3">
                  <img
                    src={
                      process.env.PUBLIC_URL + '/assets/images/disasters.png'
                    }
                    alt="disasters"
                  />
                  Disasters
                </h3>
                <Disasters></Disasters>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
