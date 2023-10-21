import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/_shared/components/base-components/base-component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit  {

  constructor(private fb: FormBuilder){
    super()
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.setForm()

  }

  setForm() {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.showSpinner = true
      setTimeout(() => {
        console.log('Form submitted with values:', this.form.value);
        this.showSpinner = false
      }, 2000);

    } else {
      this.formIncomplete();
    }
  }
}
