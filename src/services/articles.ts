import axios from 'axios';
import { Article } from '../model/article';

export async function getArticlesByUser(userName: string): Promise<Article[]> {
  const result = await axios.get(
    `https://dev.to/api/articles?username=${userName}`,
  );
  if (result?.data?.length) {
    return result.data.map(article => {
      return {
        id: article.id,
        title: article.title,
        link: article.canonical_url,
        tags: article.tag_list || [],
      } as Article;
    });
  }
}
