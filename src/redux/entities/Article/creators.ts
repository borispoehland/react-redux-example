import { IArticle } from '@redux/entities/Article';
import {
  ADD_ARTICLE,
  IAddArticleAction,
  ISetEmptyTitleErrorAction,
  ISetForbiddenWordErrorAction,
  ISetForbiddenWordsAction,
  ISetIsPendingAction,
  SET_ERROR_EMPTY_TITLE,
  SET_ERROR_FORBIDDEN_WORD,
  SET_FORBIDDEN_WORDS,
  SET_IS_PENDING,
} from '@redux/entities/Article/actions';

export function setAddedArticle(payload: IArticle): IAddArticleAction {
  return { payload, type: ADD_ARTICLE };
}
export function setForbiddenWords(payload: string[]): ISetForbiddenWordsAction {
  return { payload, type: SET_FORBIDDEN_WORDS };
}
export function setIsPending(): ISetIsPendingAction {
  return { type: SET_IS_PENDING };
}
export function setEmptyTitleError(): ISetEmptyTitleErrorAction {
  return { type: SET_ERROR_EMPTY_TITLE };
}
export function setForbiddenWordError(): ISetForbiddenWordErrorAction {
  return { type: SET_ERROR_FORBIDDEN_WORD };
}
