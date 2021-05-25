import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
//import { Context } from "../State";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      list: [],
    };
  }

  is_Mounted = false;

  componentWillUnmount() {
    this.is_Mounted = false;
  }

  handleChange = (e) => {
    this.setState({ key: e.target.value });
  };

  addToList = () => {
    const { key } = this.state;
    this.is_Mounted = true;
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${key}&client_id=025df1efe3ea87353f3b59f444203ee71b31c1d0c0551f08fda3acdd9aba286f`
    )
      .then((res) => res.json())
      .then((data) => {
        if (this.is_Mounted) {
          console.log(data);
          this.setState(
            {
              list: [...data.results],
            },
            () => {
              this.props.history.push({
                pathname: "/results",
                state: { list: [...data.results] },
              });
            }
          );
        }
      })
      .catch((err) => console.log(err.message));
  };

  render() {
    const { key } = this.state;
    return (
      <div className="search-field">
        <h1>Seeing is believing...</h1>
        <p>Search for the images you really want.</p>
        <input
          type="text"
          value={this.state.key}
          onChange={this.handleChange}
        />
        <button onClick={() => (key !== "" ? this.addToList() : null)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    );
  }
}

export default withRouter(SearchField);
