import { RootState } from '@redux/store';
import { IArticle } from '@redux/entities/Article';
import { articleState } from '@redux/entities/Article/reducer';

export function getArticles(state: RootState): IArticle[] {
  return articleState(state).articles;
}
export function getForbiddenWords(state: RootState): string[] {
  return articleState(state).forbiddenWords;
}
export function getError(state: RootState): string {
  return articleState(state).error;
}
export function getIsPending(state: RootState): boolean {
  return articleState(state).isPending;
}
