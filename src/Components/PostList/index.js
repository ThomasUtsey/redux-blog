import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../Action";

class PostList extends React.Component {
  componentDidMount = () => {
    this.props.fetchPost();
  };

  render() {
    return <div className="ui container">PostList</div>;
  }
}

export default connect(null, { fetchPost })(PostList);
