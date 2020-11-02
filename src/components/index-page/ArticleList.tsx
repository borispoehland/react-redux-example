import React from 'react';
import { useSelector } from 'react-redux';
import { getArticles, IArticle } from '@redux/entities/Article';

const ArticleList: React.FC = (): JSX.Element => {
  const articles: IArticle[] = useSelector(getArticles);
  return (
    <>
      {!articles.length && 'No articles yet.'}
      {!!articles.length && (
        <ul>
          {articles.map(
            (el: IArticle): JSX.Element => (
              <li key={el.id}>{el.title}</li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default ArticleList;
