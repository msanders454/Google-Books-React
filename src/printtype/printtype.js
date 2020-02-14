import React, { Component } from "react";
import Display from "../display/display";

export default class PrintType extends Component {
  render() {
    const options = this.props.options.pSelections;
    
    const printOptions = options.map((optionValues, i) => (
      <option value={optionValues} key={i}>
        {optionValues}
      </option>
    ));


    return (
      <div>
        <Display
          bOptions={printOptions}
          pChange={this.props.printChange}
        />
      </div>
    );
  }
}