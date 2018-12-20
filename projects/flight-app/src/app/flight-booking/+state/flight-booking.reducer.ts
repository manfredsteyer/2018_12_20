import { AppState } from './../../+state/index';
import { Action } from '@ngrx/store';
import { FlightBookingActions, FlightBookingActionTypes } from './flight-booking.actions';
import { Flight } from '@flight-workspace/flight-api';
import produce from 'immer';

export const flightBookingStateName = 'flightBooking';

export interface FlightBookingAppStateFragment extends AppState {
  [flightBookingStateName]: FlightBookingState;
}

export interface FlightBookingState {
  flights: Flight[],
  blackList: number[]
}

export const initialState: FlightBookingState = {
  flights: [],
  blackList: [4]
};


// Implicit mit immer

export const reducer = 
  produce((state: FlightBookingState, action: FlightBookingActions) => {
  
    switch (action.type) {

      case FlightBookingActionTypes.FlightsLoaded: {
        //const flights = action.payload.flights;
        state.flights = action.payload.flights;
        return state;
      }
      case FlightBookingActionTypes.FlightUpdated: {
        const flight = action.payload.flight;
        //const flights = state.flights.map(f => f.id == flight.id ? flight : f );
        const index = state.flights.findIndex(f => f.id === flight.id);
        state.flights[index] = action.payload.flight;
        return state;
      }

      default:
        return state;
  }
}, initialState);

/*
// Explizit
export function reducer(state = initialState, action: FlightBookingActions): FlightBookingState {
  switch (action.type) {

    case FlightBookingActionTypes.FlightsLoaded: {
      const flights = action.payload.flights;
      return {...state, flights};
    }
    case FlightBookingActionTypes.FlightUpdated: {
      const flight = action.payload.flight;
      const flights = state.flights.map(f => f.id == flight.id ? flight : f );
      return {...state, flights};
    }

    default:
      return state;
  }
}
*/