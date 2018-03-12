import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auth from '../../modules/Auth';
import axios from 'axios';
import { URL_LOGOUT, BEARER_HEADER } from '../../constants';


class Logout extends Component {

  componentDidMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    // change the current URL to / after logout
    
    axios.get(URL_LOGOUT,{
      BEARER_HEADER
    })
    .then((response) => {
      this.props.history.push('/');
    })
    .catch((error) => {
      console.log(error);
    });
    this.props.history.push('/');
  }

  render() {
    
    return (
      <div>
        <p>Logging out...</p>
      </div>
    )
  }
}

Logout.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Logout;
