import { Dispatch } from 'redux';

export default function asThunk(dispatch: Dispatch): AnyThunkDispatch {
  return dispatch as AnyThunkDispatch;
}
