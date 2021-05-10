import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss']
})
export class FieldErrorComponent implements OnInit {
  @Input() formGroup: FormGroup | null = null;
  @Input() fieldName: string | null = null;
  @Input() max: string | null = null;
  @Input() min: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  get shouldShowError(): boolean {
    if (this.formGroup == null) {
      return false;
    }

    return this.tryReturnValid();
  }

  get field(): AbstractControl | null {
    if (this.formGroup != null) {
      return this.formGroup.get(this.fieldName!);
    }
    return null;
  }

  get errors(): ValidationErrors | null {
    return this.field?.errors ?? null;
  }

  private tryReturnValid(): boolean {
    try {
      return this.field != null && this.field.invalid && (this.field.dirty || this.field.touched);
    } catch (e) {
      throw Error('Cannot get valid property from the field ' + this.fieldName);
    }
  }
}
