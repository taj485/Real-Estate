import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';


@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    ValidationErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent,
    ValidationErrorComponent
  ]
})

export class SharedModule { }
