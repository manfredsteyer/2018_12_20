import { FlightBookingState } from './../flight-booking/+state/flight-booking.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {
  counter: number;
  currUser: string;
  loading: boolean;
}

function dummyReducer(s, a: Action) {
  return s;
}

function counterReducer(currCounter: number = 0, action: Action): number {
  switch(action.type) {
    case 'inc':
      return currCounter + 1;
    case 'dec':
      return currCounter - 1;
    default:
      return currCounter;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
  currUser: dummyReducer,
  loading: dummyReducer
};


export const metaReducers: MetaReducer<AppState>[] = 
        !environment.production ? 
        /* DEBUG */ [] : 
        /* PROD */ [];
