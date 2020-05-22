import React, { Component } from 'react';
import { withFirebase } from '../../../utils/Firebase';

class Post extends Component {
  _initFirebase = false;

  state = {
    post: null,
    loading: true,
  };

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.getPost();
    }
  };

  componentDidMount() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      this.firebaseInit();
    }
  }

  componentDidUpdate() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      this.firebaseInit();
    }
  }

  getPost = () => {
    const { firebase, slug } = this.props;

    firebase
      .post({ slug })
      .get()
      .then(result => {
        this.setState({
          post: result.docs && result.docs[0].data(),
          loading: false,
        });
      });
  };

  render() {
    const { loading, post } = this.state;
    const { isLoaded, clientfirstname, clientlastname, clientemail, clientphone, clientstreetaddress, clientcity, clientstate, clientzip, description } = this.props;

    const finalDescription = isLoaded
      ? description
      : post && post.description;
    const finalFirstName = isLoaded ? clientfirstname : post && post.clientfirstname;

    const finalLastName = isLoaded ? clientlastname : post && post.clientlastname;

    const finalEmail = isLoaded ? clientemail : post && post.clientemail;

    const finalPhone = isLoaded ? clientphone : post && post.clientphone;

    const finalStreetAddress = isLoaded ? clientstreetaddress : post && post.clientstreetaddress;

    const finalCity = isLoaded ? clientcity : post && post.clientcity;

    const finalState = isLoaded ? clientstate : post && post.clientstate;

    const finalZip = isLoaded ? clientzip : post && post.clientzip;

    if (!isLoaded && loading) return null;

    return (
      <div className="post container">
        <h1>{finalFirstName} <br />{finalLastName}</h1>
        <div>{finalEmail}</div>
        <div>{finalPhone}</div>
        <div>{finalStreetAddress}</div>
        <div>{finalCity}</div>
        <div>{finalState}</div>
        <div>{finalZip}</div>
        <div>{finalDescription}</div>
      </div>
    );
  }
}

export default withFirebase(Post);
