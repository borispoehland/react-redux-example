import { applyMiddleware, CombinedState, combineReducers, createStore, Reducer, Store } from 'redux';
import thunk from 'redux-thunk';
import { articleReducer, emptyTitleMiddleware, forbiddenWordsMiddleware, IArticleState } from '../entities/Article';

type RootReducerState = CombinedState<{ articleReducer: IArticleState }>;

const rootReducer: Reducer<RootReducerState> = combineReducers({
  articleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store: Store = createStore(rootReducer, applyMiddleware(thunk, emptyTitleMiddleware, forbiddenWordsMiddleware));

export default store;
