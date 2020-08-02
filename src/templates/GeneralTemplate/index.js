import React, { Component } from "react";
import { NavBar } from "../../components/molecules";
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
      <div className="container" style={{ position: "relative" }}>
        <NavBar />
        {children}
        <footer>LAAAE</footer>
      </div>
    );
  }
}

export default GeneralTemplate;
