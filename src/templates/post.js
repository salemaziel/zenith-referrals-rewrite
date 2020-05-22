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
      pageContext: { clientfirstname, clientlastname, clientemail, clientphone, clientstreetaddress, clientcity, clientstate, clientzip, description, slug },
      uri,
    } = this.props;

    const uriItems = uri.split('/');

    const uriSlug = uriItems[uriItems.length - 1];

    const isLoaded = uriSlug === slug;

    return (
      <Layout>
        <PostPage
          clientfirstname={clientfirstname}
          clientlastname={clientlastname}
          clientphone={clientphone}
          clientemail={clientemail}
          clientstreetaddress={clientstreetaddress}
          clientcity={clientcity}
          clientstate={clientstate}
          clientzip={clientzip}
          description={description}
          slug={slug || uriSlug}
          isLoaded={isLoaded}
        />
      </Layout>
    );
  }
}

export default Post;
