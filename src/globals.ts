import { Dispatch as ReactDispatch, SetStateAction } from 'react';
import { Action, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '@redux/store';

declare global {
  type State<T> = [T, ReactDispatch<SetStateAction<T>>];
  type Resolve<T> = (value?: T | PromiseLike<T>) => void;
  type ThunkResult<R> = ThunkAction<Promise<R>, RootState, undefined, Action>;
  type AnyThunkDispatch = ThunkDispatch<unknown, unknown, AnyAction>;
}
