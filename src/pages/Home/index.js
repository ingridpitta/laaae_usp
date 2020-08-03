import React, { Component } from "react";
import { GeneralTemplate } from "../../templates";
import { HomeContent } from "../../components/organisms";
import ApiService from "../../service";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      pages: [],
    };
  }

  componentDidMount = async () => {
    const posts = await ApiService.getAllPosts();
    const pages = await ApiService.getAllPages();

    this.setState({ posts, pages });
  };

  render() {
    const { posts, pages } = this.state;

    console.log({ posts, pages });
    return (
      <GeneralTemplate>
        <HomeContent posts={posts} pages={pages} />
      </GeneralTemplate>
    );
  }
}

export default Home;
