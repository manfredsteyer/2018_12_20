import {Component} from '@angular/core';
import { AppState } from './+state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<AppState>) { 

    store.dispatch({ type: 'inc'});
    store.dispatch({ type: 'inc'});
    store.dispatch({ type: 'inc'});
    store.dispatch({ type: 'dec'});

    store.select(t => t.counter).subscribe(c => console.debug('counter', c));
  }
}

