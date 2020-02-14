import React, { Component } from "react";
import Display from "../display/display";

export default class BookType extends Component {
  render() {
    const selectOptions = this.props.options.bSelections;

    const bookOptions = selectOptions.map((optionValues, i) => (
      <option value={optionValues} key={i}>
        {optionValues}
      </option>
    ));

    return (
      <div>
        <Display
          bOptions={bookOptions}
          pChange={this.props.bookChange}
        />
      </div>
    );
  }
}