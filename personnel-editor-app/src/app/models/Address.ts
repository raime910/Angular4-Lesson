import {City} from "./City";
import {State} from "./State";
import {ModelBase} from "./ModelBase";
import {isNullOrUndefined} from "util";

export class Address extends ModelBase {
  constructor(public street1: string,
              public street2: string,
              public city: City,
              public state: State,
              public zip: string) {
    super();
  }

  validate(): boolean {
    if (isNullOrUndefined(this.street1) || this.street1.trim() === '') {
      this.addError('street1', 'Street 1 is a required field');
    }

    if (isNullOrUndefined(this.city)) {
      this.addError('city', 'City is a required field');
    }

    if (isNullOrUndefined(this.state)) {
      this.addError('state', 'State is a required field');
    }

    if (isNullOrUndefined(this.street1) || this.zip.trim() === '') {
      this.addError('zip', 'Zip is a required field');
    }

    return true;
  }
}
