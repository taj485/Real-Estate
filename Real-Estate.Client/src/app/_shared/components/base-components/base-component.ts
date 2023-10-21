import { AbstractControl, FormGroup } from "@angular/forms";


export abstract class BaseComponent {
  showSpinner!: boolean
  form!: FormGroup;

  constructor() {}

  get ct() {
    return this.form.controls;
  }

  getFormControl(controlName: string): AbstractControl {
    const ct = this.form.get(controlName);
    if (!ct) throw new TypeError(`No control exists with name ${controlName}`);
    return ct;
  }

  formIncomplete(): void {
    this.form.markAllAsTouched();
    //this.toastr.warning('The form is incomplete! Please complete the required fields (highlighed in red).');
    // logInvalidControls(this.form);
  }


}
