import React, { Component } from "react";
import { GeneralTemplate } from "../../templates";
import { HomeContent } from "../../components/organisms";
import ApiService from "../../service";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  componentDidMount = async () => {
    const posts = await ApiService.getAllPosts();
    this.setState({ posts });
  };

  render() {
    const { posts } = this.state;
    console.log({ posts });
    return (
      <GeneralTemplate>
        <HomeContent posts={posts} />
      </GeneralTemplate>
    );
  }
}

export default Home;
