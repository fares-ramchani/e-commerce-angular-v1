import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticated : boolean=false;
  role : any;
  domaine:any;
  username : any;
  accessToken!:string;
  message!:string;

  constructor(private http:HttpClient) { }
  public login(username : string, password : string){
    let options={
      headers : new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }
    let params =new HttpParams().set("username",username).set("password",password);
return this.http.post<any>("http://localhost:8081/auth/login", params, options)
  }
  loadProfile(data : any){
    this.isAuthenticated=true;
    this.accessToken=data['acces-token'];
    localStorage.setItem('message',data['acces-token']);
    let decodedJwt:any = jwtDecode(this.accessToken);
    this.username=decodedJwt.sub;
    this.role=decodedJwt.scope;
    this.domaine=data['domaine']
    localStorage.setItem('userName',this.username.toString())
    localStorage.setItem('ia',this.isAuthenticated.toString())
  }
  logout(){
  this.isAuthenticated=false;
  this.role =undefined;
  this.username =undefined;
  this.accessToken="";
  localStorage.setItem('userName',"")
  localStorage.setItem('ia','false')
  }


  private iaSubject = new BehaviorSubject<string>(localStorage.getItem('ia') || 'false');
  ia$ = this.iaSubject.asObservable();
  updateIa(value: string) {
    this.iaSubject.next(value);
  }
  
  private UserNameSubject = new BehaviorSubject<any>(localStorage.getItem('userName') || '');
  userName$ = this.UserNameSubject.asObservable();
  updateUserName(value: any) {
    this.UserNameSubject.next(value);
  }
  
}
