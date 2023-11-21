import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  private baseUrl: string = "http://localhost:8081/bankingapp/api/account";
  constructor(private http: HttpClient) {}

}

  

