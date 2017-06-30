import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PostList extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link style={{ color: 'black' }} to={`posts/${post.id}`}>
            <h3 className="list-group-item-heading">{post.title}</h3>
          </Link>
        </li>
      );
    });
  }


  render() {
    const { posts, loading, error } = this.props.postList;

    if (loading) {
      return <div><h1>Posts</h1><h3>Loading...</h3></div>;
    }
    else if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="container">
        <h1>Posts</h1>
        <ul className="list-group">
          {this.renderPosts(posts)}
        </ul>
      </div>
    );
  }
}

// PropTypes validation
PostList.propTypes = {
  postList: PropTypes.shape({
    posts: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool,
  }).isRequired,
  getPosts: PropTypes.func.isRequired,
};

export default PostList;
