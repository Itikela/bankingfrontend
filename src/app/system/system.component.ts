import { Component } from '@angular/core';
import { Router } from '@angular/router';
/*import { ModalService } from '../modal.service';*/
import { SignInComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent {
  constructor(private router: Router, /*private modalService: ModalService*/) {}

  openSignInModal(): void {
    this.router.navigate(['/signin']);
  }

  openSignUpModal(): void {
    this.router.navigate(['/signup']);
  }
 
}
