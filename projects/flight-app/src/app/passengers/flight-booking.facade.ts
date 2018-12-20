import { FlightService } from './../../../../flight-api/src/lib/services/flight.service';
import { LoadFlights } from './../flight-booking/+state/flight-booking.actions';
import { Observable } from "rxjs";
import { Flight } from "@flight-workspace/flight-api";
import { Injectable } from "@angular/core";
import { FlightBookingAppStateFragment } from "../flight-booking/+state/flight-booking.reducer";
import { Store } from "@ngrx/store";
import { getFlights } from "../flight-booking/+state/flight-booking.selectors";
import { FlightsLoaded } from "../flight-booking/+state/flight-booking.actions";

@Injectable({providedIn: 'root'})
export class FlightBookingFacade {

    flights$: Observable<Flight[]>;

    constructor(
        private flightService: FlightService,
        private store: Store<FlightBookingAppStateFragment>) {
        this.flights$ = store.select(getFlights);
    }

    load(from: string, to: string, urgent: boolean): void {
        this.store.dispatch(new LoadFlights({from, to, urgent}));
    }

    loadWithoutEffects(from: string, to: string, urgent: boolean): void {
        this.flightService.find(from,to, urgent).subscribe(
            flights => this.store.dispatch(new FlightsLoaded({flights})),
            err => console.error('error', err)
        )
    }

}