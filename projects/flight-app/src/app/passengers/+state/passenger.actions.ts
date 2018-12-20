import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Passengers\+state\Passenger } from './passengers\+state\passenger.model';

export enum Passengers\+state\PassengerActionTypes {
  LoadPassengers\+state\Passengers = '[Passengers\+state\Passenger] Load Passengers\+state\Passengers',
  AddPassengers\+state\Passenger = '[Passengers\+state\Passenger] Add Passengers\+state\Passenger',
  UpsertPassengers\+state\Passenger = '[Passengers\+state\Passenger] Upsert Passengers\+state\Passenger',
  AddPassengers\+state\Passengers = '[Passengers\+state\Passenger] Add Passengers\+state\Passengers',
  UpsertPassengers\+state\Passengers = '[Passengers\+state\Passenger] Upsert Passengers\+state\Passengers',
  UpdatePassengers\+state\Passenger = '[Passengers\+state\Passenger] Update Passengers\+state\Passenger',
  UpdatePassengers\+state\Passengers = '[Passengers\+state\Passenger] Update Passengers\+state\Passengers',
  DeletePassengers\+state\Passenger = '[Passengers\+state\Passenger] Delete Passengers\+state\Passenger',
  DeletePassengers\+state\Passengers = '[Passengers\+state\Passenger] Delete Passengers\+state\Passengers',
  ClearPassengers\+state\Passengers = '[Passengers\+state\Passenger] Clear Passengers\+state\Passengers'
}

export class LoadPassengers\+state\Passengers implements Action {
  readonly type = Passengers\+state\PassengerActionTypes.LoadPassengers\+state\Passengers;

  constructor(public payload: { passengers\+state\Passengers: Passengers\+state\Passenger[] }) {}
}

export class AddPassengers\+state\Passenger implements Action {
  readonly type = Passengers\+state\PassengerActionTypes.AddPassengers\+state\Passenger;

  constructor(public payload: { passengers\+state\Passenger: Passengers\+state\Passenger }) {}
}

export class UpsertPassengers\+state\Passenger implements Action {
  readonly type = Passengers\+state\PassengerActionTypes.UpsertPassengers\+state\Passenger;

  constructor(public payload: { passengers\+state\Passenger: Passengers\+state\Passenger }) {}
}

export class AddPassengers\+state\Passengers implements Action {
  readonly type = Passengers\+state\PassengerActionTypes.AddPassengers\+state\Passengers;

  constructor(public payload: { passengers\+state\Passengers: Passengers\+state\Passenger[] }) {}
}

export class UpsertPassengers\+state\Passengers implements Action {
  readonly type = Passengers\+state\PassengerActionTypes.UpsertPassengers\+state\Passengers;

  constructor(public payload: { passengers\+state\Passengers: Passengers\+state\Passenger[] }) {}
}

export class UpdatePassengers\+state\Passenger implements Action {
  readonly type = Passengers\+state\PassengerActionTypes.UpdatePassengers\+state\Passenger;

  constructor(public payload: { passengers\+state\Passenger: Update<Passengers\+state\Passenger> }) {}
}

export class UpdatePassengers\+state\Passengers implements Action {
  readonly type = Passengers\+state\PassengerActionTypes.UpdatePassengers\+state\Passengers;

  constructor(public payload: { passengers\+state\Passengers: Update<Passengers\+state\Passenger>[] }) {}
}

export class DeletePassengers\+state\Passenger implements Action {
  readonly type = Passengers\+state\PassengerActionTypes.DeletePassengers\+state\Passenger;

  constructor(public payload: { id: string }) {}
}

export class DeletePassengers\+state\Passengers implements Action {
  readonly type = Passengers\+state\PassengerActionTypes.DeletePassengers\+state\Passengers;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearPassengers\+state\Passengers implements Action {
  readonly type = Passengers\+state\PassengerActionTypes.ClearPassengers\+state\Passengers;
}

export type Passengers\+state\PassengerActions =
 LoadPassengers\+state\Passengers
 | AddPassengers\+state\Passenger
 | UpsertPassengers\+state\Passenger
 | AddPassengers\+state\Passengers
 | UpsertPassengers\+state\Passengers
 | UpdatePassengers\+state\Passenger
 | UpdatePassengers\+state\Passengers
 | DeletePassengers\+state\Passenger
 | DeletePassengers\+state\Passengers
 | ClearPassengers\+state\Passengers;
