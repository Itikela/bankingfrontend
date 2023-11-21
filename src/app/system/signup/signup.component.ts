
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent  {

  firstName: string = '';
  lastName: string = '';
  username: string = '';
  password: string = '';
  pin: string = '';
  dob: string = '';

  constructor(private router: Router) {}

  signUp(): void {
    this.router.navigate(['/signin']);
  }
  
  
  
}
