import React, { Component } from "react";
import PrintType from "../printtype/printtype";
import BookType from "../booktype/booktype";

export default class Search extends Component {
  render() {
    return (
      <div className="Search">
        <header className="header">
          <h1> Google Book Search</h1>
        </header>

        <form 
          className="googleBookform"
          onSubmit={event => this.props.handleSubmit(event)}
        >
          <label className="searchL" htmlFor="search">
            Search:
          </label>
          <input
            type="text"
            name="search"
            className="search"
            placeholder="Harry Potter"
            onChange={inp => this.props.handleSearchInput(inp.target.value)}
          />

          <input type="submit" value="Submit" />
        </form>

        <label htmlFor="printType">Print Type:</label>
        <PrintType
          options={this.props.options}
          printChange={this.props.printChange}
        />

        <label htmlFor="bookType">Book Type:</label>
        <BookType
          options={this.props.options}
          bookChange={this.props.bookChange}
        />
      </div>
    );
  }
}