import { Component, Input, OnInit } from '@angular/core';
import { NullableNumber } from '@shared/value-objects/nullable-number';

@Component({
  selector: 'app-finance-value',
  templateUrl: './finance-value.component.html',
  styleUrls: ['./finance-value.component.scss']
})
export class FinanceValueComponent implements OnInit {
  textDecodationClass = '';
  zeroValue = '';
  content: NullableNumber | null = null;

  @Input()
  decorate = false;

  @Input()
  hideZero = false;

  @Input()
  title = '';

  @Input('content')
  set setContent(value: number) {
    this.content = new NullableNumber(value);
  }

  get contentValue(): number {
    return this.content?.value ?? 0;
  }

  ngOnInit(): void {
    // Zero value is displayed as 0 within the separate template
    if (this.content != null && this.decorate && this.content.hasValue) {

      const value = this.content.value!;

      if (value > 0) {
        this.textDecodationClass = 'text-success';
      } else if (value < 0) {
        this.textDecodationClass = 'text-danger';
      } else {
        this.textDecodationClass = 'text-warning';
      }
    }

    this.zeroValue = this.hideZero ? '-' : '0';
  }
}
