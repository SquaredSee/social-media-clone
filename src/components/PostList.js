import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostList extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    const { foo, loading, error } = this.props.testData;

    if (loading) {
      return <div><h1>Posts</h1><h3>Loading...</h3></div>;
    }
    else if (error) {
      return <div>Error: {error.message}</div>;
    }

    return <div>{foo}</div>;
  }
}

// PropTypes validation
PostList.propTypes = {
  testData: PropTypes.shape({
    foo: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool,
  }).isRequired,
  getPosts: PropTypes.func.isRequired,
};

export default PostList;
