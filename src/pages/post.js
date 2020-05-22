import React, { Component } from 'react';
import Layout from '../utils/layout';
import PostBase from '../components/scenes/Post/Post';
import { compose } from 'recompose';
import {
  withAuthorization,
  withEmailVerification,
} from '../utils/Session';

const condition = authUser => !!authUser;

const PostPage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(PostBase);

export class Post extends Component {
  render() {
    const {
      pageContext: { clientfirstname, clientlastname, clientemail, clientphone, clientstreetaddress, clientcity, clientstate, clientzip, description },
    } = this.props;

    return (
      <Layout>
        <PostPage
          slug={this.props['*']}
          isLoaded={false}
          clientfirstname={clientfirstname}
          clientlastname={clientlastname}
          clientemail={clientemail}
          clientphone={clientphone}
          clientstreetaddress={clientstreetaddress}
          clientcity={clientcity}
          clientstate={clientstate}
          clientzip={clientzip}
          description={description}

        />
      </Layout>
    );
  }
}

export default Post;
