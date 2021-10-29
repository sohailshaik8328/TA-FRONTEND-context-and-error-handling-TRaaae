import React from "react";
import { Link, withRouter } from "react-router-dom";
import articles from "./data/articles.json";
import HOC from "./withSearch";

class Articles extends React.Component {
  render() {
    let filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(this.props.searchTerm)
    );
    return (
      <>
        <ul className="articles">
          {filteredArticles.map((article) => (
            <li>
              <Link to={"articles/" + article.slug}>
                <h3>{article.title}</h3>
              </Link>
              <small>{article.author}</small>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

let EnhancedArticles =  withRouter( HOC(Articles) );
export default EnhancedArticles;
