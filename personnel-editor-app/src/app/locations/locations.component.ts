import {Component, OnInit} from '@angular/core';
import {Address} from "../models/Address";
import {State} from "../models/State";
import {City} from "../models/City";
import {ModelError} from "../models/ModelError";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  // data bindings
  street1: string;
  street2: string;
  selectedState: State;
  selectedCity: City;
  zip: string;

  isValid: boolean = true;
  errorMessages: ModelError[] = [];

  // collection
  addresses: Address[] = [];

  // data sources
  states: State[] = [
    new State(1, 'Missouri'),
    new State(2, 'California')
  ];

  cities: City[] = [
    new City(1, 'St. Louis', 1),
    new City(2, 'St. Charles', 1),
    new City(3, 'San Francisco', 2),
    new City(4, 'L.A.', 2),
  ];

  availableCities: City[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onSaveAddress() {
    var newAddress = new Address(
      this.street1,
      this.street2,
      this.selectedCity,
      this.selectedState,
      this.zip
    );

    this.isValid = newAddress.isValid();
    this.errorMessages = newAddress.getErrors();

    if (this.isValid) {
      // add new entry into the array of addresses
      this.addresses.push(newAddress);

      // clear form
      this.street1 = undefined;
      this.street2 = undefined;
      this.selectedCity = undefined;
      this.selectedState = undefined;
      this.zip = undefined;
    }
    else {

    }
  }

  onStateChange(state: State) {
    this.availableCities = [];
    for (let city of this.cities) {
      if (city.stateId == state.id) {
        this.availableCities.push(city);
      }
    }
  }
}
