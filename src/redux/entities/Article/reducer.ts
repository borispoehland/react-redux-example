import { RootState } from '@redux/store';
import { IArticle } from '@redux/entities/Article';
import {
  ADD_ARTICLE,
  ArticleActions,
  SET_ERROR_EMPTY_TITLE,
  SET_ERROR_FORBIDDEN_WORD,
  SET_FORBIDDEN_WORDS,
  SET_IS_PENDING,
} from '@redux/entities/Article/actions';

export interface IArticleState {
  articles: IArticle[];
  forbiddenWords: string[];
  error: string;
  isPending: boolean;
}
const initialState: IArticleState = {
  articles: [],
  forbiddenWords: null,
  error: null,
  isPending: false,
};
export function articleReducer(state: IArticleState = initialState, action: ArticleActions): IArticleState {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        ...{
          articles: [...state.articles, action.payload],
          isPending: false,
        },
      };
    case SET_FORBIDDEN_WORDS:
      return {
        ...state,
        ...{
          forbiddenWords: [...action.payload],
        },
      };
    case SET_ERROR_FORBIDDEN_WORD:
      return {
        ...state,
        ...{
          error: 'Your entry contains forbidden words! Article not submitted.',
          isPending: false,
        },
      };
    case SET_ERROR_EMPTY_TITLE:
      return {
        ...state,
        ...{
          error: 'Empty article. Article not submitted.',
          isPending: false,
        },
      };
    case SET_IS_PENDING:
      return {
        ...state,
        ...{
          isPending: true,
        },
      };
    default:
      return state;
  }
}
export function articleState(state: RootState): IArticleState {
  return state.articleReducer;
}
