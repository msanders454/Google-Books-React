import React, { Component } from "react";
import Book from "../book/book";

export default class SearchType extends Component {
  render() {
    const bookInfo = this.props.filterInfo.map((info, i) => (
      <Book
        key={i}
        title={info.volumeInfo.title}
        image={
          "images" in info.volumeInfo
            ? info.volumeInfo.imageLinks.thumbnail
            : ""
        }
        author={
          "authors" in info.volumeInfo
            ? `Author(s): ` + info.volumeInfo.authors 
            : ""
        }
        price={
          "listPrice" in info.saleInfo
            ? `Price: $` + info.saleInfo.listPrice.amount
            : ""
        }
        description={info.volumeInfo.description}
        preview={info.volumeInfo.previewLink}
      />
    ));
    return <div className="BookSearchList">{bookInfo}</div>;
  }
}