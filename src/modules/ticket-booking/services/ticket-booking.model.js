import AttrModel from "services/config/attr.model";

export const SearchTicketBookingModel = [
  new AttrModel("passenger_name", "passenger_name", true),
  new AttrModel("phone_number", "phone_number", true),
  new AttrModel("departure_station", "departure_station", true),
  new AttrModel("arrival_station", "arrival_station", true),
  new AttrModel("departure_date", "departure_date", true),
  new AttrModel("departure_time", "departure_time", true),
  new AttrModel("seat_number", "seat_number", true),
  new AttrModel("coach_number", "coach_number"),
  new AttrModel("ticket_price", "ticket_price", true),
  new AttrModel("ticket_type", "ticket_type"),
  new AttrModel("status", "status"),
  new AttrModel("notes", "notes"),
];

export const CreateTicketBookingModel = [
  new AttrModel("passenger_name", "passenger_name", true),
  new AttrModel("phone_number", "phone_number", true),
  new AttrModel("departure_station", "departure_station", true),
  new AttrModel("arrival_station", "arrival_station", true),
  new AttrModel("departure_date", "departure_date", true),
];

export const UpdateCreateTicketBookingModel = [
  new AttrModel("passenger_name", "passenger_name", true),
  new AttrModel("phone_number", "phone_number", true),
  new AttrModel("departure_station", "departure_station", true),
  new AttrModel("arrival_station", "arrival_station", true),
  new AttrModel("departure_date", "departure_date", true),
];
