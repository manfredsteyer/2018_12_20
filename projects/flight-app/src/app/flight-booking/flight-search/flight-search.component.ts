import { FlightBookingAppStateFragment } from './../+state/flight-booking.reducer';
import {Component, OnInit} from '@angular/core';
import {FlightService, Flight} from '@flight-workspace/flight-api';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FlightsLoaded, LoadFlights } from '../+state/flight-booking.actions';
import { getFlights } from '../+state/flight-booking.selectors';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg'; // in Germany
  to: string = 'Graz'; // in Austria
  urgent: boolean = false;

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: object = {
    "3": true,
    "5": true
  };

  flights$: Observable<Flight[]>;

  constructor(
    private store: Store<FlightBookingAppStateFragment>,
    private flightService: FlightService) {
  }

  ngOnInit() {
    this.flights$ = this.store.select(getFlights);  
  }

  search(): void {
    if (!this.from || !this.to) return;
    this.store.dispatch(new LoadFlights({from: this.from, to: this.to, urgent: this.urgent}));
  }

  delay(): void {
    this.flightService.delay();
  }

}
