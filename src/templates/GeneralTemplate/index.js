import React, { Component } from "react";
import ApiService from "../../service";

class GeneralTemplate extends Component {
  constructor() {
    super();

    this.state = {
      menus: [],
    };
  }

  componentDidMount = async () => {
    const menus = await ApiService.getAllMenus();
    console.log({ menus });

    this.setState({ menus });
  };

  render() {
    const { children } = this.props;

    return (
      <div className="container">
        <nav>LAAAE</nav>
        {children}
        <footer>LAAAE</footer>
      </div>
    );
  }
}

export default GeneralTemplate;
