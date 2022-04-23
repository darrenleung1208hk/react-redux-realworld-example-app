import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { listArticles } from "../../api";
import { setArticles } from "../../reducers/articleList";

const popularTags = [
  "programning",
  "javascript",
  "emberjs",
  "angularjs",
  "react",
  "mean",
  "node",
  "rails",
];

const HomePage = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articleList.articles);
  const { data: { articles: articlesData, articlesCount } = {} } = useQuery(
    "listArticles",
    listArticles
  );

  useEffect(() => {
    if (articlesData) {
      dispatch(setArticles(articlesData));
    }
  }, [dispatch, setArticles, articlesData]);

  const renderPopularTags = () => {
    return (
      <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tag-list">
          {popularTags.map((tag, index) => (
            <a
              key={`popular-tag-${index}`}
              href=""
              className="tag-pill tag-default"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    );
  };

  const renderArticlePreview = () =>
    articles?.map((article, index) => {
      return (
        <div key={`article-preview-${index}`} className="article-preview">
          <div className="article-meta">
            <a href="profile.html">
              <img src={article.author.image} />
            </a>
            <div className="info">
              <a href="" className="author">
                {article.author.username}
              </a>
              <span className="date">{article.createdAt}</span>
            </div>
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
              <i className="ion-heart"></i> {article.favoritesCount}
            </button>
          </div>
          <Link to={`/article/${article.slug}`} className="preview-link">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Read more...</span>
          </Link>
        </div>
      );
    });

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            {renderArticlePreview()}
          </div>

          <div className="col-md-3">{renderPopularTags()}</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
