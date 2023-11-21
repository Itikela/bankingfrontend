import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SignInComponent {
  username: string=' ';
  password: string='';

  

  constructor(private router: Router) {}

  signIn(): void {
  
   
      this.router.navigate(['/accountdetails']);
    
  }
}
