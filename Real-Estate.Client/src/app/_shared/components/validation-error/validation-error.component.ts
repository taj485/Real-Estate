import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css']
})
export class ValidationErrorComponent {

  @Input() control!: AbstractControlDirective | AbstractControl;

  error(){
    const errorType = this.control.errors ? Object.keys(this.control.errors)[0] : [];
    //console.log(this.control)

    switch(errorType) {
      case 'required' : {
        return 'This field is required'
      }
      default: {
        return null;
      }
    }

  }

}
