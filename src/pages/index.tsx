import { GetStaticPropsResult, NextPage } from 'next';
import React from 'react';
import ArticleList from '../components/ArticleList';
import Header from '../components/Header';
import { Article } from '../model/article';
import { getArticlesByUser } from '../services/articles';

interface MyPropsInterface {
  articles: Article[];
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<MyPropsInterface>
> {
  const articles = await getArticlesByUser('marcelomichels');
  return {
    props: { articles: articles },
    revalidate: 600,
  };
}

const Index: NextPage<MyPropsInterface> = ({ articles }) => {
  return (
    <>
      <Header />
      <div className="container">
        <ArticleList articles={articles} />
      </div>

      <style jsx>{`
        .container {
          padding: 0 5vw;
        }
      `}</style>
    </>
  );
};

export default Index;
