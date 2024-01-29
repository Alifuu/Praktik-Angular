import { Component, OnInit } from '@angular/core';
import { UserService} from './user.service';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  template: `
  <h2>List of Users:</h2>
  <ul> 
    <li *ngFor="let user of users"> 
    {{user.name}}
    <button (click)="editUser(user)">Edit</button>
    <button (click)="deleteUser(user.id)">Delete</button>
    </li>
  </ul>

  <h2> Add New User:</h2>
    <form (submit)="addUser()">
      <label for="newUserName">Name:</label>
      <input id="newUserName" [(ngModel)]="newUser.name" name="newUserName" required />
      <button type="submit">Add</button>
    </form>

    <div *ngIf="editingUser">
      <h2>Edit User:</h2>
      <form (submit)="updateUser()">
        <label for="editUserName">Name:</label>
        <input id="editUserName" [(ngModel)]="editingUser.name" name="editUserName" required />
        <button type="submit">Update</button>
      </form>
    </div>`
  ,
})
export class UserComponent implements OnInit {
  users: User[] = [];
  newUser: User ={id: 0, name: ''};
  editingUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
  addUser(): void {
    this.userService.addUser(this.newUser).subscribe(()=>{
      this.newUser = {id: 0, name: ''};
      this.loadUsers();
    
    });
  }
  editUser(user: User): void {
    this.editingUser = { ...user};
  }
  updateUser(): void {
    if (this.editingUser) {
      this.userService.updateUser(this.editingUser).subscribe(()=>{
        this.editingUser = null;
        this.loadUsers();
      });
    }
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(()=>{
      this.loadUsers();
    });
  }
}

