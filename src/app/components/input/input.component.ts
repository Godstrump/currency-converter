import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control = new FormControl('');
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() name = '';
  @Input() inputType = 'input';

  constructor() {}

  ngOnInit(): void {}
}
