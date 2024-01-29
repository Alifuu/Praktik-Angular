import { Injectable } from '@angular/core';
import { Observable, findIndex, of } from 'rxjs';
import {User} from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

 private users: User[] = [
  { id: 1, name: 'Alfredo'},
  { id: 2, name: 'Fajar Ali'},
  { id: 3, name: 'Munib'}
 ];
 getUsers(): Observable<User[]> {
  return of(this.users);
 }

 addUser(user: User): Observable<void> {
  user.id = this.users.length + 1;
  this.users.push(user);
  return of();
  }
  updateUser(user: User): Observable<void> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
  }
  return of();
}

deleteUser(userId: number): Observable<void> {
this.users = this.users.filter(u => u.id !== userId);
return of();
}
}
