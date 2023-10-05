import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   @ViewChild('loginModal') loginModal!: ElementRef;

  openModal() {
    this.loginModal.nativeElement.show();
  }

  closeModal() {
    this.loginModal.nativeElement.hide();
  }
}
