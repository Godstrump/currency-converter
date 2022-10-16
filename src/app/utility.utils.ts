import { AbstractControl, FormControl } from '@angular/forms';

export class Utility {
  abs(abs: AbstractControl | null): FormControl {
    return abs as FormControl;
  }
}
