import {ModelError} from "./ModelError";

export class ModelBase {

  private errors: ModelError[] = [];

  addError(propertyName: string, errorMessage: string): void {
    this.errors.push(new ModelError(propertyName, errorMessage));
  }

  getErrors(): ModelError[] {
    return this.errors;
  }

  isValid() : boolean {
    this.errors = [];
    this.validate();
    return this.errors.length === 0;
  }

  validate() : void {
    // override this inside the derived class...
    console.log('validating...')
  }
}
