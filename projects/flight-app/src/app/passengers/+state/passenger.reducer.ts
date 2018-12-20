import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Passengers\+state\Passenger } from './passengers\+state\passenger.model';
import { Passengers\+state\PassengerActions, Passengers\+state\PassengerActionTypes } from './passengers\+state\passenger.actions';

export interface State extends EntityState<Passengers\+state\Passenger> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Passengers\+state\Passenger> = createEntityAdapter<Passengers\+state\Passenger>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: Passengers\+state\PassengerActions
): State {
  switch (action.type) {
    case Passengers\+state\PassengerActionTypes.AddPassengers\+state\Passenger: {
      return adapter.addOne(action.payload.passengers\+state\Passenger, state);
    }

    case Passengers\+state\PassengerActionTypes.UpsertPassengers\+state\Passenger: {
      return adapter.upsertOne(action.payload.passengers\+state\Passenger, state);
    }

    case Passengers\+state\PassengerActionTypes.AddPassengers\+state\Passengers: {
      return adapter.addMany(action.payload.passengers\+state\Passengers, state);
    }

    case Passengers\+state\PassengerActionTypes.UpsertPassengers\+state\Passengers: {
      return adapter.upsertMany(action.payload.passengers\+state\Passengers, state);
    }

    case Passengers\+state\PassengerActionTypes.UpdatePassengers\+state\Passenger: {
      return adapter.updateOne(action.payload.passengers\+state\Passenger, state);
    }

    case Passengers\+state\PassengerActionTypes.UpdatePassengers\+state\Passengers: {
      return adapter.updateMany(action.payload.passengers\+state\Passengers, state);
    }

    case Passengers\+state\PassengerActionTypes.DeletePassengers\+state\Passenger: {
      return adapter.removeOne(action.payload.id, state);
    }

    case Passengers\+state\PassengerActionTypes.DeletePassengers\+state\Passengers: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case Passengers\+state\PassengerActionTypes.LoadPassengers\+state\Passengers: {
      return adapter.addAll(action.payload.passengers\+state\Passengers, state);
    }

    case Passengers\+state\PassengerActionTypes.ClearPassengers\+state\Passengers: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
