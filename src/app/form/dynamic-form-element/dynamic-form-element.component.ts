import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {ElementBase} from '../../model/element-base';

@Component({
  selector: 'dynamic-form-element',
  templateUrl: './dynamic-form-element.component.html'
})
export class DynamicFormElementComponent {

  @Input()
  public element: ElementBase<any>;
  @Input()
  form: FormGroup;

  constructor() {}

}
