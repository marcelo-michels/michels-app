import React from 'react';
import { Article } from '../model/article';
import ArticleCard from './ArticleCard';

interface MyPropsInterface {
  articles: Article[];
}

const ArticleList: React.FC<MyPropsInterface> = ({ articles }) => {
  return (
    <>
      <div className="articles">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <style jsx>{`
        .articles {
          margin: 0 auto;
          max-width: 600px;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default ArticleList;
