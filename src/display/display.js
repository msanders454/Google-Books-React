import React from "react";

export default function Display(props) {
  return (
    <select
      onChange={
        (event => props.printChange(event.target.value)) ||
        (event => props.bookChange(event.target.value))
      }
    >
     {props.pOptions} {props.bOptions} 
    </select>
  );
}