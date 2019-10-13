import React from "react";
import { connect } from "react-redux";
import { getStoriesEpic } from "./action";

class TopStories extends React.Component {
  componentDidMount() {
    const { dispatch, page } = this.props;
    dispatch(getStoriesEpic(page));
  }

  componentDidUpdate(prevProps) {
    const { dispatch, page } = this.props;

    if (page !== prevProps.page) {
      console.log(page)
      dispatch(getStoriesEpic(page));
    }
  }

  render() {
    const { topStories } = this.props;
    console.log(this.props);
    return (
      <ul>
        {topStories &&
          topStories.map(({ url, title, by, id }) => (
            <li key={id}>
              <a href={url}>{title}</a>
              <div>by: {by}</div>
            </li>
          ))}
      </ul>
    );
  }
}

export default connect(({ topStoriesState, pageState }) => ({
  ...topStoriesState,
  ...pageState
}))(TopStories);
