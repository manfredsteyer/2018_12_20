import { FlightBookingAppStateFragment, FlightBookingState } from './flight-booking.reducer';
import { createSelector, createFeatureSelector } from "@ngrx/store";


export const getFlights = 
    createSelector(
        (s: FlightBookingAppStateFragment) => s.flightBooking.flights,
        (s: FlightBookingAppStateFragment) => s.flightBooking.blackList,
        (flights, blackList) => flights.filter(f => !blackList.includes(f.id))
    );
    
/*
// Alternative zum Vermeiden des AppStateFragments
    createSelector(createFeatureSelector('flightBooking'),
        (fbs:FlightBookingState) => fbs.flights);

*/