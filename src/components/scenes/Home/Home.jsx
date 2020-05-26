import React, { Component } from 'react';
import { Link } from 'gatsby';
import { withFirebase } from '../../../utils/Firebase';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Loading from '../../atoms/Loading';
import Image from '../../atoms/Image';

class Home extends Component {
  _initFirebase = false;

  state = {
    posts: [],
    loading: true,
    clientfirstname: '',
    clientlastname: '',
    clientemail: '',
    clientphone: '',
    clientstreetaddress: '',
    clientcity: '',
    clientstate: '',
    clientzip: '',
    description: '',
  };

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.getPosts();
    }
  };

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  getPosts = () => {
    const { firebase } = this.props;

    firebase
      .posts()
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((item) => item.data());
        this.setState({
          posts: data,
          loading: false,
        });
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      posts,
      clientfirstname,
      clientlastname,
      clientemail,
      clientphone,
      clientstreetaddress,
      clientcity,
      clientstate,
      clientzip,
      description,
    } = this.state;
    const { firebase } = this.props;

    let slug =
      (clientlastname.match(/^[a-zA-Z0-9 ]*$/, '') &&
        clientlastname.match(/^[a-zA-Z0-9 ]*$/, '')[0]) ||
      '';

    const latestPost = {
      slug:
        slug.toLowerCase().split(' ').join('-') +
        Math.floor(Math.random() * 200) +
        1,
      clientfirstname,
      clientlastname,
      clientemail,
      clientphone,
      clientstreetaddress,
      clientcity,
      clientstate,
      clientzip,
      description,
    };

    const newPosts = [latestPost, ...posts];

    this.setState({
      posts: newPosts,
      clientfirstname: '',
      clientlastname: '',
      clientemail: '',
      clientphone: '',
      clientstreetaddress: '',
      clientcity: '',
      clientstate: '',
      clientzip: '',
      description: '',
    });

    firebase.posts().add({
      ...latestPost,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      posts,
      loading,
      clientfirstname,
      clientlastname,
      clientemail,
      clientphone,
      clientstreetaddress,
      clientcity,
      clientstate,
      clientzip,
      description,
    } = this.state;

    if (loading) return <Loading />;

    return (
      <div className="home container">
        <div className="home__details">
          <h1 className="home__title">Dashboard</h1>
          {/*   <p className="home__description">
            Enter A New Referral:
          </p>*/}
        </div>

        <div className="home__posts">
          <div className="home__posts__form">
            <div className="home__posts__form__title">
              Add New Referral
            </div>
            <form
              name="Referral-Rewards"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="bot-field" />
              <input
                type="hidden"
                name="form-name"
                value="Referral-Rewards"
              />
              <Input
                name="clientfirstname"
                type="text"
                value={clientfirstname}
                labelName="Client's First Name"
                onChange={this.handleChange}
                required
              />
              <Input
                name="clientlastname"
                type="text"
                value={clientlastname}
                labelName="Client's Last Name"
                onChange={this.handleChange}
                required
              />

                            <Input
                name="clientphone"
                type="tel"
                value={clientphone}
                labelName="Client's Phone"
                onChange={this.handleChange}
                required
              />
              <Input
                name="clientemail"
                type="email"
                value={clientemail}
                labelName="Client's Email"
                onChange={this.handleChange}
                required
              />
              <Input
                name="clientstreetaddress"
                type="text"
                value={clientstreetaddress}
                labelName="Client's Street Address"
                onChange={this.handleChange}
                required
              />
              <Input
                name="clientcity"
                type="text"
                value={clientcity}
                labelName="Client's City"
                onChange={this.handleChange}
                required
              />

              <Input
                name="clientstate"
                type="text"
                value={clientstate}
                labelName="Client's State"
                placeholder="CA"
                onChange={this.handleChange}
                required
              />

              <Input
                name="clientzip"
                type="text"
                value={clientzip}
                labelName="Client's Zip Code"
                onChange={this.handleChange}
                required
              />

              <Input
                name="description"
                type="textarea"
                value={description}
                labelName="Other Notes"
                onChange={this.handleChange}
                required
              />

              <Button
                className="home__posts__form__btn"
                type="submit"
              />
            </form>
          </div>

          <div className="home__posts__items">
          <div className="home__posts__items__title">
            Previous Referrals
          </div>
            {posts &&
              posts.length > 0 &&
              posts.map((item, id) => (
                <div key={id} className="home__post">
                  <Link
                    className="home__post__title"
                    to={'/post/' + item.slug}
                  >
                    <Image
                      className="home__post__image"
                      filename="postBG.jpg"
                    />
                    <div className="home__post__text">
                      {item.clientfirstname &&
                      item.clientfirstname < 30
                        ? item.clientfirstname
                        : item.clientfirstname.slice(0, 30) + '...'}
                      <div
                        className="home__post__description"
                        key={id}
                      >
                        {item.clientlastname &&
                        item.clientlastname.length > 150
                          ? item.clientlastname.slice(0, 150)
                          : item.clientlastname + '...'}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebase(Home);
