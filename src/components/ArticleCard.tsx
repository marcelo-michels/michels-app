import React from 'react';
import { Article } from '../model/article';

interface MyPropsInterface {
  article: Article;
}

const ArticleCard: React.FC<MyPropsInterface> = ({ article }) => {
  return (
    <>
      <a className="article" href={article.link}>
        {article.title}
      </a>
      <style jsx>{`
        .article {
          border: 1px solid #f1f1f1;
          border-radius: 5px;
          margin: 1vmin;
          padding: 2vmin;
          color: #f1f1f1;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ArticleCard;
