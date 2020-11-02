import { Dispatch, MiddlewareAPI } from 'redux';
import { IArticle, IArticleState } from '@redux/entities/Article';
import { ADD_ARTICLE, ArticleActions } from '@redux/entities/Article/actions';
import { setEmptyTitleError, setForbiddenWordError } from '@redux/entities/Article/creators';
import { articleState } from '@redux/entities/Article/reducer';

/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types */
export function emptyTitleMiddleware({ dispatch }: MiddlewareAPI) {
  return (next: Dispatch) => (action: ArticleActions) => {
    if (action.type === ADD_ARTICLE) {
      const { title }: IArticle = action.payload;

      if (title === '') {
        return dispatch(setEmptyTitleError());
      }
    }
    return next(action);
  };
}
export function forbiddenWordsMiddleware({ getState, dispatch }: MiddlewareAPI) {
  return (next: Dispatch) => (action: ArticleActions) => {
    if (action.type === ADD_ARTICLE) {
      const { title }: IArticle = action.payload;
      const { forbiddenWords }: IArticleState = articleState(getState());

      const foundForbiddenWords: string[] = forbiddenWords.filter((word: string): boolean => title.includes(word));

      if (foundForbiddenWords.length) {
        return dispatch(setForbiddenWordError());
      }
    }
    return next(action);
  };
}
/* eslint-enable @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types */
