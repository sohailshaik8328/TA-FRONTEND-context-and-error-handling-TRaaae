import React from "react";
import books from "./data/books.json";
import HOC from "./withSearch";

class Books extends React.Component {
  render() {
    let filteredBooks = books.filter((article) =>
      article.title.toLowerCase().includes(this.props.searchTerm)
    );
    return (
      <div className="page">
        <ul className="archive">
          {filteredBooks.map((book) => (
            <Book {...book} />
          ))}
        </ul>
      </div>
    );
  }
}

function Book(props) {
  return (
    <li className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>
        Author:<span>{props.author}</span>
      </p>
      <a href={props.website}>
        <button>Buy Now</button>
      </a>
    </li>
  );
}

export default  HOC(Books);
