import { GetStaticPropsResult, NextPage } from 'next';
import React from 'react';
import ArticleList from '../components/article-list/ArticleList';
import Header from '../components/header/Header';
import { Article } from '../model/article';
import { getArticlesByUser } from '../services/articles';
import { Container } from '../styles/pages/Index';

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
      <Container>
        <ArticleList articles={articles} />
      </Container>
    </>
  );
};

export default Index;
