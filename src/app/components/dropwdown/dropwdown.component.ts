import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropwdown',
  templateUrl: './dropwdown.component.html',
  styleUrls: ['./dropwdown.component.css'],
})
export class DropwdownComponent implements OnChanges {
  @Input() control = new FormControl('');
  @Input() placeholder = 'Select a currency';
  @Input() displayName = '';
  @Input() id = '';
  @Input() dropdowns: any = [];
  @Input() dropdownObj: any = {};
  @Input() isDropDownObj = false;
  @Input() selectTitle = '';
  @Output() selectCurrencyOutput = new EventEmitter();

  dropDowns: any = [] || {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes', this.dropdowns.id);
  }

  transformDropdown(obj: any) {
    return Object.keys(obj);
  }

  selectCurrency(event: any) {
    this.selectCurrencyOutput.emit(event.target.value);
  }

  OnDestroy() {
    this.dropDowns = undefined;
  }
}
