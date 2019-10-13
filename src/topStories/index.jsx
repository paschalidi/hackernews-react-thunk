import React from "react";
import { connect } from "react-redux";
import { Header } from "../header";
import { getStoriesEpic } from "./action";
import topStories from "./reducer";

class Index extends React.Component {
  state = { page: 0 };

  componentDidMount() {
    const { dispatch } = this.props;
    const { page } = this.state;
    dispatch(getStoriesEpic(page));
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default connect(() => topStories)(Index);
