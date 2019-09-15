import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { last } from 'rxjs/operators';

@Injectable()

export class AuthService {
  currentUser: IUser
  loginUser(userName: string, password: string){
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Wht',
      lastName: 'Ever'
    }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }

  updateCurrentUser(first: string, last: string){
    this.currentUser.firstName= first
    this.currentUser.lastName= last

  }
}
