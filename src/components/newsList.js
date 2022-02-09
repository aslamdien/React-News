import { useState } from "react";

const NewsList = ({ articles, title }) => {
  const [search, setSearch] = useState("");

  return (
   
    <div className="article-list">
      <div className="search">
        <input
          type="search"
          placeholder="search..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <h2>{title}</h2>
      {articles.articles
        .filter((article) => {
          if (search === "") {
            return articles.articles;
          } else if (
            article.title.toLowerCase().includes(search.toLowerCase())
          ) {
            return articles;
          }
        })
        .map((article) => (
          <div className="article-preview" key={article.title}>
            <a href={article.url}>

              <h2>{article.title}</h2>
              <h4>Written by {article.author}</h4>
              <p>{article.description}</p>
            </a>
            <br />
          </div>
        ))}
    </div>
  );
};

export default NewsList;
