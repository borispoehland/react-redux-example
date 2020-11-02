import { Dispatch } from 'redux';
import store from '@redux/store';
import { IArticle } from '@redux/entities/Article';
import { setAddedArticle, setForbiddenWords, setIsPending } from '@redux/entities/Article/creators';
import { articleState } from '@redux/entities/Article/reducer';

export function fetchForbiddenWordsThunk(): ThunkResult<void> {
  function fetchForbiddenWords(): Promise<string[]> {
    // fetch forbidden words from db later
    return new Promise((resolve: Resolve<string[]>): void => {
      setTimeout((): void => {
        resolve(['money', 'spam']);
      }, 3000);
    });
  }
  return async (dispatch: Dispatch): Promise<void> => {
    const payload: string[] = await fetchForbiddenWords();
    dispatch(setForbiddenWords(payload));
  };
}
export function addArticleThunk(payload: IArticle): ThunkResult<void> {
  let addArticleIntervalHandle: NodeJS.Timeout;
  function addArticleIfForbiddenWordsWereFetched(dispatch: Dispatch): void {
    if (articleState(store.getState()).forbiddenWords) {
      dispatch(setAddedArticle(payload));
      clearInterval(addArticleIntervalHandle);
    }
  }
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(setIsPending());
    // repeat every 500 ms
    addArticleIntervalHandle = setInterval((): void => addArticleIfForbiddenWordsWereFetched(dispatch), 500);
    // initial call
    addArticleIfForbiddenWordsWereFetched(dispatch);
  };
}
