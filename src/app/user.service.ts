import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:8081/user/getuser";
  getAllUsers():Observable<User[]>{}
  return this.http.get<user[]>.(this.baseUrl);
}
