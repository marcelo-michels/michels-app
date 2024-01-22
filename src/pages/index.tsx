import { GetStaticPropsResult, NextPage } from 'next';
import ArticleList from '../components/article-list/ArticleList';
import Footer from '../components/footer/Footer';
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
      <Footer />
    </>
  );
};

export default Index;
