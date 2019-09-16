import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { last, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class AuthService {
  currentUser: IUser

  constructor(private http:HttpClient){}

  loginUser(userName: string, password: string){

    let loginInfo = { username: userName, password: password}
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data['user']
      }))
      .pipe(catchError(err => {
        return of(false)
      }))
    // this.currentUser = {
    //   id: 1,
    //   userName: userName,
    //   firstName: 'Wht',
    //   lastName: 'Ever'
    // }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }

  checkAuthenticationStatus(){
    this.http.get('/api/currentIdentity')
    .pipe(tap(data => {
      if(data instanceof Object) {
        this.currentUser = <IUser>data
      }
    })).subscribe()
  }

  updateCurrentUser(first: string, last: string){
    this.currentUser.firstName= first
    this.currentUser.lastName= last
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}
   return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options)
  }

  logout() {
    this.currentUser = undefined
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.post('/api/logout', {}, options)
  }
}
