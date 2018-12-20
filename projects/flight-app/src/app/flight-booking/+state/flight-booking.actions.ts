import { Action } from '@ngrx/store';
import { Flight } from '@flight-workspace/flight-api';

export enum FlightBookingActionTypes {
  FlightsLoaded = '[FlightBooking] FlightsLoaded',
  FlightUpdated = '[FlightBooking] FlightUpdated',
  LoadFlights = '[FlightBooking] LoadFlights',
}

export class LoadFlights implements Action {
  readonly type = FlightBookingActionTypes.LoadFlights;

  constructor(readonly payload: { from: string, to: string, urgent: boolean }) {
  }
  
}

export class FlightsLoaded implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoaded;

  constructor(readonly payload: { flights: Flight[] }) {
  }
  
}

export class FlightUpdated implements Action {
  readonly type = FlightBookingActionTypes.FlightUpdated;
  constructor(readonly payload: { flight: Flight }) {
  }
}

export type FlightBookingActions = FlightsLoaded | FlightUpdated | LoadFlights;

