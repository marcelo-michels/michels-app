import React from 'react';
import { Article } from '../../model/article';
import ArticleCard from '../article-card/ArticleCard';
import { Articles } from './ArticleListStyle';

interface MyPropsInterface {
  articles: Article[];
}

const ArticleList: React.FC<MyPropsInterface> = ({ articles }) => {
  return (
    <Articles>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Articles>
  );
};

export default ArticleList;
