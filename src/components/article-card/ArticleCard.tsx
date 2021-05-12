import { Article } from '../../model/article';
import { LinkCard } from './ArticleCardStyle';

interface MyPropsInterface {
  article: Article;
}

const ArticleCard: React.FC<MyPropsInterface> = ({ article }) => {
  return <LinkCard href={article.link}>{article.title}</LinkCard>;
};

export default ArticleCard;
