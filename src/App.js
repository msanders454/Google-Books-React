import React, { Component } from "react";
import Search from "./search/search";
import "./App.css";
import SearchType from "./seachtype/seachtype";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PrintType: "all",
      BookType: "no-filter",
      userEntry: "",
      searchResults: [],
      error: null
    };
  }

  searchInput(input) {
    this.setState({
      searchEntry: input
    });
  }

  
  printSelected(print) {
    this.setState({
      isPrintType: print
    });
  }

  bookSelected(book) {
    this.setState({
      isBookType: book
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submit handled!");

  
    const googleUrl =
      "https://www.googleapis.com/books/v1/volumes?q=search+terms";
    let printType = `$printType=${this.state.isPrintType}`;
    let filter =
      this.state.BookType !== "no-filter"
        ? `$filter=${this.state.isBookType}`
        : "";
    let searchEntry = `${this.state.userEntry}`;

    const queryString = `${googleUrl}?q=${searchEntry}&${filter}&${printType}`;

    console.log(queryString);

    fetch(queryString)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(responseJSon => {
        this.setState({
          searchResults: responseJSon.items
        });
      })
      .catch(e => {
        this.setState({ error: e.message });
      });
  }

  render() {
    const options = {
      pSelections: ["all", "books", "magazines"],
      bSelections: [
        "no-filter",
        "partial",
        "full",
        "free-ebooks",
        "paid-ebooks",
        "ebooks"
      ]
    };

    const error = this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : (
      ""
    );
    return (
      <div className="App">
        <Search
          handleSubmit={e => this.handleSubmit(e)}
          handleSearchInput={inp => this.searchInput(inp)}
          options={options}
          printChange={sel => this.printSelected(sel)}
          bookChange={sel => this.bookSelected(sel)}
        />
        <SearchType filterInfo={this.state.searchResults} />
        {error}
      </div>
    );
  }
}

App.defaultProps = {
  searchResults: []
};