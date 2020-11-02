import { Action } from 'redux';
import { IArticle } from '@redux/entities/Article';

/* eslint-disable @typescript-eslint/typedef */
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const SET_FORBIDDEN_WORDS = 'SET_FORBIDDEN_WORDS';
export const SET_ERROR_FORBIDDEN_WORD = 'SET_ERROR_FORBIDDEN_WORD';
export const SET_ERROR_EMPTY_TITLE = 'SET_ERROR_EMPTY_TITLE';
export const SET_IS_PENDING = 'SET_IS_PENDING';
/* eslint-enable @typescript-eslint/typedef */

export interface IAddArticleAction extends Action<typeof ADD_ARTICLE> {
  payload: IArticle;
}
export interface ISetForbiddenWordsAction extends Action<typeof SET_FORBIDDEN_WORDS> {
  payload: Array<string>;
}
export type ISetForbiddenWordErrorAction = Action<typeof SET_ERROR_FORBIDDEN_WORD>;
export type ISetEmptyTitleErrorAction = Action<typeof SET_ERROR_EMPTY_TITLE>;
export type ISetIsPendingAction = Action<typeof SET_IS_PENDING>;

export type ArticleActions =
  | IAddArticleAction
  | ISetForbiddenWordsAction
  | ISetForbiddenWordErrorAction
  | ISetEmptyTitleErrorAction
  | ISetIsPendingAction;
